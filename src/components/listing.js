import React from 'react'
import { Button, Card, Image } from 'semantic-ui-react'


const Listing = ({listing}) => (
  <Card>
    <Card.Content>
      <Image floated='right' size='mini' src='/assets/images/avatar/large/steve.jpg' />
      <Card.Header>
      {listing.address}
      </Card.Header>
      <Card.Meta>
        {listing.zipcode}
      </Card.Meta>
      <Card.Description>
        {listing.description}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>

        <Button basic color='green'>Add to Favorites</Button>

    </Card.Content>
  </Card>

)

export default Listing
