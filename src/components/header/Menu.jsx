import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './menu.css';
import { Logo } from './Logo';
import { Burger } from './Burger';

export const Menu = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);

    const handleToggleMenu = (isOpen) => {
        setMenuOpen(isOpen);
    };

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target) && event.target.closest('.burger-menu, .burger-menu-toggle') === null) {
            setMenuOpen(false);
        }
    };

    const handleLinkClick = () => {
        setMenuOpen(false);
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <>
            <div className='header-orientation'>
                <Logo />
                <Burger isOpen={menuOpen} onToggle={handleToggleMenu} />
                <nav ref={menuRef} className={`menu-items ${menuOpen ? 'menu-items-open' : ''}`}>
                    <div className="simple-item-menu"><Link to="/" onClick={handleLinkClick}><span>Home</span></Link></div>
                    <div className="simple-item-menu"><Link to="/companii" onClick={handleLinkClick}><span>Companii</span></Link></div>
                    <div className="simple-item-menu"><Link to="/blog" onClick={handleLinkClick}><span>Blog</span></Link></div>
                    <div className="simple-item-menu"><Link to="/despre" onClick={handleLinkClick}><span>Despre</span></Link></div>
                    <div className="simple-item-menu"><Link to="/contact" onClick={handleLinkClick}><span>Contact</span></Link></div>
                </nav>
            </div>
        </>
    );
};
