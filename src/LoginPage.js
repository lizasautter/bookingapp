import React, { Component } from 'react';
import './css/app.css';
import $ from 'jquery';
 


export default class CreateAccount extends Component {
  render(){
    return (
      <div>
          <header>Login</header>
          <form>
            <div className="form-group">  
              <label htmlFor='username'>Username: </label>
              <input name='username' value={this.state.username} onChange={this.usernameChanged.bind(this)}/>
            </div>
            <div className="form-group">  
              <label htmlFor='password'>Password: </label>
              <input type='password' name='password' value={this.state.password} onChange={this.passwordChanged.bind(this)}/>
            </div>
            <button onClick={this.createAccount.bind(this)}>Login</button>
          </form>
      </div>)
  }

}