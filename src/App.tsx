import Education from "./components/Education.tsx";
import PersonalDetails from "./components/PersonalDetails.tsx";
import RightSideHeadings from "./components/RightSideHeadings.tsx";
import Skills from "./components/Skills.tsx";
import WorkExperience from "./components/WorkExperience.tsx";
import { DETAILS } from "./data/resume.ts";

function App() {
  return (
    <div className="w-full h-full px-10 py-10 bg-gray-300 relative overflow-hidden">
      <div className=" w-full h-full relative z-10 p-15 bg-white rounded shadow-lg max-w-4xl mx-auto">
        {/* <div
          className="w-full h-100 absolute top-0 left-0 bg-background-200 -z-1"
          style={{
            clipPath: "polygon(0% 0%, 100% 0%, 0% 400%, 0% 10%)",
          }}
        ></div> */}

        <PersonalDetails details={DETAILS} />

        <div className="flex justify-center items-start mt-15">
          <div id="left" className="mr-15 mb-20">
            <div>
              <h2>Summary</h2>
              <p className="text-s font-extralight text-black mt-2 leading-relaxed text-justify border-l-4 pl-4">
                {DETAILS.summary}
              </p>
            </div>

            <div className="mt-10" />
            <RightSideHeadings title="Work Experience" />

            <div className="mt-5" />
            <WorkExperience workExperience={DETAILS.workExperience} />
          </div>

          <div id="right">
            <img
              className={"w-400 h-70 object-cover rounded-xl  mb-10"}
              src="./profile.jpeg"
            />

            <div className="mt-5" />
            <RightSideHeadings title="Education" />
            <Education education={DETAILS.education} />

            <div className="mt-5" />
            <RightSideHeadings title="Skills" />
            <Skills skills={DETAILS.skills} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
