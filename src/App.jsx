import { Route, Routes } from 'react-router'
import './App.css'
import HomePage from './pages/HomePage'
import ProfilePage from './pages/ProfilePage'
import NavBar from './components/NavBar'


function App() {




  return (
    <>
    <NavBar />
    <Routes>
      <Route path='/' element={<HomePage />}/>
      <Route path='/profile' element={<ProfilePage />}/>
    </Routes>
    </>
  )
}

export default App
