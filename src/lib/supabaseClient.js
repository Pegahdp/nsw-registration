import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://nfuzbvtzuskyjbnmmwws.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5mdXpidnR6dXNreWpibm1td3dzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA3NjIwMTEsImV4cCI6MjA0NjMzODAxMX0.7djTm78fix6256YSKzz8GFRdcGwSwAx-1hYVFUKqY7g";
export const supabase = createClient(supabaseUrl, supabaseKey);
