import React from 'react'

const SkillForm = ({skill,rating,submit}) => {

  return (
    <div >
       <form onSubmit={submit} className="exp-form">
            <div >
                <label htmlFor="skill">Skill/Technology Name</label><br/>
                <input onChange={skill} id="skill" type="text"/>
            </div>
            <div > 
                <label htmlFor="rating">Skill Rating out of 10</label><br/>
                <input onChange={rating} id="rating" type="number"/>
            </div>
            <button >Save</button>
            </form>
    </div>
  )
}

export default SkillForm
