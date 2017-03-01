import React, { Component } from 'react';
import './css/app.css';
import $ from 'jquery';
 


export default class Scheduler extends Component {
  constructor(props){
    super(props);
    this.state = {
      species: 'elk',
      hunters: '',
      lodging: 'Cabin',
      start: '',
      end: ''
    }

  }


  startChanged(event){
    this.setState({start: event.target.value});
  }

  endChanged(event){
    this.setState({end: event.target.value});
  }

  speciesChanged(event){
    this.setState({species: event.target.value});
  }

  huntersChanged(event){
    this.setState({hunters: event.target.value});
  }
  lodgingChanged(event){
    this.setState({lodging: event.target.value});
  }

  scheduleHunt(e){
    e.preventDefault();
    $.ajax({
            method: 'POST', 
            url:'http://localhost:3001/api/booking',
            contentType: 'application/json',
            data: JSON.stringify({
                species: this.state.species,
                hunters: this.state.hunters, 
                start: this.state.start,
                end: this.state.end, 
                lodging: this.state.lodging
              })
          })
          .done(function(result){
            console.log(result);
          })
  }
  render(){
    return (
      <div>
          <header>Book Your Hunt</header>
            <form>
          <div className="form-group">  
            <label htmlFor='numHunters'>Number of Hunters: </label>
            <input name='numHunters' value={this.state.hunters} onChange={this.huntersChanged.bind(this)}/>
          </div>
          <div className="form-group">
          <label  htmlFor='bookingStartDate'>Arrival: </label>
          <input type='date' name='bookingStartDate' value={this.state.start} onChange={this.startChanged.bind(this)}/>
          </div>
          <div className="form-group">
          <label  htmlFor='bookingEndDate'> Departure: </label>
          <input type='date' name='bookingEndDate' value={this.state.end} onChange={this.endChanged.bind(this)}/>
          </div>
          <div className="form-group">
              <label htmlFor='lodgingNeeds'>Lodging: </label>
              <select name='lodgingNeeds' value={this.state.lodging} onChange={this.lodgingChanged.bind(this)}>
                <option value="cabin">Cabin</option>
                <option value="mainlodge">Main Lodge</option>
              </select>
          </div>
           <div className="form-group">
              <label htmlFor='huntedSpecies'>Species: </label>
              <select name='huntedSpecies' value={this.state.species} onChange={this.speciesChanged.bind(this)}>
                <option value="elk">elk</option>
                <option value="deer">deer</option>
                <option value="mountainlion">mountain lion</option>
                <option value="bear">bear</option>
                <option value="mountaingoat">mountain goat</option>
                <option value="moose">moose</option>
                <option value="bighorn sheep">bighorn sheep</option>
              </select>
            </div>

          <button onClick={this.scheduleHunt.bind(this)}>Book Hunt</button>
          </form>
      </div>)
  }

}