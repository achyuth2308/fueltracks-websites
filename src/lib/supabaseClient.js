import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// 1. Audit & Validation Utility
const missingVars = [];
if (!supabaseUrl) missingVars.push("VITE_SUPABASE_URL");
if (!supabaseAnonKey) missingVars.push("VITE_SUPABASE_ANON_KEY");

if (missingVars.length > 0) {
  console.error(`Supabase environment variables are missing: ${missingVars.join(", ")}`);
}

const isConfigured =
  supabaseUrl &&
  supabaseAnonKey &&
  supabaseUrl.startsWith("http") &&
  !supabaseUrl.includes("placeholder");

console.log("MODE:", import.meta.env.MODE);
console.log("URL:", import.meta.env.VITE_SUPABASE_URL);
console.log("KEY:", !!import.meta.env.VITE_SUPABASE_ANON_KEY);

if (!isConfigured && missingVars.length === 0) {
  console.warn(
    "[FuelTracks] Supabase URL is placeholder or invalid. Check your VITE_SUPABASE_URL."
  );
}

// Only initialise when we have real credentials — avoids startup crash
export const supabase = isConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

export const isSupabaseReady = isConfigured;
export const supabaseValidationError = missingVars.length > 0
  ? "Supabase environment variables are missing."
  : null;
