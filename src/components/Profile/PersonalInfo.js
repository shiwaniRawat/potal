import React from 'react'
import './PersonalInfo.css'

const PersonalInfo = () => {
  return (
    <div className="personal-info">
      <p>Personal Info:</p>
      <form action="" className="form">
      <div>
      <label htmlFor="name">First Name:</label><br/>
      <input type="text" id="name"/><br/>
      </div>
      <div>
      <label htmlFor="lastname">Last Name</label><br/>
      <input type="text" id="lastname"/>
      </div>
      <div>
      <label htmlFor="email">Email:</label><br/>
      <input type="email" id="email"/>
      </div>
      <div>
      <label htmlFor="number">Moblie No:</label><br/>
      <input type="number" id="number"/>
      </div>
      <div>
      <label htmlFor="city">City:</label><br/>
      <input type="text" id="city"/>
      </div>
      <div>
      <label htmlFor="number">Postal Code:</label><br/>
      <input  type="number" id="number"/>
      </div>
      </form>
      <div className="des">
        <label htmlFor="Description">Description:</label><br/>
        <textarea name="" id="Description" cols="50" rows="5"></textarea>
      </div>
      <div className="btn">
        <button>SAVE</button>
      </div>
    </div>
  )
}

export default PersonalInfo
