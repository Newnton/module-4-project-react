import React, {Component} from 'react'
import { Card } from 'semantic-ui-react'
import Listing from './listing'

const ListingsList = (props) => {
  console.log(props)
  const addFavorite = (listingId) => {
    console.log(listingId)
    fetch('http://localhost:3000/api/v1/saved/new', {
      method: 'POST',
      body: JSON.stringify({listingId}),
      headers: {
        'content-type': 'application/json',
        'accept': 'application/json',
        'Authorization': localStorage.getItem('jwt')
      }
    }).then(res => res.json())
    .then(res => console.log(res))
  }
  return(
    <Card.Group itemsPerRow={3}>
      {props.listings !== null ?
        props.listings.map((listing) => (
          <Listing
            listing={listing}
            price={listing.price}
            addFavorite={props.addFavorite}
          />
      )) :
      null
    }
    </Card.Group>
  )
}

export default ListingsList
