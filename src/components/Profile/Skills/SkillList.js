import React, { useState, } from 'react'

const SkillList = (props) => {

  let skillData = props.list;
  const [list, setList] = useState(skillData)

  const onRemoveClick = async (item) => {
    const info = JSON.parse(localStorage.getItem('mySkills'));
    const filteredInfo = info.filter(i => i.skill !== item.skill);
    localStorage.setItem('mySkills', JSON.stringify(filteredInfo));
    await setList(filteredInfo);
  }

  return (
    <div >
      {list ? list.map(item => {
        return (
        <div className="work-list" key={item.key}>
            <h4>{item.skill}</h4>
            <h5>{item.rating}</h5>
            <button className="ui red button" onClick={() => onRemoveClick(item)}>Remove</button>
        </div>
        )}) : null}
    </div>
  )
}

export default SkillList
