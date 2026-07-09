import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { TrendingUp, Users, Calendar, BarChart2, AlertTriangle, UserPlus, Activity } from "lucide-react";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend, BarChart, Bar,
} from "recharts";
import { supabase, isSupabaseReady } from "../../lib/supabaseClient";



function MetricCard({ icon: Icon, label, value, color, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      className="bg-white rounded-2xl border border-surface-100 shadow-sm p-5 flex items-center gap-4"
    >
      <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${color}`}>
        <Icon size={20} className="text-white" />
      </div>
      <div>
        <p className={`font-extrabold text-surface-900 truncate max-w-[160px] ${typeof value === 'string' && value.length > 10 ? 'text-lg' : 'text-2xl'}`}>{value ?? "—"}</p>
        <p className="text-xs font-semibold text-surface-500 mt-0.5">{label}</p>
      </div>
    </motion.div>
  );
}

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-surface-200 rounded-xl px-3 py-2 shadow-lg text-sm">
        <p className="font-semibold text-surface-700">{label}</p>
        <p className="text-primary-600 font-bold">{payload[0].value} registrations</p>
      </div>
    );
  }
  return null;
};

export default function Analytics() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isSupabaseReady || !supabase) { setLoading(false); return; }

    const fetchAnalytics = async () => {
      try {
        // Check schema first to see if columns exist
        const { error: schemaErr } = await supabase
          .from("demo_users")
          .select("registration_count, daily_registration_count")
          .limit(1);
        const hasNewSchema = !schemaErr;

        let records, fetchErr;
        if (hasNewSchema) {
          const res = await supabase
            .from("demo_users")
            .select("full_name, mobile_number, registration_count, daily_registration_count, last_registered_at, created_at")
            .order("created_at", { ascending: true });
          records = res.data;
          fetchErr = res.error;
        } else {
          const res = await supabase
            .from("demo_users")
            .select("full_name, mobile_number, created_at")
            .order("created_at", { ascending: true });
          records = res.data;
          fetchErr = res.error;
        }

        if (fetchErr) throw fetchErr;
        if (!records) records = [];

        const now = new Date();
        const todayStart = new Date(now); todayStart.setHours(0, 0, 0, 0);

        const uniqueCount = records.length;
        
        const todayUnique = records.filter((r) => {
          const dateStr = r.created_at || r.first_registered_at;
          return dateStr && new Date(dateStr) >= todayStart;
        }).length;

        const totalAttempts = records.reduce((sum, r) => sum + (r.registration_count || 1), 0);

        const todayAttempts = records.reduce((sum, r) => {
          const dateStr = r.last_registered_at || r.created_at;
          const isToday = dateStr && new Date(dateStr) >= todayStart;
          return sum + (isToday ? (r.daily_registration_count || 1) : 0);
        }, 0);

        // Daily trend — last 30 days (new unique registrations)
        const trendMap = {};
        for (let i = 29; i >= 0; i--) {
          const d = new Date(todayStart);
          d.setDate(d.getDate() - i);
          const key = d.toLocaleDateString("en-IN", { day: "2-digit", month: "short" });
          trendMap[key] = 0;
        }
        records.forEach((r) => {
          const d = new Date(r.created_at);
          if (d >= new Date(todayStart.getTime() - 29 * 86400000)) {
            const key = d.toLocaleDateString("en-IN", { day: "2-digit", month: "short" });
            if (key in trendMap) trendMap[key]++;
          }
        });
        const trendData = Object.entries(trendMap).map(([date, count]) => ({ date, count }));

        // Top 7 days
        const topDays = [...trendData].sort((a, b) => b.count - a.count).slice(0, 7);

        setData({
          unique: uniqueCount,
          todayUnique: todayUnique,
          attempts: totalAttempts,
          todayAttempts: todayAttempts,
          trendData,
          topDays,
        });
      } catch (e) {
        console.error("[Analytics]", e);
      } finally {
        setLoading(false);
      }
    };

    fetchAnalytics();
  }, []);

  if (!isSupabaseReady) {
    return (
      <div className="flex flex-col items-center justify-center py-24 gap-4">
        <AlertTriangle size={40} className="text-amber-400" />
        <p className="text-surface-500 font-medium">Supabase not configured. Add credentials to .env to view analytics.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-extrabold text-surface-900">Analytics</h2>
        <p className="text-sm text-surface-400 mt-0.5">Registration trends and insights</p>
      </div>

      {/* Metric cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard icon={Users} label="Total Unique Users" value={data?.unique} color="bg-gradient-to-br from-primary-500 to-primary-600" delay={0} />
        <MetricCard icon={UserPlus} label="Today's Unique Registrations" value={data?.todayUnique} color="bg-gradient-to-br from-accent-500 to-accent-600" delay={0.07} />
        <MetricCard icon={Activity} label="Total Lifetime Registration Attempts" value={data?.attempts} color="bg-gradient-to-br from-emerald-500 to-emerald-600" delay={0.14} />
        <MetricCard icon={TrendingUp} label="Today's Registration Attempts" value={data?.todayAttempts} color="bg-gradient-to-br from-amber-400 to-amber-500" delay={0.21} />
      </div>

      {/* Trend chart */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-white rounded-2xl border border-surface-100 shadow-sm p-6"
      >
        <div className="mb-5">
          <h3 className="text-base font-bold text-surface-900">Registration Trend</h3>
          <p className="text-xs text-surface-400 mt-0.5">Last 30 days</p>
        </div>
        {loading ? (
          <div className="h-52 flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-primary-200 border-t-primary-600 rounded-full animate-spin" />
          </div>
        ) : (
          <ResponsiveContainer width="100%" height={220}>
            <LineChart data={data?.trendData || []} margin={{ top: 5, right: 10, left: -20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis dataKey="date" tick={{ fontSize: 10, fill: "#94a3b8" }} tickLine={false} axisLine={false} interval="preserveStartEnd" />
              <YAxis tick={{ fontSize: 10, fill: "#94a3b8" }} tickLine={false} axisLine={false} allowDecimals={false} />
              <Tooltip content={<CustomTooltip />} />
              <Line
                type="monotone"
                dataKey="count"
                stroke="#1b56f5"
                strokeWidth={2.5}
                dot={false}
                activeDot={{ r: 5, fill: "#1b56f5", strokeWidth: 0 }}
              />
            </LineChart>
          </ResponsiveContainer>
        )}
      </motion.div>

      {/* Full width Top Days Bar */}
      <div className="grid grid-cols-1 gap-5">
        {/* Top Days Bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-2xl border border-surface-100 shadow-sm p-6"
        >
          <div className="mb-4">
            <h3 className="text-base font-bold text-surface-900">Top Registration Days</h3>
            <p className="text-xs text-surface-400 mt-0.5">Highest activity days (last 30 days)</p>
          </div>
          {loading ? (
            <div className="h-48 flex items-center justify-center">
              <div className="w-8 h-8 border-2 border-primary-200 border-t-primary-600 rounded-full animate-spin" />
            </div>
          ) : (
            <ResponsiveContainer width="100%" height={240}>
              <BarChart data={data?.topDays || []} margin={{ top: 5, right: 10, left: -20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                <XAxis dataKey="date" tick={{ fontSize: 10, fill: "#94a3b8" }} tickLine={false} axisLine={false} />
                <YAxis tick={{ fontSize: 10, fill: "#94a3b8" }} tickLine={false} axisLine={false} allowDecimals={false} />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="count" fill="#1b56f5" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          )}
        </motion.div>
      </div>
    </div>
  );
}
