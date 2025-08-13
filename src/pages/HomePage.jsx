import { useEffect, useState } from 'react'
// import './App.css'
import PostInput from '../components/PostInput'
import Post from '../components/Post';
import { loadPostsFromStorage, loadUserNameFromStorage, saveToLocaStorage } from '../utils/storageHandler';
import { addPostToServer, fetchPosts } from '../utils/apiHandler';
import { useNavigate } from 'react-router';

const USERNAME = 'tomer_codes';

export default function HomePage() {
    const navigate = useNavigate();

    const [posts, setPosts] = useState([]);
    const [postTextInput, setPostTextInput] = useState('');
    const [initMount, setInitMount] = useState(true);
    const [userName, setUserName] = useState(null);

    async function loadPosts() {
        const serverPosts = await fetchPosts();
        setPosts(serverPosts);
    }

    useEffect(() => {
        loadPosts();
        updateUserName();
        setInitMount(false);
    }, [])

    async function addPost() {
        const newPost = {
            content: postTextInput,
            userName: userName,
            date: new Date().toISOString(),
        }

        await addPostToServer(newPost);
        await loadPosts();
    }

    function updateUserName() {
        const newUserName = loadUserNameFromStorage();
        if (newUserName) setUserName(newUserName);
        else {
            console.error('No user name')
            navigate('/profile')
        }
    }



    return (
        <>
            <PostInput onSend={addPost} input={postTextInput} onChangeInput={setPostTextInput} />
            <div className='posts-container'>
                {posts.sort((a, b) => b.date - a.date)
                    .map((post, i) => <Post post={post} key={i} />)}
            </div>
        </>
    )
}
