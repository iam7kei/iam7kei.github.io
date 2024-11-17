import React from "react"

function Article({title, description, backgroundImage, url}) {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
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
          width: "50%",
          padding: "2rem",
          height: "100%",
          position: "absolute"
        }
      }
        className="flex flex-col justify-between h-full right-0 top-0"
      >
        <div className="flex flex-col space-y-3">
          <p className="font-extrabold text-3xl">{title}</p>
          <p>{description}</p>
        </div>
        <a href={url} className="bottom-0">
          <button className="btn btn-primary px-7 py-2">
            <p className="text-sm">
              Read Article
            </p>
          </button>
        </a>
      </div>
    </div>
  )
} 

export default Article