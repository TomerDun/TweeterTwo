import { Route, Routes } from 'react-router'
import './App.css'
import HomePage from './pages/HomePage'
import ProfilePage from './pages/ProfilePage'
import NavBar from './components/NavBar'
import PostsProvider from '../PostsContext'
import LoginPage from './pages/LoginPage'
import { AuthProvider } from './auth/AuthContext'


function App() {




  return (
    <PostsProvider>
      <AuthProvider>
        <NavBar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          {/* <Route path='/profile' element={<ProfilePage />} /> */}
          <Route path='/login' element={<LoginPage />} />
        </Routes>
      </AuthProvider>
    </PostsProvider>
  )
}

export default App
