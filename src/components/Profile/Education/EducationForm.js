import React from 'react'
// import './WorkExpForm.css'

const EducationForm = ({Course,Collage,From,To,submit}) => {




  return (
    <div >
       <form onSubmit={submit} className="exp-form">
            <div >
                <label htmlFor="course">Course Name</label><br/>
                <input onChange={Course} id="course" type="text"/>
            </div>
            <div > 
                <label htmlFor="Collage">School/University</label><br/>
                <input onChange={Collage} id="Collage" type="text"/>
            </div>
            <div className="singlecol">
                <p>Duration</p>
            </div>
            <div>
                <label htmlFor="fromDate">From</label><br/>
                <input onChange={From} type="month" name="date" id="fromDate"/>
            </div>
            <div>
                <label htmlFor="toDate">To</label><br/>
                <input onChange={To} type="month" name="date" id="toDate"/>
            </div>
           
            <button >Save</button>
            </form>
    </div>
  )
}

export default EducationForm
