import React from "react"

function Article() {
  return (
    <div
      style={{
        backgroundImage: "url(https://miro.medium.com/v2/resize:fit:1200/1*udvSMrSVGOgD4fxjMJHbOw.jpeg)",
        backgroundSize: "contain",
        height: 250,
        width: 550,
        borderRadius: "3rem",
        overflow: "hidden",
        position: "relative"
      }}
    >
      <div style={
        {
          backgroundColor: "#00000080",
          minWidth: "60%",
          maxWidth: "50%",
          width: "auto",
          right: 0,
          top: 0,
          padding: "2rem",
          height: "100%",
          position: "absolute"
        }
      }
        className="flex flex-col space-y-3"
      >
        <p className="font-extrabold text-3xl">How to install Vite</p>
        <p>A step-by-step process on how to install Vite on your machine</p>
        <button className="btn btn-primary px-7 py-2">
          <p className="text-sm">
            Read Article
          </p>
        </button>
      </div>
    </div>
  )
} 

export default Article