import React from "react";
import DefaultLayout from "../../components/layouts";
import { FaArrowLeft } from "react-icons/fa";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import ArticleSlider from "../../components/slider/article-slider"
import { useNavigate } from "react-router-dom";


function _404() {
  const navigate = useNavigate();

  const onBackToHomeClick = () => {
    navigate("/")
  }

  return (
    <DefaultLayout>
      <div className="flex space-y-10 w-auto flex-col justify-center">
        <div className="home-hero-header w-auto space-y-10">
          <div className="flex flex-row items-center justify-center space-x-10">
            <div className="flex flex-col text-center justify-center">
              <p className="font-extrabold text-8xl">404</p>
              <p className="font-extrabold text-2xl">Page not found.</p>
            </div>
            
          </div>
          <div className="home-hero-header-row">
              <div className="flex flex-row justify-center space-x-4">
                  <button className="btn btn-primary" onClick={onBackToHomeClick}><FaArrowLeft /></button>
                  <button className="btn btn-primary px-20 py-3" onClick={onBackToHomeClick}>
                    <p className="text-2xl">
                      Back to home
                    </p>
                  </button>
              </div>
          </div>
      </div>
     </div>

    </DefaultLayout>
  );
}

export default _404
