import React, { useState, } from 'react'
// import './WorkList.css'

const WorkList = (props) => {

  let eduData = props.list;
  const [list, setList] = useState(eduData)
  // console.log(list);



  const onRemoveClick = async (item) => {
    const info = JSON.parse(localStorage.getItem('myEdu'));
    const filteredInfo = info.filter(i => i.course !== item.course);
    console.log(info);
    console.log(item);
    console.log(filteredInfo);
    localStorage.setItem('myEdu', JSON.stringify(filteredInfo));
    await setList(filteredInfo);

    // console.log(key);
    // let rest = eduData.filter((item)=>{
    //   return (item.key !== key)
    // })
    // await setList(rest)
    // console.table(rest);
    // await localStorage.setItem("myEdu",JSON.stringify(rest))
    // expData = rest;
    // console.log(rest);

  }


  return (
    <div >
      {list ? list.map(item => {
        return (
          <div className="work-list" key={item.key}>
            <h4>{item.course}</h4>
            <h5>{item.collage}</h5>
            <p><b> From:</b>{` ${item.from}`} <b> To:</b>{` ${item.to}`}</p>
            <button className="ui red button" onClick={() => onRemoveClick(item)}>Remove</button>

          </div>

        )
      }) : null}

    </div>
  )
}

export default WorkList
