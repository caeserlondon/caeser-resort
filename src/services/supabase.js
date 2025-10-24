import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://tydjcwzfsdethwseawox.supabase.co';
const supabaseKey =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR5ZGpjd3pmc2RldGh3c2Vhd294Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ1NTU5NzgsImV4cCI6MjA3MDEzMTk3OH0.e1bwZ3S3KVjRW5sxTMWB3lKc9IsLygUlv0VMLial5jA';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
