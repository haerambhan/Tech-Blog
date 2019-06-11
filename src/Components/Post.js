import React, { Component } from 'react';

class Post extends Component {
    componentWillMount(){
        console.log(this.props);
    }
    render() {
        return (
            <div className ='ba bw1 ma3 pa4 tc'>
               <div className='f3'>
               {this.props.data.title}
               </div>
               <div>
               {this.props.data.content}
               </div>
            </div>
        );
    }
}

export default Post;