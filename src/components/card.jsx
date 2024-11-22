import React from "react"

function Card({children = "", hoverEffect = false}) {
  return (
    <div className={`border rounded-3xl border-white p-6 ${hoverEffect && 'hover:bg-white hover:text-black'}`}>
        {children}
    </div>
  )
}

export default Card