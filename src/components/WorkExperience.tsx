type WorkExperienceType = {
  role: string;
  company: string;
  duration: string;
  projects: ProjectType[];
};

type ProjectType = {
  name: string;
  period?: string;
  description: string;
};

interface WorkExperienceProps {
  workExperience: WorkExperienceType[];
}

const WorkExperience = (props: WorkExperienceProps) => {
  const { workExperience } = props;
  return workExperience.map((work, index) => (
    <div key={index} className="mb-4">
      <h3 className="font-black leading-7">{work.role}</h3>
      <p className="font-semibold tracking-widest">
        {work.company} ({work.duration})
      </p>
      {work.projects.map((project, projIndex) => (
        <div key={projIndex} className="mt-2 ml-2">
          <h4 className="font-medium">{project.name}</h4>
          {project?.period && (
            <p className="text-sm font-light">{project?.period}</p>
          )}
          <p className="text-sm font-light mt-1">{project.description}</p>
        </div>
      ))}
    </div>
  ));
};

export default WorkExperience;
