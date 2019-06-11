import React, { Component } from 'react';
import firebase from './Firebase';
import Post from './Post';

class Feed extends Component {

    state={
        posts:{}
    }
    componentDidMount()
    {
        firebase.database().ref('/posts').on('value', (snapshot) => {
           this.setState(
               {
                   posts:snapshot.val()
               }
           )
        })
    }
    render() {   
        const posts = Object.values(this.state.posts).map(post=>{
            return <Post data={post}/>;
        })
        return (
            <div className='pa4'>
            {posts}
            </div>
        );
    }
}

export default Feed;