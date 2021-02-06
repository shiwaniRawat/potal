import React, { useState,useEffect } from 'react'
import SkillForm from './SkillForm';
import SkillList from './SkillList';

const Skills = () => {

  const [show,setShow] = useState(false) 
  const[skl,setSkl] = useState([]);
    
  const[skill,setSkill] = useState('');
  const[rating,setRating] = useState('');
  const[key,setKey] = useState(0)
    
    
useEffect(()=>{
  const showInfo = async () =>{
    const info = JSON.parse(localStorage.getItem("mySkills"));
    await setSkl(info);
  }
  showInfo();
},[]);

const onFormSubmit = async (e) =>{
  if(!skill || !rating){
    alert("Please enter all fields.")
  }
  else{
  e.preventDefault();
  setKey(key+1)
  const pskill =JSON.parse(localStorage.getItem("mySkills") || "[]");
  const data = {skill,rating,key};
  localStorage.setItem("mySkills",JSON.stringify([...pskill,(data)]))
  await setSkl([...pskill,(data)])
  }  
  setShow(!show)
}

  return (
    <div className="work-exp">
        <p>Skills and Technology</p> 
        <button onClick={()=>setShow(!show)}>{!show ? "Add" : "Close"}</button>
        {show ? <div>
        <SkillForm 
        submit={onFormSubmit}
        skill={e=>setSkill(e.target.value)}
        rating={e=>setRating(e.target.value)}
        />
        <SkillList list={skl ? skl : null}/>
     </div>
        : <SkillList list={skl ? skl : null}/>}
      
    </div>
  )
}

export default Skills
