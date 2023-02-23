import React from 'react';
import './NavLink.css';

const NavLink = (props) => {
    const {path, name} =props.link;
    return (
        <div className='link-section'>
            <a className='ml-4 p-2' href={path}>{name}</a>
        </div>
    );
};

export default NavLink;