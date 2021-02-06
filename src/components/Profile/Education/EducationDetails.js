import React, { useState,useEffect } from 'react'
// import './WorkExp.css'
import EducationForm from './EducationForm';
import EducationList from './EducationList';

const EducationDetails = () => {

    const [show,setShow] = useState(false) 
    const[edu,setEdu] = useState([]);
    
const[course,setCourse] = useState('');
const[collage,setCollage] = useState('');
const[from,setFrom] = useState('');
const[to,setTo] = useState('');
const[key,setKey] = useState(0)
    console.log(edu);
    
    
useEffect(()=>{
  const showInfo = async () =>{
    const info = JSON.parse(localStorage.getItem("myEdu"));    
   await setEdu(info);
  }
  showInfo();
},[]);

const onFormSubmit = async (e) =>{
  if(!course){
    alert("Please enter all fields.")
  }
  else{
  e.preventDefault();
  setKey(key+1)
  const pedu =JSON.parse(localStorage.getItem("myEdu") || "[]");
  const data = {course,collage,from,to,key};
  localStorage.setItem("myEdu",JSON.stringify([...pedu,(data)]))
  await setEdu([...pedu,(data)])
  }
  setShow(false)  
}

  return (
    <div className="work-exp">
        <p>Education Details</p> 
        <button onClick={()=>setShow(!show)}>{!show ? "Add" : "Close"}</button>
        {show ? <div>
        <EducationForm 
        submit={onFormSubmit}
        Course={e=>setCourse(e.target.value)}
        Collage={e=>setCollage(e.target.value)}
        From={e=>setFrom(e.target.value)}
        To={e=>setTo(e.target.value)}
        />
        {/* <EducationList list={edu ? edu : null}/> */}
     </div>
        : <EducationList list={edu ? edu : null}/>}
      
    </div>
  )
}

export default EducationDetails
