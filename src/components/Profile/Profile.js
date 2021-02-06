import React, { Component } from 'react'
import PersonalInfo from './PersonalInfo'
import WorkExp from './WorkExp/WorkExp'
import EducationDetails from './Education/EducationDetails'
import Skills from './Skills/Skills'

export class Profile extends Component {
  render() {
    return (
      <div>
        <h1 style={{textAlign:"center"}}>This is user profile.</h1>
        <PersonalInfo/>
        <WorkExp/>
        <EducationDetails/>
        <Skills/>

      </div>
    )
  }
}

export default Profile
