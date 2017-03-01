
import React, { Component } from 'react';
import './css/app.css';
import $ from 'jquery';
import Scheduler from './Scheduler';
import CreateAccount from './CreateAccount';
import Login from './LoginPage';


export default class App extends Component {

  constructor(){
    super()
    this.state = {
      mode: 'Schedule'
    }
  }

  changeMode(mode){
    this.setState({mode: mode});
  }

  mode(){
    if(this.state.mode === 'Schedule'){
      return <Scheduler/>
    } else if (this.state.mode === 'Create Account'){
      return <CreateAccount toggleLogin={this.changeMode.bind(this)} />
    }else if (this.state.mode === 'Login'){
      return <Login/>
    }
  }

  render() {
    return (
      <div>
      <div className='accountHeader'>
        <a onClick={()=>this.setState({mode: 'Create Account'})}>Create Account</a>
        <a onClick={()=>this.setState({mode: 'Schedule'})}>Book Hunt</a>
        <a onClick={()=>this.setState({mode: 'LoginPage'})}>Login</a>
      </div>
        <div className="App-header">
          {this.mode()}
        </div>
    </div>
    );
  }
}