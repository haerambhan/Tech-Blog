import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import firebase from './Firebase';


class Login extends Component {
    
    signin = () => {
        var email= document.querySelector('#email');
        var password=document.querySelector('#password');
        firebase.auth().signInWithEmailAndPassword(email.value, password.value)
            .then(user => {
                this.props.routeChange()
            })
            .catch(error => {
            if(error.code==='auth/user-not-found')
            {
                alert('No such user exists');
            }
            else if(error.code==='auth/invalid-email')
            {
                alert('Invalid email');
            }
            else if(error.code==='auth/wrong-password')
            {
                alert('Password Incorrect');
            }
        })

        
    }
    render() {
        return (
            <div className='tc mt6'>
                <h1>Login</h1>
                <div>
                    <input className='ph5 pv2 ba bw1 br2 mb2' id='email'type="email" placeholder='Enter E-mail address'/><br/>
                    <input className='ph5 pv2 ba bw1 br2' id='password' type="password" placeholder='Enter Password'/><br/>
                    <NavLink className='pa2 ph4 btn mr3' to={this.props.auth} onClick={this.signin}>Login</NavLink>
                    <NavLink className='pa2 ph4 btn ml3' to='/register'>Create New User</NavLink>
                </div>
            </div>
        );
    }
}

export default Login;