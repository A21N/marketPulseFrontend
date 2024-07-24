import React from 'react';
import './burger.css';

export const Burger = ({ isOpen, onToggle }) => {
    const handleClick = () => {
        onToggle(!isOpen);
    };

    return (
        <div onClick={handleClick} className={isOpen ? 'burger-menu-toggle' : 'burger-menu'}>
            <div className={isOpen ? 'burger-line-1-toggle' : 'burger-line-1'}></div>
            <div className={isOpen ? 'burger-line-2-toggle' : 'burger-line-2'}></div>
            <div className={isOpen ? 'burger-line-3-toggle' : 'burger-line-3'}></div>
        </div>
    );
};
