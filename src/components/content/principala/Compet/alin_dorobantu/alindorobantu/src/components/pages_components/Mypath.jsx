import './pages_css/mypath.css';

import html from '../../images/html.png';
import css from '../../images/css.png';
import js from '../../images/js.png';
import react from '../../images/react.png';
import node from '../../images/node.png';

export const Mypath = () => {
    return(
        <div id='two-colons-path'>
            <div className='path-description'>

                <div className='separate-description-html-left'>
                    <ul className='skills-descr'>
                        <b>HTML</b>
                        <li>Basic concepts</li>
                        <li>Text formatting</li>
                        <li>Media and links</li>
                        <li>Structure and layout</li>
                        <li>Tables and lists</li>
                        <li>Forms</li>
                        <li>Accessibility</li>
                    </ul>
                   
                </div>

                <div className='separate-description-js-left'>
                <ul className='skills-descr'>
                        <b>JavaScript</b>
                        <li>Syntax</li>
                        <li>Variables</li>
                        <li>Strings</li>
                        <li>Number</li>
                        <li>Functions</li>
                        <li>Arrays</li>
                        <li>Objects</li>
                        <li>Classes</li>
                        <li>DOM</li>
                        <li>Promises</li>
                        <li>Fetch API</li>
                        <li>Modules</li>
                    </ul>
                </div>

                <div className='separate-description-node-left'>
                <ul className='skills-descr'>
                        <b>NODE JS</b>
                        <li>Basic concepts</li>
                        <li>Text formatting</li>
                        <li>Media and links</li>
                        <li>Structure and layout</li>
                        <li>Tables and lists</li>
                        <li>Forms</li>
                        <li>Accessibility</li>
                    </ul>
                </div>

                
                
                
            </div>
            <div className='general-mypath'>
                <div class='circle-path'><p>START</p></div>
                <div className='path-line'></div>
                <div class='circle-path'><img src={html} alt='HTML' className='skill-path' /></div>
                <div className='path-line'></div>
                <div class='circle-path'><img src={css} alt='CSS' className='skill-path' /></div>
                <div className='path-line'></div>
                <div class='circle-path'><img src={js} alt='js' className='skill-path' /></div>
                <div className='path-line'></div>
                <div class='circle-path'><img src={react} alt='react' className='skill-path' /></div>
                <div className='path-line'></div>
                <div class='circle-path'><img src={node} alt='node' className='skill-path' /></div>
            </div>
            <div className='path-description'>
                
               
            <div className='separate-description-css-right'>
            <ul className='skills-descr'>
                        <b>CSS</b>
                        <li>Basic concepts</li>
                        <li>Text formatting</li>
                        <li>Media and links</li>
                        <li>Structure and layout</li>
                        <li>Tables and lists</li>
                        <li>Forms</li>
                        <li>Accessibility</li>
                    </ul>
                </div>

                <div className='separate-description-react-right'>
                <ul className='skills-descr'>
                        <b>REACT JS</b>
                        <li>React intro</li>
                        <li>React concepts</li>
                        <li>Components</li>
                        <li>JSX</li>
                        <li>React DOM</li>
                        <li>State</li>
                        <li>Effects</li>
                        <li>React Router</li>
                        <li>Forms</li>
                        <li>Fetching data</li>
                        <li>Redux</li>
                    </ul>
                </div>
        
                
            </div>
    </div>
    );
}