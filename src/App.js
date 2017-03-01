
import React, { Component } from 'react';
import './css/app.css';
import $ from 'jquery';
import Scheduler from './Scheduler';
import CreateAccount from './CreateAccount';


export default class App extends Component {

  constructor(){
    super()
    this.state = {
      mode: 'Schedule'
    }
  }

  mode(){
    if(this.state.mode === 'Schedule'){
      return <Scheduler/>
    } else if (this.state.mode === 'Create Account'){
      return <CreateAccount />
    }
  }

  render() {
    return (
      <div>
      <div className='accountHeader'>
        <a onClick={()=>this.setState({mode: 'Create Account'})}>Create Account</a>
        <a onClick={()=>this.setState({mode: 'Schedule'})}>Book Hunt</a>
      </div>
        <div className="App-header">
          {this.mode()}
        </div>
    </div>
    );
  }
}