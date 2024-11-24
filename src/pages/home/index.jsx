import React from "react";
import DefaultLayout from "../../components/layouts";
import { FaArrowRight } from "react-icons/fa";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import ArticleSlider from "../../components/slider/article-slider"


function Home() {
  return (
    <DefaultLayout title="Home">
      <div className="flex space-y-10 w-auto flex-col justify-center">
        <div className="home-hero-header w-auto space-y-10">
          <div className="flex flex-row items-center justify-center space-x-10">
            <div className="flex flex-row text-center justify-center">
              <p className="font-extrabold text-8xl">Full-Stack Developer</p>
            </div>
            
          </div>
          <div className="home-hero-header-row">
              <div className="flex flex-row justify-center space-x-4">
                <button className="btn btn-primary px-20 py-3">
                  <p className="text-2xl">
                    Projects
                  </p>
                </button>
                <button className="btn btn-primary"><FaArrowRight /></button>
              </div>
          </div>
      </div>
      <div className="flex flex-row items-center justify-center space-x-3">
          <a href="https://github.com/iam7kei" target="_blank">
            <button className="btn btn-secondary flex flex-row space-x-3 justify-center items-center">
              <FaGithub/>
              <p className="italic">Github</p>
            </button>
          </a>
          <a href="https://www.linkedin.com/in/dcataluna/" target="_blank">
            <button className="btn btn-secondary flex flex-row space-x-3 justify-center items-center">
               <FaLinkedin/>
              <p className="italic">LinkedIn</p>
            </button>
          </a>
        </div>
        <ArticleSlider />
     </div>

    </DefaultLayout>
  );
}

export default Home
