import React from 'react'
import './JobDetails.css'

const JobDetails = ({selectedJob}) => {
  const {name,location,description,salary,logo} = selectedJob;
  const {city,country} = location;

  return (
    <div className="details">
        <h2>{name}</h2>
        <h4>{`${city},${country}`}</h4>
        <img src={logo} alt=""/>
        <p className="description">{description}</p>
        <div className="salary"><b>Salary: </b>{salary/1000}K /-</div>
    </div>
  )
}

export default JobDetails
