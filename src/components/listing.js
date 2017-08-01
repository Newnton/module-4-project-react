import React from 'react'
import { Button, Card, Image, Statistic } from 'semantic-ui-react'

const Listing = ({listing, price, pricify}) => (

  <Card>
    <Image src='http://i.imgur.com/rEmEGda.jpg' />
    <Card.Content>
      <Card.Header>
      {listing.address}
      </Card.Header>
      <Card.Meta>
        {listing.zipcode}
      </Card.Meta>
      <Card.Description>
        {/* <Statistic.Value>${pricify(price)}</Statistic.Value> */}
      </Card.Description>
      <Card.Description>
        {listing.description.length > 119 ? listing.description.slice(0, 119) + '...' : listing.description}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>

        <Button basic color='green'>Add to Favorites</Button>

    </Card.Content>
  </Card>

)

export default Listing
