import React, { useState } from 'react';
import './pages_css/portfolio.css';
import todoapp from '../../images/todoapp.png';
import gallery_image from '../../images/gallery_image.png';
import emailsender from '../../images/emailsender.png';
import thiswebsite from '../../images/thiswebsite.png';
import gitbutton from '../../images/gitbutton.png';
import html from '../../images/html.png';
import css from '../../images/css.png';
import js from '../../images/js.png';
import react from '../../images/react.png';
import node from '../../images/node.png';
import { Link } from 'react-router-dom';

export const Portfolio = () => {


    //useState for starter projects button
    const [starterProjects, setStarterProjects] = useState(true);

    const changeStarterProjects = () => {
        setStarterProjects(!starterProjects);
        setChalangeProjects(true)
    }

    //useState for chalanging projects button
    const [chalangeProjects, setChalangeProjects] = useState(true);

    const changeChalangeProjects = () => {
        setChalangeProjects(!chalangeProjects);
        setStarterProjects(true);
    }


    return(

        <div id='background-protofolio-items'>
        <div className='my-portfolio'>

        <div className='portfolio-sides'>
            <div className={`${'type-of-project-starter'} ${starterProjects?'background-starter':'background-starter-none'}`} onClick={changeStarterProjects}>
                <h3 className={starterProjects?'color-starter':'color-starter-none '}>Starter projects</h3>
            </div>
            <div className={`${'type-of-project-chalanging'} ${chalangeProjects?'background-chalange':'background-chalange-none'}`} onClick={changeChalangeProjects}>
                 <h3 className={chalangeProjects?'color-chalange':'color-chalange-none'}>Challenging projects</h3>
            </div>
        </div>

        <div className={starterProjects?'starter-project-none':'starter-project'}>
            <div className='portfolio-items'>
                <div className='portofolio-item'>
                <h2 className='title-projects-color'>To-Do-App</h2>
                    <a href={`https://alindorobantu.com/projects/to-do-list/index.html`} target={`_blank`}>
                        <img src={todoapp} alt='to-do=app' id='size-portofolio' />
                    </a>
                    <p className='color-link-project'> <a href={`https://alindorobantu.com/projects/to-do-list/index.html`} target={`_blank`}>{`Open App -->`}</a></p>
                    
                    <div className='buttons-portfolio'>
                        <div className='tech-used'>
                            <img src={html} alt='html' className='tech-size' />
                            <img src={css} alt='css' className='tech-size' />
                            <img src={js} alt='js' className='tech-size' />
                            <img src={react} alt='react' className='tech-size' />
                        </div>
                        <img src={gitbutton} alt='button github' className='button-git' title='view code on github!'/>
                    </div>
                </div>
                <div className='portofolio-item'>
                <h2 className='title-projects-color'>Email sender</h2>
                    <img src={emailsender} alt='to-do=app' id='size-portofolio' />
                    <p className='color-link-project'>{`Open App -->`}</p>
                    <div className='buttons-portfolio'>
                        <div className='tech-used'>
                            <img src={html} alt='html' className='tech-size' />
                            <img src={css} alt='css' className='tech-size' />
                            <img src={js} alt='js' className='tech-size' />
                            <img src={node} alt='node' className='tech-size-node' />
                        </div>
                        <img src={gitbutton} alt='button github' className='button-git' title='view code on github!'/>
                    </div>
                </div>
                
            </div>
        </div>
        <div className={chalangeProjects?'chalange-project-none':'chalange-project'}>
            <div className='portfolio-items'>
                <div className='portofolio-item'>
                <h2 className='title-projects-color'>This website</h2>
                        <Link to="/" target='_blank'>
                            <img src={thiswebsite} alt='this-website' id='size-portofolio' />
                        </Link>
                        
                        <p className='color-link-project'><Link to="/" target='_blank'>{`Open App -->`}</Link></p>
                        
                    
                    <div className='buttons-portfolio'>
                        <div className='tech-used'>
                            <img src={html} alt='html' className='tech-size' />
                            <img src={css} alt='css' className='tech-size' />
                            <img src={js} alt='js' className='tech-size' />
                            <img src={react} alt='react' className='tech-size' />
                        </div>
                        <img src={gitbutton} alt='button github' className='button-git' title='view code on github!'/>
                    </div>
                </div>
                <div className='portofolio-item'>
                <h2 className='title-projects-color'>McDonalds clone</h2>
                    <img src={gallery_image} alt='to-do=app' id='size-portofolio' />
                    <p className='color-link-project'>{`Open App -->`}</p>
                    <div className='buttons-portfolio'>
                        <div className='tech-used'>
                            <img src={html} alt='html' className='tech-size' />
                            <img src={css} alt='css' className='tech-size' />
                            <img src={js} alt='js' className='tech-size' />
                            <img src={react} alt='react' className='tech-size' />
                        </div>
                        <img src={gitbutton} alt='button github' className='button-git' title='view code on github!'/>
                    </div>
                </div>
                    
            </div>

        </div>
    </div>
    </div>
    );
}