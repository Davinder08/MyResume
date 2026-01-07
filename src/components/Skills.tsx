import React from "react";
interface SkillCategory {
  type: string;
  skills: string[];
}

interface SkillProps {
  skills: SkillCategory[];
}

const Skills = ({ skills }: SkillProps) => {
  return (
    <div className="mt-2">
      {skills.map((skillCategory, index) => (
        <div key={index} className="mb-2">
          <h3 className="font-semibold">{skillCategory.type}</h3>
          <p className="font-light">{skillCategory.skills.join(", ")}</p>
        </div>
      ))}
    </div>
  );
};

export default Skills;
