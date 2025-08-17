import { useContext, useEffect, useState } from 'react'
// import './App.css'
import PostInput from '../components/PostInput'
import Post from '../components/Post';
import { loadUserNameFromStorage } from '../utils/storageHandler';
// import { addPostToServer } from '../utils/apiHandler';
import { useNavigate } from 'react-router';
import { PostsContext } from '../../PostsContext';
import { fetchPosts, insertPost } from '../utils/supabaseHandler';
import { useAuth } from '../auth/AuthContext';

export default function HomePage() {
    const navigate = useNavigate();
    const { posts, loadPosts } = useContext(PostsContext);
    const {activeUser} = useAuth();

    const [postTextInput, setPostTextInput] = useState('');

    async function addPost() {
        const newPost = {
            content: postTextInput,
            userName: activeUser,
            date: new Date().toISOString(),
        }

        // await addPostToServer(newPost);
        await insertPost(newPost);
        loadPosts();
    }



    return (
        <>
            <PostInput onSend={addPost} input={postTextInput} onChangeInput={setPostTextInput} />
            <div className='posts-container'>
                {posts &&
                    posts.sort((a, b) => b.date - a.date)
                        .map((post, i) => <Post post={post} key={i} />)
                }
            </div>
        </>
    )
}
