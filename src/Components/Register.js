import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import firebase from './Firebase'





class Register extends Component {

    registerUser = () => {
        // var name=document.querySelector('#name')
        var email= document.querySelector('#email');
        var password = document.querySelector('#password');
        var password2= document.querySelector('#password2');

        if(password.value===password2.value)
        {
            firebase.auth().createUserWithEmailAndPassword(email.value,password.value)
            .then(usr => {
                this.props.routeChange();
            },error => alert(error.message))   
            
        }
        else
        {
            alert('Passwords do not match');
        }
        
    }

    render() 
        {
            return (
                <div className='tc mt6'>
                    <h1>Register</h1>
                    <div>
                        <input id='name' type="text" className='ph5 pv2 ba bw1 br2 mb2' placeholder='Enter Full Name'/><br/>
                        <input id='email'className='ph5 pv2 ba bw1 br2 mb2' type="email" placeholder='Enter E-mail address'/><br/>
                        <input id='password'className='ph5 pv2 ba bw1 br2 mb2' type="password" placeholder='Enter Password'/><br/>
                        <input id='password2'className='ph5 pv2 ba bw1 br2 ' type="password" placeholder='Enter Password again'/><br/>
                        <NavLink className='pa2 ph4 btn mr2' to={this.props.auth} onClick={this.registerUser}>Register</NavLink>
                        <NavLink className='pa2 ph4 btn ml3' to='/login' >Go to Login Page</NavLink>
                    </div>
                </div>
            );
        }
    }


export default Register;