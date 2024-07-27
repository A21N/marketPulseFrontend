import logo from '../../images/logo.PNG';
import './menu.css';
import React, { Link } from 'react-router-dom';

export const Logo = () => {
  return (
    <div className='size-image'>
      <Link to="/">
        <img src={logo} alt="Logo" />
        </Link>
    </div>
  );
};