import React from "react"
import Card from "../card"

function SkillCard({ type ="", skills =[] }) {
  
  const renderSkills = () => {
    const joinedSkills = skills.join(" / ")
    return (
      <p className="font-semibold">{joinedSkills}</p>
    )
  }

  return (
    <div>
      <Card  hoverEffect={true}>
        <div className="flex flex-col space-y-4">
            <p className="font-bold text-xl">{type}</p>  
            {renderSkills()}
        </div>
      </Card>
    </div>
  )
}

export default SkillCard