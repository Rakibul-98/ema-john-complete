import React from 'react';
import logo from '../../images/Logo.svg';
import NavLink from '../NavLink/NavLink';
import './Header.css';

const links =[
    {id: 1, name: "Home", path:"/"},
    {id: 2, name: "Order", path:"/order"},
    {id: 3, name: "Order Review", path:"/review"},
    {id: 4, name: "Manage Inventory", path:"/inventory"},
    {id: 5, name: "Login", path:"/login"},
]
const Header = () => {
    return (
        <div className='nav-section flex justify-between items-center'>
            <img src={logo} alt="" />
            <nav className="nav-links flex">
                {
                    links.map(link=><NavLink key={link.id} link={link}></NavLink>)
                }
            </nav>
        </div>
    );
};

export default Header;