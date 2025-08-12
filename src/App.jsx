import { useEffect, useState } from 'react'
import './App.css'
import PostInput from './components/postInput'
import Post from './components/Post';
import { loadPostsFromStorage, saveToLocaStorage } from './utils/storageHandler';
import { addPostToServer, fetchPosts } from './utils/apiHandler';

const USERNAME = 'tomer_codes';

function App() {
  const [posts, setPosts] = useState([]);
  const [postTextInput, setPostTextInput] = useState('');
  const [initMount, setInitMount] = useState(true);

  async function loadPosts() {
    const serverPosts = await fetchPosts();
    setPosts(serverPosts);
  }

  useEffect(() => {

    if (initMount) {
      loadPosts();
      setInitMount(false);
    }
  }, [])

  async function addPost() {
    const newPost = {
      content: postTextInput,
      userName: USERNAME,
      date: new Date().toISOString(),
    }

    await addPostToServer(newPost);
    await loadPosts();
    
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

export default App
