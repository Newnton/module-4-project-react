import React from 'react'
import { Card, Image, Statistic, Button } from 'semantic-ui-react'

const ListingShow = (props) => {
  console.dir(props.listing)
  if (props.listing){
  return (
    <Card>
      <Image src={props.listing.image_url} />
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
  )} else {return null}
}

export default ListingShow
