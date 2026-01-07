interface EducationProps {
  education: { degree: string; institution: string; year: string }[];
}

const Education = ({ education }: EducationProps) => {
  return education.map((edu, index) => (
    <div key={index} className="mt-2">
      <h3 className="font-semibold">{edu.degree}</h3>
      <p className="font-light">
        {edu.institution} ({edu.year})
      </p>
    </div>
  ));
};

export default Education;
