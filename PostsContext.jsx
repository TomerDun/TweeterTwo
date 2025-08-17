import { Children, createContext, useEffect, useState } from "react";
import { fetchPosts } from "./src/utils/supabaseHandler";

export const PostsContext = createContext();

export default function PostsProvider({ children }) {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        console.info('--init mount, updating posts and creating 10s update interval--');

        loadPosts();

        // const interval = setInterval(loadPosts, 30000);

        return () => {
            // clearInterval(interval);
        }
    }, [])

    async function loadPosts() {
        const serverPosts = await fetchPosts();
        console.log('fetch posts: ', serverPosts);
        
        setPosts(serverPosts);
    }


    return (
        <PostsContext.Provider value={{ posts, loadPosts }}>
            {children}
        </PostsContext.Provider>
    )
}