import React from 'react';
import { Link } from "react-router-dom";

function Header()
{
    return (
        <header style={headerStyle}>
            <h1>My Todolist</h1>
            <Link to='/ReactApp' style={linkStyle}>Home</Link> | <Link to='/ReactApp/about' style={linkStyle}>About</Link>
        </header>
    )
}

const headerStyle = {
    background: 'teal',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}

const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
}

export default Header;
