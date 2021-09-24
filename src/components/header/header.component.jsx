import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss';

const Header = () => (
    <div className='header'>
        <Link to="/">
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/gallery'>
            Gallery
            </Link>
            <Link className='option' to='/about'>
            About
            </Link>
            <Link className='option' to='/contact'>
            Contact
            </Link>
            <Link className='option' to='/blog'>
            Blog
            </Link>
        </div>

    </div>
);

export default Header;