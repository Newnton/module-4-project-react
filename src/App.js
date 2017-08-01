import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect, NavLink } from 'react-router-dom'
import { Menu, Segment } from 'semantic-ui-react'
import AuthAdapter from './auth/authAdapter'
import Auth from './auth/authorize'
<<<<<<< HEAD
import UserForm from './components/userForm'
=======
import Login from './components/loginForm'
import ListingsContainer from './components/listingsContainer'
>>>>>>> 108d6f62b36fa9985cfec4e8feeeca7f300912c9
import ListingForm from './components/listingForm'
import UserContainer from './components/userContainer'

class App extends Component {
  static contextTypes = {
      router: PropTypes.object
    }

  state = {
    auth: {
      headers: AuthAdapter.headers
    }
  }

  isLoggedIn = () => !!window.localStorage.jwt

  onLogin(loginParams){
  AuthAdapter.login(loginParams)
    .then( res => {
      if( res.error ){
        console.log("do nothing")
      }else{
        console.log(res)
        localStorage.setItem('jwt', res.jwt)
        this.context.router.history.push('/listings')
      }
    })
  }

  handleLogout () {
    localStorage.clear()
    this.context.router.history.push('/login')
  }

  activeItem = checkURL => this.context.router.history.location.pathname === checkURL

  render() {
    console.log(this.isLoggedIn());
    return(
      <div>
        <Menu pointing secondary>
          <Menu.Item active={this.activeItem('/listings')}><NavLink to="/listings">Listings</NavLink></Menu.Item>
          <Menu.Item active={this.activeItem('/listings/new')}><NavLink to="/listings/new">Add Listing</NavLink></Menu.Item>
          <Menu.Item active={this.activeItem('/dashboard')}><NavLink to="/dashboard">Dashboard</NavLink></Menu.Item>
          <Menu.Menu position='right'>
            {this.isLoggedIn() ? <Menu.Item name='logout' onClick={this.handleLogout.bind(this)}/> : <Menu.Item active={this.activeItem('/login')}><NavLink to="/login">Login</NavLink></Menu.Item>}
          </Menu.Menu>
        </Menu>

        <Segment>
          <div style={{margin: '0 auto'}}>
            <Route exact path="/listings" component={Auth(ListingsContainer, this.state.auth.headers)}  />
            <Route path="/login" render={() => <Login onSendLogin={this.onLogin.bind(this)} isLoggedIn={this.isLoggedIn}/>} />
            <Route path="/listings/new" component={Auth(ListingForm)} />
            <Route path="/signup" render={() => <UserForm />}/>
            <Route path="/dashboard" component={Auth(UserContainer)} />
            </div>
        </Segment>
      </div>
    )
  }
}

export default App
