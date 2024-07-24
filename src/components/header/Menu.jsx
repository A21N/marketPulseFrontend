import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Home } from '../content/Home';
import { Companii } from '../content/Companii';
import { Despre } from '../content/Despre';
import { Contact } from '../content/Contact';
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

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <BrowserRouter>
            <div className='header-orientation'>
                <Logo />
                <Burger isOpen={menuOpen} onToggle={handleToggleMenu} />
                <nav ref={menuRef} className={`menu-items ${menuOpen ? 'menu-items-open' : ''}`}>
                    <div className="simple-item-menu"><Link to="/"><span>Home</span></Link></div>
                    <div className="simple-item-menu"><Link to="/companii"><span>Companii</span></Link></div>
                    <div className="simple-item-menu"><Link to="/despre"><span>Despre</span></Link></div>
                    <div className="simple-item-menu"><Link to="/contact"><span>Contact</span></Link></div>
                </nav>
            </div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/companii" element={<Companii />} />
                <Route path="/despre" element={<Despre />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>
    );
};
