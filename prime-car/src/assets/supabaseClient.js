import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://tvhlpcgwwxaodsnqvkoa.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR2aGxwY2d3d3hhb2RzbnF2a29hIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA0MDMxNzcsImV4cCI6MjAyNTk3OTE3N30.VyPL0lLZzuONamb_uCWv62fSXo3Umdw3NgCzEIbjcrQ'
export const supabase = createClient(supabaseUrl, supabaseKey)