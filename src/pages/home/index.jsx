import React from "react";
import DefaultLayout from "../../components/layouts";

function Home() {
  console.log('home')
  return (
    <DefaultLayout>
     <div className="home-hero-header w-2/3">
          <div className="home-hero-header-row flex flex-row justify-between">
            <div>
              <p className="font-extrabold text-8xl">Full-stack</p>
            </div>
            <div>
              <button>Projects</button>
            </div>
          </div>
          <div className="home-hero-header-row">

          </div>
        </div>

    </DefaultLayout>
  );
}

export default Home