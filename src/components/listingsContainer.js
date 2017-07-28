import React, {Component} from 'react'
import ListingsList from './listingsList'

class ListingsContainer extends Component{

constructor(){
  super()

  this.state = {
    listings: null,
    filters: [],
    currentFilters: []
    // photosUrls: ['http://i.imgur.com/rEmEGda.jpg', 'http://i.imgur.com/2pQzOnX.png', 'http://i.imgur.com/w4gpsgH.jpg', 'http://i.imgur.com/4a8So6N.jpg', 'http://i.imgur.com/jQ67HfQ.jpg', 'http://i.imgur.com/ktUANJ5.jpg']
  }
}

  componentDidMount(){
    fetch(`http://localhost:3000/api/v1/listings`, {
      headers: {
        'content-type': 'application/json',
        'accept': 'application/json',
        'Authorization': localStorage.getItem('jwt')
      }
    })
    .then(res => res.json())
    .then(listings => this.setState({ listings }))
  }



  render(){
    console.log(this.state)
    return(
      <ListingsList listings={this.state.listings}  />
    )
  }

}

export default ListingsContainer
