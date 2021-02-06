import React,{useState,useEffect} from 'react'
import './WorkExpForm.css'

const WorkExpForm = ({title,company,location,from,to,submit}) => {




  return (
    <div >
       <form onSubmit={submit} className="exp-form">
            <div >
                <label htmlFor="job">Job Title</label><br/>
                <input onChange={title} id="job" type="text"/>
            </div>
            <div > 
                <label htmlFor="company">Company</label><br/>
                <input onChange={company} id="company" type="text"/>
            </div>
            <div className="singlecol"> 
                <label htmlFor="location">Location</label><br/>
                <input onChange={location} id="location" type="text"/>
            </div>
            <div className="singlecol">
                <label htmlFor="date">Time Period</label><br/>
            </div>
            <div>
                <p>From</p>
                <input onChange={from} type="month" name="date" id="fromDate"/>
            </div>
            <div>
                <p>To</p>
                <input onChange={to} type="month" name="date" id="toDate"/>
            </div>
           
            <button >Save</button>
            </form>
    </div>
  )
}

export default WorkExpForm
