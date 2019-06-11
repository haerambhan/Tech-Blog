import React, { Component } from 'react';
import firebase from './Firebase';


class NewPost extends Component {

    state={
        title:'',
        content:''
    }

    changeTitle = (event) => {
        this.setState(
            {title:event.target.value}
        )
    }
    changeContent = (event) => {
        this.setState(
            {content:event.target.value}
        ) 
    }
    submitPost = () => {
              if(this.state.title==='' || this.state.content==='')
              {
                  alert("Fields cannot be empty");
              }
              else
              {
                firebase.database().ref('/posts').push({
                    title:this.state.title,
                    content:this.state.content
                })
              }
              
          this.clear();
    }
    clear = () => {
        var x= document.querySelector('#inp');
        var y= document.querySelector('#ta');
        x.value='';
        y.value='';
        this.setState(
            {
                title:'',
                content:''
            }
        )
    }

    render() {
        return (
            <div className='pa4'>
                <input className='tex' id="inp" type="text" placeholder="Title" onChange={this.changeTitle}/><br></br>
                <textarea className='tex' id="ta" cols="30" rows="10" placeholder="Content"onChange={this.changeContent}></textarea><br></br>
                <button className='btn mr3'  onClick={this.submitPost}>Post</button>
                <button className='btn'  onClick={this.clear}>Clear</button>
            </div>
        );
    }
}

export default NewPost;