import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://jqkfihmailxcflefreke.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impxa2ZpaG1haWx4Y2ZsZWZyZWtlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzAzMzExMTYsImV4cCI6MjA0NTkwNzExNn0.Vy3W4kMRwX_FnVVgOxu1j0g3isHaV7ETuT5dBck8mkA";
export const supabase = createClient(supabaseUrl, supabaseKey);
