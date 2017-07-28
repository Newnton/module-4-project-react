import React, {Component} from 'react'
import ListingsList from './listingsList'

class ListingsContainer extends Component{

constructor(){
  super()

  this.state = {
    listings: null,
    filters: [],
    currentFilters: []
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
