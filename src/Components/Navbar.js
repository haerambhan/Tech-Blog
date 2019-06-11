import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import firebase from './Firebase'

class Navbar extends Component {


    logout = () => {
        firebase.auth().signOut();
    }
    
    render() {
       

        return (
            <div className='flex'>
                <div className='f2' id="title">TechBlog</div>
                <div id="titlelink">
                    <p className='pa2'>{this.props.user.email}</p>
                    <NavLink className='pa2' to='/home/newpost'>Create Post</NavLink>
                    <NavLink className='pa2' to='/' onClick={this.logout}>Logout</NavLink>
                </div>   
            </div>
        );
    }
}

export default Navbar;