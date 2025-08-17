import { createClient } from "@supabase/supabase-js";
import { SUPABASE_KEY, SUPABASE_URL } from "../secrets";

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

export async function fetchPosts() {
    console.log(supabase);
    const {data, error} = await supabase
    .from('posts').select('*');
    if (error) {
        console.error('Supabase error fetching posts', error);        
        throw new Error(error);
    }
    
    return data;
}

export async function insertPost(post) {
    console.log(supabase);
    const {data, error} = await supabase
    .from('posts').insert(post);
    if (error) {
        console.error('Supabase error inserting to posts', error);        
        throw new Error(error);
    }
    
    return data;
} 