import React from 'react'
import { Card } from 'semantic-ui-react'
import Listing from './listing'

const ListingsList = ({listings}) => {
  console.log(listings)
  return(
    <Card.Group>

      {listings !== null ? listings.listing.map((listing) => <Listing listing={listing} />) : null}
    </Card.Group>
  )
}



export default ListingsList
