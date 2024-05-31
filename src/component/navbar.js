import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/authContext';
import "../style/navbar.css";

const Navbar = () => {
    const { logout } = useContext(AuthContext);

    const navigate = useNavigate();

    const logoutNavbar = () => {
        logout();
        navigate('/login');
    }
    
    return (
        <nav className="navbar">
            <div className='container'>
                <ul className='main-menu'>
                    <li><NavLink to='/' target="home" className="main_menu_text">Hjemmeside</NavLink>
                    </li>
                    <li><NavLink to='/abut' className="main_menu_text">Om</NavLink>
                    </li>
                    <li><NavLink to='/product_page' className='main_menu_text'>Produker</NavLink></li>
                    <li><NavLink onClick={logoutNavbar}>Logout</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    ); 
}

export default Navbar;