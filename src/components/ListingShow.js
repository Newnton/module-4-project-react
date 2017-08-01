import React from 'react'
import { Card, Image, Statistic, Button } from 'semantic-ui-react'

const ListingShow = (props) => {
  return (
    <Card>
      <Image src='http://i.imgur.com/rEmEGda.jpg' />
      <Card.Content>
        <Card.Header>
          {props.listing.address}
        </Card.Header>
        <Card.Description>
          {props.listing.zipcode}
        </Card.Description>
        <Card.Description>
          <Statistic.Value>${props.listing.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Statistic.Value>
        </Card.Description>
        <Card.Description>
          {props.listing.description}
        </Card.Description>
      </Card.Content>
    </Card>
  )
}

export default ListingShow
