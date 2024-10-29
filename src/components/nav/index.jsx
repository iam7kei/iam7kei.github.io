import React from "react"

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-wrap">
        <div className="navbar-content">
          <div className="navbar-site-title">
              Dyniel Keith S. Cataluña
          </div>
          <div className="navbar-links-wrap flex flex-row">
             <p className="navbar-link">
                <a href="#">About</a>
              </p>
              <p className="navbar-link">
                <a href="#">Work</a>
              </p>
              <p className="navbar-link">
                <a href="#">Play</a>
              </p>
              <p className="navbar-link">
                <a href="#">Contact</a>
              </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar