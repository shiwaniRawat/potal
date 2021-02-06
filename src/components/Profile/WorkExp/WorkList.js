import React, { useState } from 'react'
import './WorkList.css'

const WorkList = (props) => {
  
let expData = props.list;
const [ list , setList] = useState(expData)
console.table(list);


const onRemoveClick=async(key)=>{
  const info = JSON.parse(localStorage.getItem("myExp"));
  const filteredInfo = info.filter((item)=>{
    return (item.key !== key)
  })
  await localStorage.setItem("myExp",JSON.stringify(filteredInfo))
  await setList(filteredInfo)

}

 return(
   <div >
     {list ? list.map(item=>{
       return(
         <div  className="work-list" key={item.key}>
         <h4>{item.title}</h4>
         <h5>{`${item.company}  ${item.loC}`}</h5>
          <p><b> From:</b>{` ${item.from}`} <b> To:</b>{` ${item.to}`}</p>
         <button className="ui red button" onClick={()=>onRemoveClick(item.key)}>Remove</button>
         
         </div>

       )
     }): null}
    
   </div>
 )
}

export default WorkList
