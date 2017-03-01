import React, { Component } from 'react';
import './css/app.css';
import $ from 'jquery';
 


export default class CreateAccount extends Component {
  constructor(props){
    super(props);
    this.state = {
    username: '',
    first: '',
    last: '', 
    password: '',
    email: '',
    phone: ''
    }

  }

  usernameChanged(event){
    this.setState({username: event.target.value});
  }

  firstChanged(event){
    this.setState({first: event.target.value});
  }

  lastChanged(event){
    this.setState({last: event.target.value});
  }
  passwordChanged(event){
    this.setState({password: event.target.value});
  }

  emailChanged(event){
    this.setState({email: event.target.value});
  }
  phoneChanged(event){
    this.setState({phone: event.target.value});
  }

  createAccount(e){
    var self = this
    e.preventDefault();
    $.ajax({
            method: 'POST', 
            url:'http://localhost:3001/api/user',
            contentType: 'application/json',
            data: JSON.stringify({
                username: this.state.username,
                first: this.state.first,
                last: this.state.last, 
                password: this.state.password,
                email: this.state.email,
                phone: this.state.phone
              })
          })
          .done(function(result){
            self.props.toggleLogin('LoginPage');
          })
  }
  render(){
    return (
      <div>
          <header>Create Account</header>
          <form>
            <div className="form-group">  
              <label htmlFor='username'>Username: </label>
              <input name='username' value={this.state.username} onChange={this.usernameChanged.bind(this)}/>
            </div>
            <div className="form-group">  
              <label htmlFor='firstName'>First Name: </label>
              <input name='firstName' value={this.state.first} onChange={this.firstChanged.bind(this)}/>
            </div>
             <div className="form-group">  
              <label htmlFor='lastName'>Last Name: </label>
              <input name='lastName' value={this.state.last} onChange={this.lastChanged.bind(this)}/>
            </div>
            <div className="form-group">  
              <label htmlFor='password'>Password: </label>
              <input type='password' name='password' value={this.state.password} onChange={this.passwordChanged.bind(this)}/>
            </div>
             <div className="form-group">  
              <label htmlFor='email'>Email: </label>
              <input type='email' name='email' value={this.state.email} onChange={this.emailChanged.bind(this)}/>
            </div>
            <div className="form-group">  
              <label htmlFor='phone'>Phone: </label>
              <input name='email' value={this.state.phone} onChange={this.phoneChanged.bind(this)}/>
            </div>
            <button onClick={this.createAccount.bind(this)}>Create Account</button>
          </form>
      </div>)
  }

}