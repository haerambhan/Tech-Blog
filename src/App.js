import React, { Component } from 'react';
import './App.css';
import {BrowserRouter,Route,Switch } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import Feed from './Components/Feed';
import MyPosts from './Components/MyPosts';
import Settings from './Components/Settings';
import Profile from './Components/Profile';
import About from './Components/About';
import Contact from './Components/Contact';
import NewPost from './Components/NewPost';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Register from './Components/Register';
import Login from './Components/Login';
import firebase from './Components/Firebase';

class Homepage extends React.Component { 

  state={
    currentUser:{
      name:'',
      email:'',
    },
    loggedIn:false
  }

  componentDidMount()
  {
    firebase.auth().onAuthStateChanged(user => {
      if(user!==null)
      {
        this.setState({
          currentUser:{
            name:user.displayName,
            email:user.email
          }
        })
        this.setState({
          loggedIn:true
        })
      }
  
    })
  }

  render(){
    let control='';
    const xy = () =>{
      return(<Profile user={this.state.currentUser}/>)
    }
    if(this.state.loggedIn===true)
    {
      control=(
            <div>
              <Navbar user={this.state.currentUser}/>
              <div className='grid'>
                <Sidebar/>
                <Switch >
                  <Route path='/home' exact component = {Feed}/>
                  <Route path='/home/feed' component = {Feed}/>
                  <Route path='/home/myposts'  component = {MyPosts}/>
                  <Route path='/home/settings' component = {Settings}/>
                  <Route path='/home/profile' component = {xy}/>
                  <Route path='/home/about' component = {About}/>
                  <Route path='/home/contact' component = {Contact}/>
                  <Route path='/home/newpost' component = {NewPost}/>
                </Switch>
              </div>
            <Footer/>  
          </div>)
      }

    return(
      <div>
         {control}
      </div>
       
    )
  }
  }


class App extends Component {

  state={
    rAuth:'/register',
    lAuth:'/login'
  }
  
  changeRoute =() => {
      firebase.auth().onAuthStateChanged(user => {
        if(user!==null)
        {
          this.setState({
            rAuth:'/home',
            lAuth:'/home'
          })
        }
        else
        {
          this.setState({
            rAuth:'/register',
            lAuth:'/login'
          })
        }
    
      })
  }

  
  render()
   {

    const xLogin =() => {
      return(<Login routeChange={this.changeRoute} auth={this.state.lAuth}/>)
    }
    const xRegister =() => {
      return(<Register routeChange={this.changeRoute} auth={this.state.rAuth}/>)
    }

    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Switch>
              <Route path='/' exact component={Home}/>
              <Route path='/login' component = {xLogin}/>
              <Route path='/Register' component = {xRegister}/>
              <Route path='/home' component = {Homepage}/>
            </Switch>
          </div>  
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
