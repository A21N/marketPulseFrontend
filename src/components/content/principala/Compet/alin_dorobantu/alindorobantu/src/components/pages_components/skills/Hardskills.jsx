import React, { useState } from 'react';
import './hardskills.css';

import htmlIncon from '../../../images/htmlIncon.svg';
import cssIcon from '../../../images/cssIcon.svg';
import jsIcon from '../../../images/jsIcon.svg';
import reactIcon from '../../../images/reactIcon.svg';
import nodeIcon from '../../../images/nodeIcon.svg';
import gitIcon from '../../../images/gitIcon.svg';


export const Hardskills = () => {

 //useState pentru html
    const [showHtml, setShowHtml] = useState(true);

const showHtmlSkills = () => {
    setShowHtml(!showHtml);
    setShowCss(true);
    setShowJs(true);
    setShowReact(true);
    setShowNode(true);
    setShowGit(true);
}

    //useState pentru css
const [showCss, setShowCss] = useState(true);

const showCssSkills = () => {
    setShowCss(!showCss);
    setShowHtml(true);
    setShowJs(true);
    setShowReact(true);
    setShowNode(true);
    setShowGit(true);
}

    //useState pentru JavaScript
const [showJs, setShowJs] = useState(true);

const showJsSkills = () => {
    setShowJs(!showJs)
    setShowHtml(true);
    setShowCss(true);
    setShowReact(true);
    setShowNode(true);
    setShowGit(true);
}

    //useState pentru react
const [showReact, setShowReact] = useState(true);

const showReactSkills = () => {
    setShowReact(!showReact);
    setShowHtml(true);
    setShowCss(true);
    setShowJs(true);
    setShowNode(true);
    setShowGit(true);
}

    //useState pentru nodeJS
const [showNode, setShowNode] = useState(true);

const showNodeSkills = () => {
    setShowNode(!showNode);
    setShowHtml(true);
    setShowCss(true);
    setShowJs(true);
    setShowReact(true);
    setShowGit(true);
}

    //useState pentru git
const [showGit, setShowGit] = useState(true);

const showGitSkills = () => {
    setShowGit(!showGit);
    setShowHtml(true);
    setShowCss(true);
    setShowJs(true);
    setShowReact(true);
    setShowNode(true);
}


    return(
       
        <div id='align-elements-hard-skills'>
            <h2>Hard skills</h2>
                
                <div className='skill-item-body' onClick={showHtmlSkills}>
                    

                    <div className="skill-arrow">
                        <div className='skill-size-skill'>
                            <img src={htmlIncon} alt='HTML' className='skill-size-under'  />
                        </div>
                        <h3 className='name-skills'>HTML skills</h3>
                        <div className={showHtml?'html-arrow':'html-arrow-rotate'}>
                            <div className='arrow-skill-left'></div>
                            <div className='arrow-skill-right'></div>
                        </div>
                    </div>


                    <ul className={showHtml?'body-list-html-none':'body-list-html'}>
                        <li className='text-skills-presentation'>{`Structura Semantica: Utilizare avansată a elementelor semantice precum <header>, <footer>, <nav>, <section>, și <article> pentru a crea pagini ușor de navigat și de înțeles.`}</li>
                        <li className='text-skills-presentation'>{`Formatarea Textului: Stilizarea eficientă a textului folosind etichete HTML (ex. <h1>-<h6>, <p>, <strong>, <em>).`}</li>
                        <li className='text-skills-presentation'>{`Liste și Tabele: Crearea și stilizarea listelor și tabelelor pentru organizarea clară a datelor, utilizând <ul>, <ol>, <li>, <table>, <tr>, <th>, și <td>.`}</li>
                        <li className='text-skills-presentation'>{`Integrarea Media: Încorporarea de imagini, video, și audio folosind <img>, <video>, și <audio>, cu accent pe accesibilitate și performanță (atribute src, alt, controls).`}</li>
                        <li className='text-skills-presentation'>{`Formulare Avansate: Crearea de formulare complexe și intuitive cu <form>, <input>, <textarea>, <select>, și <button>, utilizând validarea HTML5 pentru a asigura integritatea datelor.`}</li>
                        <li className='text-skills-presentation'>{`Optimizare SEO: Utilizarea meta tag-urilor și a structurilor HTML pentru a îmbunătăți vizibilitatea și indexarea site-urilor web.`}</li>
                    </ul>
                        
                </div>
                <div className='skill-item-body' onClick={showCssSkills}>
                    <div className="skill-arrow">
                        <div className='skill-size-skill'>
                            <img src={cssIcon} alt='CSS' className='skill-size-under' />
                        </div>
                        <h3 className='name-skills'>CSS skills</h3>
                        <div className={showCss?'css-arrow':'css-arrow-rotate'}>
                            <div className='arrow-skill-left'></div>
                            <div className='arrow-skill-right'></div>
                        </div>
                    </div>
                    <ul className={showCss?'body-list-css-none':'body-list-css'}>
                        <li className='text-skills-presentation'>{`Design Responsive: Crearea de layout-uri flexibile folosind CSS Flexbox și CSS Grid pentru a asigura o experiență optimă pe dispozitive de diverse dimensiuni.`}</li>
                        <li className='text-skills-presentation'>{`Preprocesatoare CSS (Sass/LESS): Utilizarea preprocesatoarelor pentru a scrie cod CSS modular și ușor de întreținut, îmbunătățind astfel scalabilitatea proiectelor.`}</li>
                        <li className='text-skills-presentation'>{`Animații și Tranziții CSS: Implementarea de animații fluide și tranziții între stări de elemente folosind @keyframes, transition și animation, pentru a îmbunătăți interactivitatea site-urilor.`}</li>
                        <li className='text-skills-presentation'>{`Design de Interfață cu Utilizatorul (UI): Crearea de componente UI personalizate, utilizând clase CSS pentru stilizarea consistentă și intuitivă a elementelor precum butoane, carduri, și meniuri.`}</li>
                    </ul>
                </div>
                <div className='skill-item-body' onClick={showJsSkills}>
                    <div className="skill-arrow">
                        <div className='skill-size-skill'>
                            <img src={jsIcon} alt='JS' className='skill-size-under' />
                        </div>
                        <h3 className='name-skills'>JavaScript skills</h3>
                        <div className={showJs?'js-arrow':'js-arrow-rotate'}>
                            <div className='arrow-skill-left'></div>
                            <div className='arrow-skill-right'></div>
                        </div>
                    </div>
                    <ul className={showJs?'body-list-js-none':'body-list-js'}>
                    <li className='text-skills-presentation'>
                        {`Manipularea DOM: Interacțiuni directe și dinamice cu Document Object Model folosind metode precum document.getElementById, document.querySelector, și manipularea nodurilor DOM.`}
                    </li>
                    <li className='text-skills-presentation'>
                        {`Programare Asincronă: Utilizarea Promisiunilor, async/await și API-ului Fetch pentru a gestiona operațiuni asincrone și a îmbunătăți performanța aplicațiilor.`}
                    </li>
                    <li className='text-skills-presentation'>
                        {`Framework-uri JavaScript: Dezvoltarea de aplicații complexe folosind React.js, Angular, sau Vue.js pentru o experiență de utilizator modernă și interactivă.`}
                    </li>
                    <li className='text-skills-presentation'>
                        {`Programare Orientată pe Obiecte: Utilizarea claselor ES6, prototipurilor și encapsulării pentru a structura aplicații modulare și reutilizabile.`}
                    </li>
                    <li className='text-skills-presentation'>
                        {`Gestionarea Stării: Implementarea Redux, Context API, și alte soluții de gestionare a stării pentru a crea aplicații predictibile și eficiente.`}
                    </li>
                    <li className='text-skills-presentation'>
                        {`Optimizare și Performanță: Îmbunătățirea timpului de încărcare și performanței codului JavaScript prin Webpack, Babel, și bune practici de codare.`}
                    </li>
                    <li className='text-skills-presentation'>
                        {`Testare și Debugging: Utilizarea instrumentelor de testare precum Jest și Mocha, și debugging avansat cu DevTools pentru a asigura calitatea și stabilitatea aplicațiilor.`}
                    </li>
                        
                    </ul>
                </div>
                <div className='skill-item-body' onClick={showReactSkills}>
                    <div className="skill-arrow">
                        <div className='skill-size-skill'>
                            <img src={reactIcon} alt='REACT' className='skill-size-under' />
                        </div>
                        <h3 className='name-skills'>React skills</h3>
                        <div className={showReact?'react-arrow':'react-arrow-rotate'}>
                            <div className='arrow-skill-left'></div>
                            <div className='arrow-skill-right'></div>
                        </div>
                    </div>
                    <ul className={showReact?'body-list-react-none':'body-list-react'}>
                    <li className='text-skills-presentation'>
                        {`Componente Funcționale și de Clasă: Crearea de componente reutilizabile și modulare folosind atât componente funcționale cât și de clasă, cu utilizarea optimă a props și state.`}
                    </li>
                    <li className='text-skills-presentation'>
                        {`Hooks: Utilizarea hook-urilor precum useState, useEffect, useContext și custom hooks pentru a gestiona starea și efectele secundare în componentele funcționale.`}
                    </li>
                    <li className='text-skills-presentation'>
                        {`Gestionarea Stării: Implementarea gestionării stării la nivel global folosind Redux, Context API, sau librării ca MobX pentru a asigura fluxuri de date predictibile.`}
                    </li>
                    <li className='text-skills-presentation'>
                        {`React Router: Configurarea și gestionarea rutelor în aplicații SPA (Single Page Application) folosind React Router, inclusiv redirecționarea, parametrii URL și protecția rutelor.`}
                    </li>
                    <li className='text-skills-presentation'>
                        {`Optimizarea Performanței: Aplicarea de tehnici de optimizare precum React.memo, useMemo și useCallback pentru a preveni randările inutile și a îmbunătăți performanța.`}
                    </li>
                    <li className='text-skills-presentation'>
                        {`Testare cu React Testing Library și Jest: Asigurarea calității codului prin scrierea de teste unitare și de integrare pentru componentele React folosind React Testing Library și Jest.`}
                    </li>
                    </ul>
                </div>
                <div className='skill-item-body' onClick={showNodeSkills}>
                    <div className="skill-arrow">
                        <div className='skill-size-skill'>
                            <img src={nodeIcon} alt='NODE' className='skill-size-under' />
                        </div>
                        <h3 className='name-skills'>Node skills</h3>
                        <div className={showNode?'node-arrow':'node-arrow-rotate'}>
                            <div className='arrow-skill-left'></div>
                            <div className='arrow-skill-right'></div>
                        </div>
                    </div>
                    <ul className={showNode?'body-list-node-none':'body-list-node'}>
                    <li className='text-skills-presentation'>
                        {`Servere HTTP: Dezvoltarea de servere HTTP eficiente utilizând modulul Node.js 'http' și Express pentru a gestiona cererile și răspunsurile.`}
                    </li>
                    <li className='text-skills-presentation'>
                        {`Asincronism și Evenimente: Implementarea de aplicații asincrone și gestionarea eficientă a evenimentelor și callback-urilor cu Node.js.`}
                    </li>
                    <li className='text-skills-presentation'>
                        {`Acces la Bază de Date: Integrarea cu baze de date SQL și NoSQL (ex. MongoDB, MySQL, PostgreSQL) folosind drivere și ORM-uri populare.`}
                    </li>
                    <li className='text-skills-presentation'>
                        {`Gestionarea Pachetelor cu npm: Utilizarea npm pentru a gestiona pachetele și dependențele proiectelor Node.js, inclusiv crearea de scripturi personalizate.`}
                    </li>
                    <li className='text-skills-presentation'>
                        {`API-uri RESTful: Crearea de API-uri RESTful scalabile și sigure folosind Express, cu autentificare și autorizare JWT.`}
                    </li>
                    <li className='text-skills-presentation'>
                        {`Testare și Debugging: Scrierea de teste unitare și de integrare pentru aplicațiile Node.js folosind Jest, Mocha, și Chai.`}
                    </li>
                   </ul>
                </div>
                <div className='skill-item-body' onClick={showGitSkills}>
                    <div className="skill-arrow">
                        <div className='skill-size-skill'>
                            <img src={gitIcon} alt='GIT' className='skill-size-under' />
                        </div>
                        <h3 className='name-skills'>GIT skills</h3>
                        <div className={showGit?'git-arrow':'git-arrow-rotate'}>
                            <div className='arrow-skill-left'></div>
                            <div className='arrow-skill-right'></div>
                        </div>
                    </div>
                    <ul className={showGit?'body-list-git-none':'body-list-git'}>
                    <li className='text-skills-presentation'>
                        {`Controlul Versiunilor: Experiență în utilizarea Git pentru controlul versiunilor și gestionarea codului sursă într-un mediu de dezvoltare colaborativ.`}
                    </li>
                    <li className='text-skills-presentation'>
                        {`Branching și Merging: Utilizarea ramurilor Git pentru a dezvolta caracteristici noi și gestionarea conflictelor de cod prin procese de merging și rebase.`}
                    </li>
                    <li className='text-skills-presentation'>
                        {`Utilizarea GitHub și GitLab: Integrarea Git cu platforme de colaborare precum GitHub și GitLab, gestionând proiecte open-source și private.`}
                    </li>
                    <li className='text-skills-presentation'>
                        {`Gestionarea Conflictelor: Abilități avansate de rezolvare a conflictelor de merge și menținerea unui istoric de commit-uri curat și organizat.`}
                    </li>
                    <li className='text-skills-presentation'>
                        {`Automatizare cu Git Hooks: Crearea și utilizarea Git Hooks pentru automatizarea sarcinilor de dezvoltare, precum formatarea codului și rularea testelor înainte de commit.`}
                    </li>
                    <li className='text-skills-presentation'>
                        {`Managementul Versiunilor și Tagging: Folosirea tagging-ului pentru a marca versiuni importante ale aplicațiilor și pentru a facilita rollback-ul și depănarea.`}
                    </li>
                     </ul>
                </div>
                
        </div>


    )}