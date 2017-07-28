import React, { Component } from 'react'
import AuthAdapter from './auth/authAdapter'
import ListingsContainer from './components/listingsContainer'
import {BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import Login from './components/loginForm'
import Auth from './auth/authorize'
import ListingForm from './components/listingForm'

class App extends Component {

  state = {
    auth: {
      isLoggedIn: false,
      user: '',
      headers: AuthAdapter.headers
    }
  }

  onLogin(loginParams){
  AuthAdapter.login(loginParams)
    .then( res => {
      //check for an error message
      if( res.error ){
        console.log("do nothing")
      }else{
        console.log(res)
        localStorage.setItem('jwt', res.jwt)
        this.setState({
          auth:{
            isLoggedIn: true,
            user: res.username
          }
        })
      }
      //if error render login again
      //else set the jwt token and forward user to /giphs
    })
}

  handleLogout(){
    localStorage.clear()
    this.setState({auth: {
      isLoggedIn:false,
      user: ''
    }})
  }

  render() {
    return(
    <Router>
       <div>
         <Route exact path="/" component={Auth(ListingsContainer, this.state.auth.headers)} />
         <Route path="/login" render={() => this.state.auth.isLoggedIn ? <Redirect to="/" /> : <Login onSendLogin={this.onLogin.bind(this)} />} />
         <Route path="/listings/new" render={() => <ListingForm />} />
      </div>
    </Router>
  )
  }
}

export default App
