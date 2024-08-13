
import communicationIcon from '../../../images/communicationIcon.svg';
import teamIcon from '../../../images/teamIcon.svg';
import criticalIcon from '../../../images/criticalIcon.png';
import solvingIcon from '../../../images/solvingIcon.png';
import flexibilityIcon from '../../../images/flexibilityIcon.png';
import timeIcon from '../../../images/timeIcon.svg';

import React, { useState } from 'react';

import './softskills.css';


export const Softskills = () => {

    //useState pentru communication
const [showComm, setShowComm] = useState(true);

const showCommSkills = () => {
    setShowComm(!showComm);
    setShowTeamwork(true);
    setShowCritical(true);
    setShowProblem(true);
    setShowFlexibility(true);
    setShowTime(true);
}

//useState pentru Teamword
const [showTeamwork, setShowTeamwork] = useState('true');

const showTeamSkills = () => {
    setShowTeamwork(!showTeamwork)
    setShowComm(true);
    setShowCritical(true);
    setShowProblem(true);
    setShowFlexibility(true);
    setShowTime(true);
}

//useState pentru Critical thinking
const [showCritical, setShowCritical] = useState(true);

const showCriticalSkills = () => {
    setShowCritical(!showCritical);
    setShowTeamwork(true)
    setShowComm(true);
    setShowProblem(true);
    setShowFlexibility(true);
    setShowTime(true);
}

//useState pentru problem soilving
const [showProblem, setShowProblem] = useState(true);

const showProblemSkills = () => {
    setShowProblem(!showProblem);
    setShowCritical(true);
    setShowTeamwork(true)
    setShowComm(true);
    setShowFlexibility(true);
    setShowTime(true);
}

//useState pentru Flexibility
const [showFlexibility, setShowFlexibility] = useState(true);

const showFlexibilitySkills = () => {
    setShowFlexibility(!showFlexibility);
    setShowProblem(true);
    setShowCritical(true);
    setShowTeamwork(true)
    setShowComm(true);
    setShowTime(true);
}

//useState pentru time management
const [showTime, setShowTime] = useState(true);

const showTimeSkills = () => {
    setShowTime(!showTime);
    setShowFlexibility(true);
    setShowProblem(true);
    setShowCritical(true);
    setShowTeamwork(true)
    setShowComm(true);
}

    return(
        <div id='align-elements-soft-skills'>
            <h2>Soft skills</h2>
                

            <div className='skill-item-body' onClick={showCommSkills} >
                <div className="skill-arrow">
                    <div className='skill-size-skill'>
                        <img src={communicationIcon} alt='comunication skill' className='skill-size-under' />
                    </div>
                    <h3 className='name-skills'>Communication</h3>
                    <div className='html-arrow'>
                        <div className='arrow-skill-left'></div>
                        <div className='arrow-skill-right'></div>
                    </div>
                </div>
                <ul className={showComm?'body-list-comunication-none':'body-list-comunication'} >
                <li class="text-skills-presentation">
                    <p>Am dezvoltat abilități puternice de comunicare, ceea ce îmi permite să colaborez eficient cu echipele de dezvoltare și design pentru a asigura livrarea de soluții de calitate superioară. Sunt adeptul unui dialog clar și concis, facilitând astfel integrarea cerințelor clientului în produsele finale.</p>
                </li>
                </ul>
            </div>


            <div className='skill-item-body' onClick={showTeamSkills} >
                <div className="skill-arrow">
                    <div className='skill-size-skill'>
                        <img src={teamIcon} alt='comunication skill' className='skill-size-under' />
                    </div>
                    <h3 className='name-skills'>Teamwork</h3>
                    <div className='html-arrow'>
                        <div className='arrow-skill-left'></div>
                        <div className='arrow-skill-right'></div>
                    </div>
                </div>
                <ul className={showTeamwork?'body-list-team-none':'body-list-team'}>
                <li class="text-skills-presentation">
                    <p>Experiența de lucru în echipe diverse m-a învățat să colaborez eficient cu colegii pentru a atinge obiective comune. Sunt capabil să îmi asum diferite roluri într-o echipă și să contribui la succesul proiectului prin partajarea de cunoștințe și suport continuu.</p>
                </li>
                </ul>
            </div>

            <div className='skill-item-body' onClick={showCriticalSkills} >
                <div className="skill-arrow">
                    <div className='skill-size-skill'>
                        <img src={criticalIcon} alt='comunication skill' className='skill-size-under' />
                    </div>
                    <h3 className='name-skills'>Critical thinking</h3>
                    <div className='html-arrow'>
                        <div className='arrow-skill-left'></div>
                        <div className='arrow-skill-right'></div>
                    </div>
                </div>
                <ul className={showCritical?'body-list-critical-none':'body-list-critical'}>
                <li class="text-skills-presentation">
                    <p>Gândirea critică îmi permite să identific și să analizez provocările tehnice, oferind soluții inovatoare pentru problemele complexe. Sunt capabil să evaluez alternativele și să aleg cea mai eficientă abordare pentru dezvoltarea funcționalităților aplicațiilor web.</p>
                </li>
                </ul>
            </div>

            <div className='skill-item-body' onClick={showProblemSkills} >
                <div className="skill-arrow">
                    <div className='skill-size-skill'>
                        <img src={solvingIcon} alt='comunication skill' className='skill-size-under' />
                    </div>
                    <h3 className='name-skills'>Problem solving</h3>
                    <div className='html-arrow'>
                        <div className='arrow-skill-left'></div>
                        <div className='arrow-skill-right'></div>
                    </div>
                </div>
                <ul className={showProblem?'body-list-problem-none':'body-list-problem'}>
                <li class="text-skills-presentation">
                    <p>Am o abilitate puternică de a rezolva problemele tehnice într-un mod rapid și eficient. Capacitatea de a diagnostica și de a remedia erorile de cod îmi permite să îmbunătățesc performanța și funcționalitatea aplicațiilor web.</p>
                </li>
                </ul>
            </div>

            <div className='skill-item-body' onClick={showFlexibilitySkills} >
                <div className="skill-arrow">
                    <div className='skill-size-skill'>
                        <img src={flexibilityIcon} alt='comunication skill' className='skill-size-under' />
                    </div>
                    <h3 className='name-skills'>Flexibility</h3>
                    <div className='html-arrow'>
                        <div className='arrow-skill-left'></div>
                        <div className='arrow-skill-right'></div>
                    </div>
                </div>
                <ul className={showFlexibility?'body-list-flexibility-none':'body-list-flexibility'}>
                <li class="text-skills-presentation">
                    <p>Sunt deschis la schimbare și adaptabil la cerințe noi. Abilitatea mea de a învăța rapid tehnologii noi și de a mă adapta la diferite metode de lucru contribuie la succesul proiectelor dinamice.</p>
                </li>
                </ul>
            </div>

            <div className='skill-item-body' onClick={showTimeSkills}>
                <div className="skill-arrow">
                    <div className='skill-size-skill'>
                        <img src={timeIcon} alt='comunication skill' className='skill-size-under' />
                    </div>
                    <h3 className='name-skills'>Time management</h3>
                    <div className='html-arrow'>
                        <div className='arrow-skill-left'></div>
                        <div className='arrow-skill-right'></div>
                    </div>
                </div>
                <ul className={showTime?'body-list-time-none':'body-list-time'}>
                <li class="text-skills-presentation">
                    <p>Gestionarea eficientă a timpului mă ajută să prioritizez sarcinile și să îndeplinesc termenele limită. Mă asigur că proiectele sunt livrate la timp, fără a compromite calitatea, printr-o planificare și organizare riguroasă.</p>
                </li>
                </ul>
            </div>

        </div>
    )
}