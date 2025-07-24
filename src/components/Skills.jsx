
import SkillBar from "./SkillBar.jsx";

const Skills = () => {
 const skills = [
    { skill: 'HTML', level: 90 },
    { skill: 'CSS3 / TailwindCSS', level: 82 },
    { skill: 'JavaScript', level: 70 },
    { skill: 'React', level: 67 },
    { skill: 'Bootstrap', level: 60 },
    { skill: 'Git/Github', level: 75 },
    { skill: 'Java', level: 25 },
    { skill: 'Node + Express', level: 40 },
    { skill: 'MySQL', level: 22 },
  ];

  return (
    <div className='skill'>
         <h2>Minhas Habilidades</h2>
      {skills.map((item, index) => (
        <SkillBar key={index} skill={item.skill} level={item.level} />
      ))}
     </div>
  );
};
export default Skills;
