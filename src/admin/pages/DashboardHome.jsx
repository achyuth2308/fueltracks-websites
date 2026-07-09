import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Users, Calendar, UserPlus, ArrowRight, Activity, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { supabase, isSupabaseReady, supabaseValidationError } from "../../lib/supabaseClient";
import { formatMobileForDisplay } from "../../utils/mobile";
import StatCard from "../components/StatCard";

function formatDate(dateStr) {
  if (!dateStr) return "—";
  return new Date(dateStr).toLocaleDateString("en-IN", {
    day: "2-digit", month: "short", year: "numeric",
    hour: "2-digit", minute: "2-digit",
  });
}

export default function DashboardHome() {
  const [stats, setStats] = useState({ unique: null, today: null, attempts: null, mostActiveName: null, mostActiveDesc: null });
  const [recent, setRecent] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchData = async () => {
    if (!isSupabaseReady || !supabase) return;

    const todayStart = new Date();
    todayStart.setHours(0, 0, 0, 0);

    try {
      setError("");

      // Check schema first to see if columns exist
      const { error: schemaErr } = await supabase
        .from("demo_users")
        .select("registration_count, daily_registration_count")
        .limit(1);
      const hasNewSchema = !schemaErr;

      let allRes, recentRes;
      if (hasNewSchema) {
        [allRes, recentRes] = await Promise.all([
          supabase.from("demo_users").select("full_name, mobile_number, registration_count, daily_registration_count, first_registered_at, last_registered_at, created_at"),
          supabase.from("demo_users").select("*").order("last_registered_at", { ascending: false }).limit(5),
        ]);
      } else {
        [allRes, recentRes] = await Promise.all([
          supabase.from("demo_users").select("full_name, mobile_number, created_at"),
          supabase.from("demo_users").select("*").order("created_at", { ascending: false }).limit(5),
        ]);
      }

      if (allRes.error) throw allRes.error;
      if (recentRes.error) throw recentRes.error;

      const allUsers = allRes.data || [];

      // Compute statistics
      const totalUnique = allUsers.length;
      
      const todayUnique = allUsers.filter((u) => {
        const dateStr = u.created_at || u.first_registered_at;
        return dateStr && new Date(dateStr) >= todayStart;
      }).length;

      const totalAttempts = allUsers.reduce((sum, u) => sum + (u.registration_count || 1), 0);

      const todayAttempts = allUsers.reduce((sum, u) => {
        const dateStr = u.last_registered_at || u.created_at;
        const isToday = dateStr && new Date(dateStr) >= todayStart;
        return sum + (isToday ? (u.daily_registration_count || 1) : 0);
      }, 0);

      setStats({
        unique: totalUnique,
        todayUnique: todayUnique,
        attempts: totalAttempts,
        todayAttempts: todayAttempts,
      });
      setRecent(recentRes.data || []);
    } catch (e) {
      console.error("[Dashboard] fetch error:", e);
      setError(e.message || "Failed to load database stats.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    // Refresh every 60s
    const interval = setInterval(fetchData, 60000);
    return () => clearInterval(interval);
  }, []);

  const cards = [
    {
      icon: Users,
      label: "Total Unique Users",
      value: stats.unique,
      description: "Unique people registered",
      gradient: "bg-gradient-to-br from-primary-50/60 to-primary-100/30",
      iconBg: "bg-gradient-to-br from-primary-500 to-primary-600",
      delay: 0,
    },
    {
      icon: UserPlus,
      label: "Today's Unique Registrations",
      value: stats.todayUnique,
      description: "New unique users today",
      gradient: "bg-gradient-to-br from-accent-50/60 to-accent-100/30",
      iconBg: "bg-gradient-to-br from-accent-500 to-accent-600",
      delay: 0.07,
    },
    {
      icon: Activity,
      label: "Total Lifetime Registration Attempts",
      value: stats.attempts,
      description: "Total submissions all time",
      gradient: "bg-gradient-to-br from-emerald-50/60 to-emerald-100/30",
      iconBg: "bg-gradient-to-br from-emerald-500 to-emerald-600",
      delay: 0.14,
    },
    {
      icon: TrendingUp,
      label: "Today's Registration Attempts",
      value: stats.todayAttempts,
      description: "Total attempts made today",
      gradient: "bg-gradient-to-br from-amber-50/60 to-amber-100/30",
      iconBg: "bg-gradient-to-br from-amber-500 to-amber-600",
      delay: 0.21,
    },
  ];

  return (
    <div className="space-y-7">
      {/* Welcome banner */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary-600 to-primary-500 p-6 text-white shadow-lg shadow-primary-600/20"
      >
        <div className="absolute right-0 top-0 bottom-0 w-48 opacity-10">
          <Activity size={200} className="-translate-y-8 translate-x-8" />
        </div>
        <div className="relative">
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-semibold text-primary-200 uppercase tracking-widest">Live Dashboard</span>
          </div>
          <h2 className="text-xl font-extrabold">Welcome to Fuel Tracks Admin</h2>
          <p className="text-sm text-primary-200 mt-1 max-w-md">
            Monitor and manage all demo registrations in real time. All data is live from your Supabase database.
          </p>
        </div>
      </motion.div>

      {/* Database Error warning */}
      {error && (
        <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm font-medium">
          <span className="w-2 h-2 rounded-full bg-red-500 shrink-0" />
          <span><strong>Database Query Error:</strong> {error}. Please check if the 'demo_users' table exists in your Supabase schema.</span>
        </div>
      )}

      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map((card) => (
          <StatCard key={card.label} {...card} />
        ))}
      </div>

      {/* Recent Registrations */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="bg-white rounded-2xl border border-surface-100 shadow-sm overflow-hidden"
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-surface-100">
          <div>
            <h3 className="text-base font-bold text-surface-900">Recent Registrations</h3>
            <p className="text-xs text-surface-400 mt-0.5">Latest 5 demo requests</p>
          </div>
          <Link
            to="/admin/registrations"
            className="flex items-center gap-1.5 text-xs font-semibold text-primary-600 hover:text-primary-700 transition-colors"
          >
            View all <ArrowRight size={13} />
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-surface-50 bg-surface-50/50">
                <th className="px-5 py-3 text-left text-[11px] font-bold text-surface-400 uppercase tracking-wider">Name</th>
                <th className="px-5 py-3 text-left text-[11px] font-bold text-surface-400 uppercase tracking-wider hidden sm:table-cell">Mobile</th>
                <th className="px-5 py-3 text-left text-[11px] font-bold text-surface-400 uppercase tracking-wider hidden md:table-cell">Date & Time</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                Array.from({ length: 5 }).map((_, i) => (
                  <tr key={i} className="animate-pulse border-b border-surface-50">
                    {Array.from({ length: 3 }).map((_, j) => (
                      <td key={j} className="px-5 py-4">
                        <div className="h-4 rounded-lg bg-surface-100 w-3/4" />
                      </td>
                    ))}
                  </tr>
                ))
              ) : recent.length === 0 ? (
                <tr>
                  <td colSpan={3} className="px-5 py-12 text-center text-surface-400 text-sm">
                    No registrations yet.{" "}
                    {!isSupabaseReady && (
                      <span className="text-amber-600 font-medium">{supabaseValidationError || "Configure Supabase to see data."}</span>
                    )}
                  </td>
                </tr>
              ) : (
                recent.map((user, i) => (
                  <motion.tr
                    key={user.id}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="border-b border-surface-50 hover:bg-primary-50/30 transition-colors"
                  >
                    <td className="px-5 py-3.5">
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white text-xs font-bold shrink-0">
                          {user.full_name?.charAt(0)?.toUpperCase()}
                        </div>
                        <span className="text-sm font-semibold text-surface-800">{user.full_name}</span>
                      </div>
                    </td>
                    <td className="px-5 py-3.5 text-sm text-surface-600 hidden sm:table-cell">{formatMobileForDisplay(user.mobile_number)}</td>
                    <td className="px-5 py-3.5 text-xs text-surface-500 hidden md:table-cell">{formatDate(user.last_registered_at || user.created_at)}</td>
                  </motion.tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}
