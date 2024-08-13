import '../css/presentation.css';
import background from '../images/background-alin.gif';
import alin from '../images/alin.png';
import linkedin_white from '../images/linkedin_white.svg';
import square_github_white from '../images/square_github_white.svg';

import { Link } from 'react-router-dom';

import { TypingEffect } from './TypingEffect';

import download_solid from '../images/download_solid.svg';
 
export const Presentation = () => {


    const divStyle = {
        backgroundImage: `url(${background})`, // Path to the background image
        height: '300px', // Fixed height
        backgroundRepeat: 'no-repeat', // Prevent image repeat
        backgroundSize: 'cover', // Ensures the image covers the entire div
        backgroundPosition: 'center', // Centers the image
    };

    return(
        <>
            <div className='name-presentation'>
                <h1>Hi, I'm <span>Alin</span></h1>
                <h4>I build <span id='blue'>websites</span>, <span id='yellow'>user interfaces</span> and <span id='green'>web applications</span>!</h4>
            </div>

           
            


            <div style={divStyle} id='alin-face'>
                <div className='cerc-1'>
                    <img src={alin} alt='alin' />
                </div>
                
            </div>
            
               
            
            <div id='my-cv'>
                <h2 className='about-color'>About me</h2>
                <div className='about-coder'>
                    <div className='curly about-color'>{`{`}</div>
                    <p className='about-me'>
                    Hello! I am Alin, a Frontend Developer passionate about creating interactive websites. 
                    The technologies I work with are HTML, CSS, JavaScript, React, and Node.js for developing responsive and efficient user interfaces. 
                    I am always interested in the latest trends in web development and continuously improving my technical skills.
                    </p>
                    <div className='curly about-color'>{`}`}</div>
                </div>
                <div id='download-my-cv'>
                    <h2>Download my CV</h2>
                    <img src={download_solid} alt='download' />
                </div>  
            </div>
            <div className='business-card'>
                <div className='info-card'>
                    <h1 className='my-name-card'>Alin Dorobantu</h1>
                    <TypingEffect />
                    <h3 className='info-detail'><span className='gold'>AGE:</span> 28</h3>
                    <h3 className='info-detail'><span className='gold'>ADRESS:</span> Rodnei 44, Cluj-Napoca</h3>
                    <h3 className='info-detail'><span className='gold'>PHONE:</span> 0740 392 279</h3>
                    <h3 className='info-detail'><span className='gold'>E-MAIL:</span> alindorobantu95@gmail.com</h3>
                    <div className='social'>
                
                    <div className='linkedin'>
                        <img src={linkedin_white} alt='linkedin' />
                    </div>
                    <div id='social-line'></div>
                    <div className='github'>
                        <img src={square_github_white} alt='github' />
                    </div>
                    
                </div>
              
                </div>
                <Link to="/contact" id='no-underline-bc'>
                    <h3 className='cont-buton'>{`Contact --->`}</h3>
                </Link>
            </div>

           
        </>

    );
}