import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://troucioiyyygzdmcjvqn.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRyb3VjaW9peXl5Z3pkbWNqdnFuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAzNTIyMjQsImV4cCI6MjA2NTkyODIyNH0.GFnI5wwZA7jaOdF9FdE_bbWqZu-7sEzzDBXKcKPRpyo";

export const supabase = createClient(supabaseUrl, supabaseKey);
