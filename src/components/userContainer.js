import React from 'react'
import ListingsList from './listingsList'

export default class UserContainer extends React.Component {
  state = {
    postedListings: [],
    savedListings: [],
    userName: null
  }

  getUserInfo = () => {
    fetch(`http://localhost:3000/api/v1/me`, {
      headers: {
        'content-type': 'application/json',
        'method': 'get',
        'accept': 'application/json',
        'Authorization': localStorage.getItem('jwt')
      }
    })
    .then(res => res.json())
    .then(user => this.setState({
      userName: user.username,
      postedListings: user.postedListings,
      savedListings: user.savedListings
    }))
    return null
  }

  render(){
    return(
      <div>
        <h1 style={{textAlign: 'center'}}>Welcome {this.state.userName}</h1>
        <h2>Saved Listings:</h2>
        {!this.state.userName ? this.getUserInfo() : <ListingsList listings={this.state.savedListings}/> }
        <br/>
        <h2>Posted Listings:</h2>
        {!this.state.userName ? this.getUserInfo() : <ListingsList listings={this.state.postedListings}/> }
      </div>
    )
  }
}
