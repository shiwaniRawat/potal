import React from 'react'
import './JobView.css'

const JobView = (props) => {

    const {clicked,name,location,image,des,salary} = props;
    const {city,country} = location;
    return (
        <div className="jobView"
        onClick={clicked}
        >
            <h2>{name}</h2>
            <h4>{`${city},${country}`}</h4>
            <img src={image} alt="img"/>
            <p className="description">{des}</p>
            <div className="salary"><b>Salary: </b>{salary/1000}K /-</div>
            <button className="btn"> Apply</button>
            <button className="button">Not interested</button>
        </div>
    )
}

export default JobView
