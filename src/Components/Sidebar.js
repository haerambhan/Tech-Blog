import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

class Sidebar extends Component {
    render() {
        return (
            <div className = 'pa3 sidebar' >
                <ul>
                    <li><NavLink className='navl' to='/home/feed'>Feed</NavLink></li>
                    <li><NavLink className='navl' to='/home/myposts'>My Posts</NavLink></li>
                    <li><NavLink className='navl' to='/home/settings'>Settings</NavLink></li>
                    <li><NavLink className='navl' to='/home/profile'>Profile</NavLink></li>
                    <li><NavLink className='navl' to='/home/about'>about</NavLink></li>
                    <li><NavLink className='navl' to='/home/contact'>Contact us</NavLink></li>

                </ul>
            </div>
        );
    }
}

export default Sidebar;