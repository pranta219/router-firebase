import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='header mt-4 mb-4 text-2xl'>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/login'>Login</Link>
            </nav>
        </div>
    );
};

export default Header;