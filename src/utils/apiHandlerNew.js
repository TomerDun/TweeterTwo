import { createClient } from "@supabase/supabase-js";
import { SUPABASE_KEY, SUPABASE_URL } from "../secrets";

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);