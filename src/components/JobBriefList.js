import React,{Component} from 'react'
import Jobs from "../jobs.json"


class JobBriefList extends Component {
   
    render(){
        return(
            <div>
                {Jobs.map((jobsDetail)=>{
                    return <div className="jobs" style={{maxWidth:"20vw"}}>
                        <h1>{jobsDetail.name}</h1>
                        <h5>{jobsDetail.location.city},{jobsDetail.location.country}</h5>
                        <img src={jobsDetail.logo} alt="job img"/>
                        <p>{jobsDetail.description}</p>
                        <div className="salary">Salary:{jobsDetail.salary}</div>

                    </div>
                })}
            </div>
        )
    }
   
}

export default JobBriefList
