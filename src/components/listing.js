import React from 'react'
import { Button, Card, Image } from 'semantic-ui-react'

// const extra = (
//   <a>
//     <Icon name='user' />
//     16 Friends
//   </a>
// )
//
// const CardExampleCardProps = () => (
//   <Card
//     image='/assets/images/avatar/large/elliot.jpg'
//     header='Elliot Baker'
//     meta='Friend'
//     description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
//     extra={extra}
//   />
// )


const Listing = ({listing}) => (
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
        {listing.description}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>

        <Button basic color='green'>Add to Favorites</Button>

    </Card.Content>
  </Card>

)

export default Listing
