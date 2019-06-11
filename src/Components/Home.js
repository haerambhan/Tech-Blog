import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div  className="tc">
                <h1> TechBlog</h1>
                <h3 className='f3'>Description</h3>
                <div className='f6 desc'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam, corporis recusandae velit doloremque, incidunt, exercitationem repudiandae magni cumque quisquam voluptatem sapiente. Cupiditate deserunt quae nisi mollitia dolore ab soluta quasi temporibus laudantium, neque officiis molestiae dolorem eum ducimus nam iure suscipit molestias rem et itaque exercitationem qui totam. Earum, dolore!</div>
                <NavLink className='pa2 btn mr3' to='/login'>Login</NavLink>
                <NavLink className='pa2 btn ml3' to='/register'>Register</NavLink>
            </div>
        );
    }
}

export default Home;