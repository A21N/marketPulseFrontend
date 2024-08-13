import '../css/burger.css';


export const Burger = ({ isOpen, onToggle }) => {
    const handleClick = () => {
        onToggle(!isOpen);
    };

    return (
        <div className='menu-bars' onClick={handleClick}>
            <div className={isOpen ? 'bar-1' : 'bar-1-arrow'}></div>
            <div className={isOpen ? 'bar-2' : 'bar-2-arrow'}></div>
            <div className={isOpen ? 'bar-3' : 'bar-3-arrow'}></div>
        </div>
    );
};
