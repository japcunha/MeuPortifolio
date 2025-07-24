import "../style/skillBar.css";
import { useEffect, useRef } from "react";

const SkillBar = ({ skill, level }) => {
  const progress = useRef(null);

  useEffect(() => {
    if (progress.current) {
      progress.current.style.width = "0%";
      setTimeout(() => {
        progress.current.style.width = `${level}%`;
      }, 100);
    }
  }, [level]);

  return (
    <div className="skill">
      <span>{skill}</span>
      <div className="progress-bar">
        <div className="progress" ref={progress}></div>
      </div>
    </div>
  );
};
export default SkillBar;
