import React from 'react'
import { Button, Card, Image, Statistic } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

const Listing = (props) => (

  <Card>
    <Image src='http://i.imgur.com/rEmEGda.jpg' />
    <Card.Content>
      <Card.Header>
        {props.listing.address}
      </Card.Header>
      <Card.Meta>
        {props.listing.zipcode}
      </Card.Meta>
      <Card.Description>
        <Statistic.Value>${props.listing.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Statistic.Value>
      </Card.Description>
      <Card.Description>
        {props.listing.description.length > 119 ? props.listing.description.slice(0, 119) + '...' : props.listing.description}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>

      <Button.Group>
        <Button basic color='green'>Add to Favorites</Button>
        <Button>
          <NavLink
            to={`/listings/${props.listing.id}`}> View
          </NavLink>
        </Button>
      </Button.Group>

    </Card.Content>
  </Card>

)

export default Listing
