import React, { Component } from 'react'
import AuthAdapter from './auth/authAdapter'
import ListingsContainer from './components/listingsContainer'
import { Route, Redirect, NavLink } from 'react-router-dom'
import Login from './components/loginForm'
import Auth from './auth/authorize'
import ListingForm from './components/listingForm'
import { Menu, Segment } from 'semantic-ui-react'
import PropTypes from 'prop-types'

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
          <Menu.Menu position='right'>
            {this.isLoggedIn() ? <Menu.Item name='logout' onClick={this.handleLogout.bind(this)}/> : <Menu.Item active={this.activeItem('/login')}><NavLink to="/login">Login</NavLink></Menu.Item>}
          </Menu.Menu>
        </Menu>

        <Segment>
          <div style={{margin: '0 auto'}}>
            <Route path="/listings" component={Auth(ListingsContainer, this.state.auth.headers)} />
            <Route path="/login" render={() => <Login onSendLogin={this.onLogin.bind(this)} isLoggedIn={this.isLoggedIn}/>} />
            <Route path="/listings/new" component={Auth(ListingForm)} />
          </div>
        </Segment>
      </div>
    )
  }
}

export default App
