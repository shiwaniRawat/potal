import React, { useState,useEffect } from 'react'
import WorkList from './WorkList'
import WorkExpForm from './WorkExpForm';
import './WorkExp.css'

const WorkExp = () => {

    const [show,setShow] = useState(false) 
    const[exp,setExp] = useState([]);
    
const[title,setTitle] = useState('');
const[company,setCompany] = useState('');
const[loC,setLoC] = useState('');
const[from,setFrom] = useState('');
const[to,setTo] = useState('');
const[key,setKey] = useState(0)
    
    
useEffect(()=>{
  const showInfo =async () =>{
    const info = JSON.parse(localStorage.getItem("myExp"));
    await setExp(info);
  }
  showInfo();
},[]);

const onFormSubmit = async (e) =>{
  if(!title || loC || from || to || company){
    alert("Please enter all fields.")
  }
  else{
  e.preventDefault();
  await setKey(key+1)
  const pexp =JSON.parse(localStorage.getItem("myExp") || "[]");
// console.log(pexp);
  // localStorage.clear();
  const data = {title,company,loC,from,to,key};
  await localStorage.setItem("myExp",JSON.stringify([...pexp,(data)]))
  await setExp([...pexp,(data)])
  }
  // console.log(exp);
  
}

  return (
    <div className="work-exp">
        <p>Work Experience</p> 
        <button onClick={()=>setShow(!show)}>{!show ? "Add" : "Close"}</button>
        {show ? <div>
        <WorkExpForm 
        submit={onFormSubmit}
        title={e=>setTitle(e.target.value)}
        company={e=>setCompany(e.target.value)}
        location={e=>setLoC(e.target.value)}
        from={e=>setFrom(e.target.value)}
        to={e=>setTo(e.target.value)}
        />
        {/* <WorkList list={exp ? exp : null}/> */}
     </div>
        : <WorkList list={exp ? exp : null}/>
        }
      
    </div>
  )
}

export default WorkExp
