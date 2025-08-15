import { useContext, useEffect, useState } from 'react'
// import './App.css'
import PostInput from '../components/PostInput'
import Post from '../components/Post';
import { loadPostsFromStorage, loadUserNameFromStorage, saveToLocaStorage } from '../utils/storageHandler';
import { addPostToServer } from '../utils/apiHandler';
import { useNavigate } from 'react-router';
import { PostsContext } from '../../PostsContext';
import { fetchPosts, supabase } from '../utils/apiHandlerNew';

const USERNAME = 'tomer_codes';

export default function HomePage() {
    const navigate = useNavigate();
    const { posts } = useContext(PostsContext);

    const [postTextInput, setPostTextInput] = useState('');    



    useEffect(() => {
        const userName = window.localStorage.getItem('username')
        if (!userName) {
            console.error('No username, redirecting...')
            navigate('/profile');
        }
    }, [])

    async function addPost() {
        const newPost = {
            content: postTextInput,
            userName: loadUserNameFromStorage(),
            date: new Date().toISOString(),
        }

        await addPostToServer(newPost);
    }

    async function handleGetPosts() {
        const posts = await fetchPosts();
        console.log(posts);
        
    }


    return (
        <>
            <PostInput onSend={addPost} input={postTextInput} onChangeInput={setPostTextInput} />
            <button onClick={handleGetPosts}>SB</button>
            <div className='posts-container'>
                {posts &&
                    posts.sort((a, b) => b.date - a.date)
                        .map((post, i) => <Post post={post} key={i} />)
                }
            </div>
        </>
    )
}
