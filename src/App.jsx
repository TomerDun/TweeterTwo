import { Route, Routes } from 'react-router'
import './App.css'
import HomePage from './pages/HomePage'
import ProfilePage from './pages/ProfilePage'
import NavBar from './components/NavBar'
import PostsProvider from '../PostsContext'
import LoginPage from './pages/LoginPage'
import { AuthProvider } from './auth/AuthContext'
import ProtectedRoute from './auth/ProtectedRoute'


function App() {




  return (
    <PostsProvider>
      <AuthProvider>
        <NavBar />
        <Routes>
          <ProtectedRoute>
            <Route path='/' element={<HomePage />} />
          </ProtectedRoute>
          {/* <Route path='/profile' element={<ProfilePage />} /> */}
          <Route path='/login' element={<LoginPage />} />
        </Routes>
      </AuthProvider>
    </PostsProvider>
  )
}

export default App
