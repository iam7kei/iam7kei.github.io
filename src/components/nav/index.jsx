import React from "react"
import { useNavigate } from "react-router-dom"

function Navbar() {

  const navigate = useNavigate()

  return (
    <div className="navbar">
      <div className="navbar-wrap">
        <div className="navbar-content">
          <div className="navbar-site-title hover:cursor-pointer" onClick={() => navigate("/")}>
              Dyniel Keith S. Cataluña
          </div>
          <div className="navbar-links-wrap flex flex-row">
             <p className="navbar-link hover:cursor-pointer" onClick={() => navigate("/about")}>
                <a>About</a>
              </p>
              <p className="navbar-link hover:cursor-pointer" onClick={() => navigate("/work")}>
                <a>Work</a>
              </p>
              <p className="navbar-link hover:cursor-pointer" onClick={() => navigate("/play")}>
                <a>Play</a>
              </p>
              <p className="navbar-link hover:cursor-pointer" onClick={() => navigate("/contact")}>
                <a>Contact</a>
              </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar