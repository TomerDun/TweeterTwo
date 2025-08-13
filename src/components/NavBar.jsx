import { NavLink } from "react-router";
import './NavBar.css'

export default function NavBar() {
    return (
        <nav>
            <NavLink to='/' className='nav-item'>Home</NavLink>
            <NavLink to='/profile' className='nav-item'>Profile</NavLink>
        </nav>
    )
}