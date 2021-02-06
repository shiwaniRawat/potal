import React, { Component } from 'react'
// import { SearchLocation } from './components/search/SearchLocation'
import SearchName from './components/search/SearchName'
import Jobs from './jobs.json'
import Loading from './components/Loader/Loader'
import JobList from '../src/components/Job/JobList'
import SearchLocation from './components/search/SearchLocation'
import "./App.css"
import {Link, Route} from 'react-router-dom'

export default class App extends Component {

  state = {
    jobs: Jobs,
    isLoaded: false,
    jobofName:"",
    locationName:"",
    filter:[],
    isName:false,
    detailjob:[]
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoaded: true })
    }, 5000);
  }

  render() {
    const onChange = async (e) => {
      await this.setState({ jobofName: e.target.value })
      let job = this.state.jobs;
      
    if(this.state.jobName){ 
        await this.setState({filter:job.filter(job=>{
          return( job.name.toLowerCase() === this.state.jobofName.toLowerCase())
          })})      
          this.setState({isName:true})}
    else{
      this.setState({isName:false})
    }
    }
    
    const onLocation = async (e) => {
      await this.setState({ locationName: e.target.value })
      let job = this.state.jobs;
      
    if(this.state.locationName){ 
        await this.setState({filter:job.filter(job=>{
          return( job.location.city.toLowerCase() === this.state.locationName.toLowerCase())
          })})      
          this.setState({isName:true})}
    else{
      this.setState({isName:false})
    }
    }

    return (
      <>
     
      <div className="inputs">
          <SearchName submit={e=>e.preventDefault()} change={onChange}  />
          <SearchLocation submit={e=>e.preventDefault()} change={onLocation} />
          
          <Link to="/profile"><button className="ui violet button">See Your Profile</button></Link>
      </div>

      {this.state.isLoaded ? <JobList  jobs={this.state.isName && 
          (this.state.jobofName || this.state.locationName) ? 
          this.state.filter : this.state.jobs} /> : <Loading />
        }
      </>
    )
  }
}


