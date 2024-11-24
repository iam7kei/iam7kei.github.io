import React from "react";
import DefaultLayout from "../../components/layouts";
import SkillCard from "../../components/about/skill-card";
import { skills } from "../../data/skills"

function About() {

  const renderSkillCards = () => {
    const mappedSkills = skills.map((skill) => {
      return (
         <SkillCard type={skill.type}  skills={skill.skills}/>
      )
    })

    return (
      <div className="flex flex-col space-y-8">
        {mappedSkills}
      </div>
    )
  }

  return (
    <DefaultLayout title="About">
      <div className="flex space-y-10 w-auto flex-col justify-center">
        <div className="home-hero-header w-auto space-y-10 mb-20">
          <div className="flex flex-row items-center justify-center space-x-10">
            <div className="flex flex-row text-center justify-center">
              <p className="font-extrabold text-3xl">Hi! I'm Dyniel, a full-stack developer!</p>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-row justify-center items-center">
          <div className="w-1/2 px-24">
            {renderSkillCards()}
          </div>
          <div className="w-1/2">
            <div className="flex px-24 w-full items-center justify-center">
              <img src="/assets/about.jpg" className="w-80 rounded-2xl z-10" />
              <div
                className="absolute top-14 border border-white rounded-full p-96 z-0"
                style={{
                  right: "-10%"
                }}
              ></div>
            </div>
          </div>
        </div>
     </div>

    </DefaultLayout>
  );
}

export default About
