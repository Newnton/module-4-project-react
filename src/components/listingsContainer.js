import React, {Component} from 'react'
import ListingsList from './listingsList'
import { Grid }from 'semantic-ui-react'

class ListingsContainer extends Component{

constructor(){
  super()

  this.state = {
    listings: null,
    filters: [],
    currentFilters: []
    // photosUrls: ['http://i.imgur.com/rEmEGda.jpg', 'http://i.imgur.com/2pQzOnX.png', 'http://i.imgur.com/w4gpsgH.jpg', 'http://i.imgur.com/4a8So6N.jpg', 'http://i.imgur.com/jQ67HfQ.jpg', 'http://i.imgur.com/ktUANJ5.jpg']
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

  pricify = (price) => {
    let numArr = price.split("")
    let i = numArr.length - 1
    while (i > -1) {
      i -= 3
      numArr.splice(i, 0, ",")
      i--
    }
    return numArr.join("")
  }

  render(){
    console.log(this.state)
    return(
      <Grid padded>
        <Grid.Column width={10}>
          <ListingsList
            listings={this.state.listings}
            prices={this.state.listings}
            pricify={this.pricify}
          />
        </Grid.Column>
        <Grid.Column>

        </Grid.Column>
      </Grid>
    )
  }

}

export default ListingsContainer
