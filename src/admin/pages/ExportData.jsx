import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Download, FileSpreadsheet, FileText, CheckCircle2, AlertTriangle, Loader2, Calendar,
} from "lucide-react";
import { supabase, isSupabaseReady, supabaseValidationError } from "../../lib/supabaseClient";
import { formatMobileForDisplay } from "../../utils/mobile";

function formatDateDisplay(dateStr) {
  if (!dateStr) return { date: "—", time: "—" };
  const d = new Date(dateStr);
  return {
    date: d.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" }),
    time: d.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" }),
  };
}

function flattenRecord(r) {
  const first = formatDateDisplay(r.created_at || r.first_registered_at);
  const last = formatDateDisplay(r.last_registered_at || r.updated_at || r.created_at);
  
  const isToday = (() => {
    if (!r.last_registered_at) return false;
    const prevDate = new Date(r.last_registered_at);
    const today = new Date();
    return (
      prevDate.getFullYear() === today.getFullYear() &&
      prevDate.getMonth() === today.getMonth() &&
      prevDate.getDate() === today.getDate()
    );
  })();
  const todaysCount = isToday ? (r.daily_registration_count || 1) : 0;

  return {
    "Full Name": r.full_name || "",
    "Mobile Number": formatMobileForDisplay(r.mobile_number),
    "Email Address": r.email || "No Email",
    "Total Attempts": r.registration_count || 1,
    "Today's Attempts": todaysCount,
    "First Registered": `${first.date} ${first.time}`,
    "Last Registered": `${last.date} ${last.time}`,
  };
}

export default function ExportData() {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [exporting, setExporting] = useState(null); // 'xlsx' | 'csv'
  const [success, setSuccess] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  useEffect(() => {
    if (!isSupabaseReady || !supabase) { setLoading(false); return; }
    
    const loadExportData = async () => {
      try {
        const { error: schemaErr } = await supabase
          .from("demo_users")
          .select("registration_count")
          .limit(1);
        const hasNewSchema = !schemaErr;

        const { data } = await supabase
          .from("demo_users")
          .select("*")
          .order(hasNewSchema ? "last_registered_at" : "created_at", { ascending: false });

        setRecords(data || []);
      } catch (e) {
        console.error("[Export] load error:", e);
      } finally {
        setLoading(false);
      }
    };

    loadExportData();
  }, []);

  const filtered = records.filter((r) => {
    if (!startDate && !endDate) return true;
    const t = new Date(r.last_registered_at || r.created_at).getTime();
    const from = startDate ? new Date(startDate).getTime() : 0;
    const to = endDate ? new Date(endDate + "T23:59:59").getTime() : Infinity;
    return t >= from && t <= to;
  });

  const exportCSV = async () => {
    setExporting("csv");
    await new Promise((r) => setTimeout(r, 400));

    const rows = filtered.map(flattenRecord);
    const headers = Object.keys(rows[0] || {});
    const csv = [
      headers.join(","),
      ...rows.map((r) => headers.map((h) => `"${(r[h] || "").replace(/"/g, '""')}"`).join(",")),
    ].join("\n");

    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `fueltracks_registrations_${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);

    setExporting(null);
    setSuccess("CSV file downloaded successfully!");
    setTimeout(() => setSuccess(""), 4000);
  };

  const exportXLSX = async () => {
    setExporting("xlsx");
    try {
      const { utils, writeFile } = await import("xlsx");
      await new Promise((r) => setTimeout(r, 300));

      const rows = filtered.map(flattenRecord);
      const ws = utils.json_to_sheet(rows);

      // Style header row width
      ws["!cols"] = [
        { wch: 25 }, { wch: 18 }, { wch: 28 }, { wch: 18 }, { wch: 18 }, { wch: 26 }, { wch: 26 },
      ];

      const wb = utils.book_new();
      utils.book_append_sheet(wb, ws, "Registrations");
      writeFile(wb, `fueltracks_registrations_${new Date().toISOString().slice(0, 10)}.xlsx`);

      setSuccess("Excel file downloaded successfully!");
      setTimeout(() => setSuccess(""), 4000);
    } catch (e) {
      console.error("[Export] XLSX error:", e);
    } finally {
      setExporting(null);
    }
  };

  return (
    <div className="space-y-6 max-w-3xl">
      <div>
        <h2 className="text-xl font-extrabold text-surface-900">Export Data</h2>
        <p className="text-sm text-surface-400 mt-0.5">Download all registrations in Excel or CSV format</p>
      </div>

      {!isSupabaseReady && (
        <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-amber-50 border border-amber-200 text-amber-700 text-sm font-medium">
          <AlertTriangle size={16} className="shrink-0" />
          {supabaseValidationError || "Supabase not configured. Export will be empty until credentials are added."}
        </div>
      )}

      {/* Export card */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="bg-white rounded-2xl border border-surface-100 shadow-sm p-6 space-y-6"
      >
        {/* Date range filter */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Calendar size={15} className="text-primary-600" />
            <h3 className="text-sm font-bold text-surface-800">Date Range Filter (Optional)</h3>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1">
              <label className="block text-xs font-semibold text-surface-500 uppercase tracking-wider mb-1">From</label>
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl border border-surface-200 text-sm font-medium text-surface-800 focus:outline-none focus:ring-2 focus:ring-primary-200 focus:border-primary-400 transition-all"
              />
            </div>
            <div className="flex-1">
              <label className="block text-xs font-semibold text-surface-500 uppercase tracking-wider mb-1">To</label>
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl border border-surface-200 text-sm font-medium text-surface-800 focus:outline-none focus:ring-2 focus:ring-primary-200 focus:border-primary-400 transition-all"
              />
            </div>
            {(startDate || endDate) && (
              <div className="flex items-end">
                <button
                  onClick={() => { setStartDate(""); setEndDate(""); }}
                  className="px-4 py-2.5 rounded-xl border border-surface-200 text-sm font-medium text-surface-600 hover:bg-surface-50 transition-colors"
                >
                  Clear
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Record count */}
        <div className="px-4 py-3 rounded-xl bg-primary-50 border border-primary-100 flex items-center justify-between">
          <span className="text-sm font-semibold text-primary-700">Records to export</span>
          <span className="text-xl font-extrabold text-primary-700 tabular-nums">
            {loading ? "…" : filtered.length}
          </span>
        </div>

        {/* Export columns preview */}
        <div>
          <p className="text-xs font-bold text-surface-500 uppercase tracking-wider mb-2">Export Columns</p>
          <div className="flex flex-wrap gap-2">
            {["Full Name", "Mobile Number", "Email Address", "Total Attempts", "Today's Attempts", "First Registered", "Last Registered"].map((col) => (
              <span key={col} className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-50 border border-surface-200 text-xs font-semibold text-surface-600">
                <CheckCircle2 size={11} className="text-emerald-500" />
                {col}
              </span>
            ))}
          </div>
        </div>

        {/* Success */}
        {success && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 px-4 py-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm font-semibold"
          >
            <CheckCircle2 size={16} />
            {success}
          </motion.div>
        )}

        {/* Export buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <motion.button
            id="export-excel-btn"
            onClick={exportXLSX}
            disabled={!!exporting || loading || filtered.length === 0}
            whileHover={{ scale: exporting ? 1 : 1.01 }}
            whileTap={{ scale: 0.98 }}
            className="flex-1 flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 text-white font-bold text-sm shadow-md shadow-emerald-600/20 hover:shadow-emerald-600/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {exporting === "xlsx" ? (
              <><Loader2 size={16} className="animate-spin" />Exporting…</>
            ) : (
              <><FileSpreadsheet size={17} />Export to Excel (.xlsx)</>
            )}
          </motion.button>

          <motion.button
            id="export-csv-btn"
            onClick={exportCSV}
            disabled={!!exporting || loading || filtered.length === 0}
            whileHover={{ scale: exporting ? 1 : 1.01 }}
            whileTap={{ scale: 0.98 }}
            className="flex-1 flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xl bg-white border border-surface-200 text-surface-700 font-bold text-sm hover:bg-surface-50 hover:border-surface-300 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
          >
            {exporting === "csv" ? (
              <><Loader2 size={16} className="animate-spin" />Exporting…</>
            ) : (
              <><FileText size={17} className="text-primary-600" />Export to CSV</>
            )}
          </motion.button>
        </div>
      </motion.div>

      {/* Preview table */}
      {!loading && filtered.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl border border-surface-100 shadow-sm overflow-hidden"
        >
          <div className="px-6 py-4 border-b border-surface-100 flex items-center gap-2">
            <Download size={15} className="text-primary-600" />
            <h3 className="text-sm font-bold text-surface-800">Export Preview (first 5 rows)</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-surface-100 bg-surface-50">
                  {["Full Name", "Mobile Number", "Email Address", "Date", "Time"].map((h) => (
                    <th key={h} className="px-4 py-3 text-left text-[11px] font-bold text-surface-400 uppercase tracking-wider">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filtered.slice(0, 5).map((r) => {
                  const { date, time } = formatDateDisplay(r.created_at);
                  return (
                    <tr key={r.id} className="border-b border-surface-50 hover:bg-surface-50 transition-colors">
                      <td className="px-4 py-3 font-semibold text-surface-800">{r.full_name}</td>
                      <td className="px-4 py-3 text-surface-600">{formatMobileForDisplay(r.mobile_number)}</td>
                      <td className="px-4 py-3 text-surface-600">{r.email || "No Email"}</td>
                      <td className="px-4 py-3 text-surface-600">{date}</td>
                      <td className="px-4 py-3 text-surface-600">{time}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </motion.div>
      )}
    </div>
  );
}
