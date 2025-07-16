import React from 'react';
import '../style/skillBar.css';

const SkillBar = ({ skill, level }) => {

    return (
        <div className="skill">
            <span>{skill}</span>
            <div className="progress-bar">
                <div className="progress" style={{ width: `${level}%`}}>
                </div>
            </div>
        </div>
    );
};
export default SkillBar;