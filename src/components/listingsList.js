import React, {Component} from 'react'
import { Card } from 'semantic-ui-react'
import Listing from './listing'

const ListingsList = (props) => (
  <Card.Group itemsPerRow={3}>
    {this.props.listings !== null ? this.props.listings.map((listing) => {
      return <Listing
        listing={listing}
        price={listing.price}
        changeListing={this.props.changeListing}
      />
    }) : null}
  </Card.Group>
)

export default ListingsList
