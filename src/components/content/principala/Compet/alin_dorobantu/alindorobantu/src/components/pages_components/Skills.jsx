

import { Hardskills } from './skills/Hardskills';
import { Softskills } from './skills/Softskills';

import './pages_css/skills.css';



export const Skills = () => {
    return(
        <div id='background-skills'>
            <Hardskills />
            <Softskills />
        </div>
    );
}