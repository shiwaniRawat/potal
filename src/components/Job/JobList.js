import React, { useState } from 'react'
import JobView from './JobView'
import JobDetails from './JobDetails'

const JobList = ({jobs}) => {

    const [selected,setSelected ] = useState();
        
    return (
        <div className="ui grid"> 
            <div className="six wide column">
                {jobs.map((job)=>{
                    return (
                    <JobView 
                    clicked={()=>setSelected(job)}
                    key={job.id}
                    job={job}
                    name={job.name}
                    image={job.logo}
                    des={job.description}
                    salary={job.salary}
                    location={job.location} 
                    />)
                })}
                </div>
            
           
            </div>
    )
}

export default JobList
