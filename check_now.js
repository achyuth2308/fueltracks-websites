import { createClient } from '@supabase/supabase-js';
import fs from 'fs';

const envContent = fs.readFileSync('.env', 'utf-8');
const env = {};
envContent.split('\n').forEach(line => {
  const parts = line.split('=');
  if (parts.length >= 2) {
    const key = parts[0].trim();
    const val = parts.slice(1).join('=').trim();
    env[key] = val;
  }
});

const supabase = createClient(env.VITE_SUPABASE_URL, env.VITE_SUPABASE_ANON_KEY);

async function check() {
  const { data, error } = await supabase
    .from('demo_users')
    .select('*')
    .limit(1);
  if (error) {
    console.error("Query Error:", error);
  } else {
    console.log("Columns returned from database:", data.length > 0 ? Object.keys(data[0]) : "Empty table, but query succeeded");
  }
}
check();
