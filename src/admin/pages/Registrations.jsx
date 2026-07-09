import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search, Filter, SortDesc, Eye, Trash2, RefreshCw,
  ChevronDown, AlertTriangle,
} from "lucide-react";
import { supabase, isSupabaseReady, supabaseValidationError } from "../../lib/supabaseClient";
import { normalizeMobile, formatMobileForDisplay } from "../../utils/mobile";
import SkeletonRow from "../components/SkeletonRow";
import Pagination from "../components/Pagination";
import UserDrawer from "../components/UserDrawer";
import DeleteModal from "../components/DeleteModal";

const FILTERS = [
  { key: "all", label: "All" },
  { key: "today", label: "Today" },
  { key: "yesterday", label: "Yesterday" },
  { key: "week", label: "This Week" },
  { key: "month", label: "This Month" },
];

const SORTS = [
  { key: "newest", label: "Newest First" },
  { key: "oldest", label: "Oldest First" },
  { key: "name_asc", label: "Name (A–Z)" },
  { key: "name_desc", label: "Name (Z–A)" },
];

function formatDateTime(dateStr) {
  if (!dateStr) return { date: "—", time: "—" };
  const d = new Date(dateStr);
  return {
    date: d.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" }),
    time: d.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" }),
  };
}

export default function Registrations() {
  const [allData, setAllData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("newest");
  const [sortOpen, setSortOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [error, setError] = useState("");

  const [viewUser, setViewUser] = useState(null);
  const [deleteUser, setDeleteUser] = useState(null);

  const fetchAll = useCallback(async (silent = false) => {
    if (!isSupabaseReady || !supabase) { setLoading(false); return; }
    if (!silent) setLoading(true);
    else setRefreshing(true);

    try {
      setError("");
      // Check schema first to see if registration_count/last_registered_at exists
      const { error: schemaErr } = await supabase
        .from("demo_users")
        .select("registration_count")
        .limit(1);
      const hasNewSchema = !schemaErr;

      const query = supabase.from("demo_users").select("*");
      if (hasNewSchema) {
        query.order("last_registered_at", { ascending: false });
      } else {
        query.order("created_at", { ascending: false });
      }

      const { data, error: fetchErr } = await query;
      if (fetchErr) throw fetchErr;
      setAllData(data || []);
    } catch (e) {
      console.error("[Registrations] fetch error:", e);
      setError(e.message || "Failed to load registrations from database.");
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, []);

  useEffect(() => { fetchAll(); }, [fetchAll]);

  // Apply filters
  const filtered = (() => {
    let d = [...allData];

    // Search
    if (search.trim()) {
      const q = search.trim().toLowerCase();
      const normalizedQ = normalizeMobile(q);
      d = d.filter((r) => {
        const fullNameMatch = r.full_name?.toLowerCase().includes(q);
        const mobileMatch = r.mobile_number?.includes(q) ||
                            (normalizedQ && r.mobile_number?.includes(normalizedQ)) ||
                            (r.mobile_number && normalizeMobile(r.mobile_number).includes(q));
        const emailMatch = r.email?.toLowerCase().includes(q);
        return fullNameMatch || mobileMatch || emailMatch;
      });
    }

    // Date/status filter
    const now = new Date();
    const todayStart = new Date(now); todayStart.setHours(0, 0, 0, 0);
    const yesterdayStart = new Date(todayStart); yesterdayStart.setDate(yesterdayStart.getDate() - 1);
    const weekStart = new Date(todayStart); weekStart.setDate(weekStart.getDate() - 7);
    const monthStart = new Date(todayStart); monthStart.setDate(1);

    if (filter === "today") d = d.filter((r) => new Date(r.last_registered_at || r.created_at) >= todayStart);
    else if (filter === "yesterday") d = d.filter((r) => {
      const t = new Date(r.last_registered_at || r.created_at);
      return t >= yesterdayStart && t < todayStart;
    });
    else if (filter === "week") d = d.filter((r) => new Date(r.last_registered_at || r.created_at) >= weekStart);
    else if (filter === "month") d = d.filter((r) => new Date(r.last_registered_at || r.created_at) >= monthStart);

    // Sort
    if (sort === "oldest") d.sort((a, b) => new Date(a.last_registered_at || a.created_at) - new Date(b.last_registered_at || b.created_at));
    else if (sort === "name_asc") d.sort((a, b) => (a.full_name || "").localeCompare(b.full_name || ""));
    else if (sort === "name_desc") d.sort((a, b) => (b.full_name || "").localeCompare(a.full_name || ""));
    // newest is default (already sorted by DB)

    return d;
  })();

  const totalPages = Math.max(1, Math.ceil(filtered.length / perPage));
  const paginated = filtered.slice((page - 1) * perPage, page * perPage);

  const handleFilter = (key) => { setFilter(key); setPage(1); };
  const handleSearch = (v) => { setSearch(v); setPage(1); };



  const ActionBtn = ({ icon: Icon, label, onClick, colorClass = "hover:bg-primary-50 hover:text-primary-600" }) => (
    <button
      title={label}
      aria-label={label}
      onClick={onClick}
      className={`w-8 h-8 rounded-lg flex items-center justify-center text-surface-400 transition-all duration-150 ${colorClass}`}
    >
      <Icon size={15} />
    </button>
  );

  return (
    <div className="space-y-5">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h2 className="text-xl font-extrabold text-surface-900">Demo Registrations</h2>
          <p className="text-sm text-surface-400 mt-0.5">
            {loading ? "Loading…" : `${filtered.length} result${filtered.length !== 1 ? "s" : ""}`}
          </p>
        </div>
        <button
          id="refresh-registrations"
          onClick={() => fetchAll(true)}
          className={`flex items-center gap-2 px-3.5 py-2 rounded-xl border border-surface-200 text-sm font-semibold text-surface-600 hover:bg-surface-100 transition-all ${refreshing ? "opacity-60 pointer-events-none" : ""}`}
        >
          <RefreshCw size={14} className={refreshing ? "animate-spin" : ""} />
          Refresh
        </button>
      </div>

      {/* Supabase warning */}
      {!isSupabaseReady && (
        <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-amber-50 border border-amber-200 text-amber-700 text-sm font-medium">
          <AlertTriangle size={16} className="shrink-0" />
          {supabaseValidationError || "Supabase is not configured. Add your credentials to environment variables to see data."}
        </div>
      )}

      {/* Supabase error alert */}
      {error && (
        <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm font-medium">
          <AlertTriangle size={16} className="shrink-0 text-red-500" />
          <span><strong>Database Connection Error:</strong> {error}</span>
        </div>
      )}

      {/* Search + Sort */}
      <div className="flex flex-col sm:flex-row gap-3">
        {/* Search */}
        <div className="relative flex-1">
          <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-surface-400 pointer-events-none" />
          <input
            id="registrations-search"
            type="text"
            value={search}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Search by name or mobile number…"
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-surface-200 text-sm font-medium text-surface-800 placeholder:text-surface-300 bg-white focus:outline-none focus:ring-2 focus:ring-primary-200 focus:border-primary-400 transition-all"
          />
        </div>

        {/* Sort dropdown */}
        <div className="relative">
          <button
            id="sort-dropdown-btn"
            onClick={() => setSortOpen((v) => !v)}
            className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl border border-surface-200 bg-white text-sm font-semibold text-surface-700 hover:border-primary-300 hover:text-primary-700 transition-all whitespace-nowrap"
          >
            <SortDesc size={14} />
            {SORTS.find((s) => s.key === sort)?.label}
            <ChevronDown size={13} className={`transition-transform ${sortOpen ? "rotate-180" : ""}`} />
          </button>
          <AnimatePresence>
            {sortOpen && (
              <motion.div
                initial={{ opacity: 0, y: 6, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 6, scale: 0.97 }}
                className="absolute right-0 top-12 w-44 bg-white rounded-xl border border-surface-200 shadow-xl z-20 overflow-hidden"
              >
                {SORTS.map((s) => (
                  <button
                    key={s.key}
                    onClick={() => { setSort(s.key); setSortOpen(false); setPage(1); }}
                    className={`w-full text-left px-4 py-2.5 text-sm font-medium transition-colors ${
                      sort === s.key ? "bg-primary-50 text-primary-700 font-semibold" : "text-surface-700 hover:bg-surface-50"
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2">
        {FILTERS.map((f) => (
          <button
            key={f.key}
            id={`filter-${f.key}`}
            onClick={() => handleFilter(f.key)}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all duration-150 ${
              filter === f.key
                ? "bg-primary-600 text-white shadow-sm shadow-primary-600/20"
                : "bg-white border border-surface-200 text-surface-600 hover:border-primary-200 hover:text-primary-600"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl border border-surface-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px]">
            <thead>
              <tr className="border-b border-surface-100 bg-surface-50/70">
                {["#", "Full Name", "Mobile Number", "Email Address", "Total Count", "Today's Count", "First Registered", "Last Registered", "Last Time", "Actions"].map((h) => (
                  <th key={h} className="px-5 py-3.5 text-left text-[11px] font-bold text-surface-400 uppercase tracking-wider whitespace-nowrap">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {loading ? (
                Array.from({ length: perPage }).map((_, i) => <SkeletonRow key={i} cols={10} />)
              ) : paginated.length === 0 ? (
                <tr>
                  <td colSpan={10} className="px-5 py-16 text-center">
                    <div className="flex flex-col items-center gap-2">
                      <Filter size={28} className="text-surface-200" />
                      <p className="text-surface-400 font-medium text-sm">No registrations found</p>
                      <p className="text-surface-300 text-xs">Try adjusting your search or filter</p>
                    </div>
                  </td>
                </tr>
              ) : (
                paginated.map((user, i) => {
                  const created = formatDateTime(user.created_at || user.first_registered_at);
                  const updated = formatDateTime(user.last_registered_at || user.updated_at || user.created_at);
                  
                  // Date logic for displaying today's count
                  const isToday = (() => {
                    if (!user.last_registered_at) return false;
                    const prevDate = new Date(user.last_registered_at);
                    const today = new Date();
                    return (
                      prevDate.getFullYear() === today.getFullYear() &&
                      prevDate.getMonth() === today.getMonth() &&
                      prevDate.getDate() === today.getDate()
                    );
                  })();
                  const todaysCount = isToday ? (user.daily_registration_count || 1) : 0;
                  
                  const rowNum = (page - 1) * perPage + i + 1;
                  return (
                    <motion.tr
                      key={user.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: i * 0.02 }}
                      className="border-b border-surface-50 hover:bg-primary-50/20 transition-colors group"
                    >
                      <td className="px-5 py-3.5 text-xs font-bold text-surface-400">#{rowNum}</td>
                      <td className="px-5 py-3.5">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white text-xs font-bold shrink-0">
                            {user.full_name?.charAt(0)?.toUpperCase()}
                          </div>
                          <span className="text-sm font-semibold text-surface-800">{user.full_name}</span>
                        </div>
                      </td>
                      <td className="px-5 py-3.5 text-sm text-surface-600 font-medium">{formatMobileForDisplay(user.mobile_number)}</td>
                      <td className="px-5 py-3.5 text-sm text-surface-600 font-medium">{user.email || "No Email"}</td>
                      <td className="px-5 py-3.5 text-sm text-surface-700 font-semibold">{user.registration_count || 1}</td>
                      <td className="px-5 py-3.5 text-sm text-surface-700 font-semibold">{todaysCount}</td>
                      <td className="px-5 py-3.5 text-sm text-surface-600 font-medium">
                        <div className="font-semibold text-surface-700">{created.date}</div>
                        <div className="text-[11px] text-surface-400 mt-0.5">{created.time}</div>
                      </td>
                      <td className="px-5 py-3.5 text-sm text-surface-700 font-semibold">{updated.date}</td>
                      <td className="px-5 py-3.5 text-sm text-surface-600 font-medium">{updated.time}</td>
                      <td className="px-5 py-3.5">
                        <div className="flex items-center gap-0.5 opacity-70 group-hover:opacity-100 transition-opacity">
                          <ActionBtn icon={Eye} label="View" onClick={() => setViewUser(user)} colorClass="hover:bg-primary-50 hover:text-primary-600" />
                          <ActionBtn icon={Trash2} label="Delete" onClick={() => setDeleteUser(user)} colorClass="hover:bg-red-50 hover:text-red-500" />
                        </div>
                      </td>
                    </motion.tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {!loading && filtered.length > 0 && (
          <Pagination
            page={page}
            totalPages={totalPages}
            perPage={perPage}
            total={filtered.length}
            onPage={(p) => setPage(p)}
            onPerPage={(n) => { setPerPage(n); setPage(1); }}
          />
        )}
      </div>

      {/* Modals */}
      <UserDrawer user={viewUser} onClose={() => setViewUser(null)} />
      <DeleteModal user={deleteUser} onClose={() => setDeleteUser(null)} onDeleted={() => fetchAll(true)} />
    </div>
  );
}
