import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../css/meniu.css';

import { Burger } from './Burger';
import logo from '../images/logo.png';



export const Meniu = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);

    const handleToggleMenu = (isOpen) => {
        setMenuOpen(isOpen);
    };

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target) && !event.target.closest('.menu-bars')) {
            setMenuOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div>
            <div className='desktop-menu'>
                <Link to="/">
                  <img src={logo} alt='logo' />
                </Link>
                
                <Burger isOpen={menuOpen} onToggle={handleToggleMenu} />
                <div ref={menuRef} className={`menu-items-hide ${menuOpen ? 'menu-items' : ''}`}>
                    <Link to="/" className='item-menu' onClick={() => setMenuOpen(false)}>Home</Link>
                    <Link to="/mypath" className='item-menu' onClick={() => setMenuOpen(false)}>My path</Link>
                    <Link to="/skills" className='item-menu' onClick={() => setMenuOpen(false)}>My skills</Link>
                    <Link to="/portfolio" className='item-menu' onClick={() => setMenuOpen(false)}>Portfolio</Link>
                    <Link to="/certificates" className='item-menu' onClick={() => setMenuOpen(false)}>Certificates</Link>
                    
                    <Link to="/contact" className='item-menu' onClick={() => setMenuOpen(false)}>Contact</Link>
                </div>
            </div>
           
           
        </div>
    );
};
