
import '../css/footer.css';
import duck from '../images/duck.png';

export const Footer = () => {
    return(
        <div className="background-footer">
            <div className='round-duck'>
                <div className="line-duck"></div>
                <img src={duck} id="duck" alt='duck' />
                <div className="line-duck"></div>
            </div>
        </div>

    );
}