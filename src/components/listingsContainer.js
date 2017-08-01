import React, {Component} from 'react'
import ListingsList from './listingsList'
import { Grid }from 'semantic-ui-react'
import { Route } from 'react-router-dom'
import ListingShow from './ListingShow'
import PropTypes from 'prop-types'

class ListingsContainer extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  state = {
    listings: [],
    filters: [],
    currentFilters: []
  }

  componentWillMount(){
    fetch(`http://localhost:3000/api/v1/listings`, {
      headers: {
        'content-type': 'application/json',
        'accept': 'application/json',
        'Authorization': localStorage.getItem('jwt')
      }
    })
    .then(res => res.json())
    .then(res => {
      this.setState({ listings: res.listing })
    })
  }

  renderWithState = () => {
    debugger
    return (
      <Grid padded>
        <Grid.Column width={10}>
          <Route path='/listings' render={() => (
            <ListingsList
              listings={this.state.listings}
              changeListing={this.changeSelectedListing}
            />
          )}/>
        </Grid.Column>
        <Grid.Column width={4}>
          <Route path='/listings/:id' render={() => (
            <ListingShow listing={this.state.currentListing} />
          )}/>
        </Grid.Column>
      </Grid>
    )
  }


  renderWithOutState = () => {
    return (
    <Grid padded>
      <Grid.Column width={10}>
        <Route path='/listings' render={() => (
          <ListingsList
            listings={this.state.listings}
            changeListing={this.changeSelectedListing}
          />
        )}/>
      </Grid.Column>
    </Grid>
    )
  }

  render() {

    const idUrl = this.context.router.history.location.pathname
    const showListing = this.state.listings.find(listing => {
      return listing.id == idUrl.split("/")[idUrl.split('/').length - 1]
    })

    return(
      <Grid padded divided>
        <Grid.Column width={10}>
          <Route path='/listings' render={() => (
            <ListingsList
              listings={this.state.listings}
              changeListing={this.changeSelectedListing}
            />
          )}/>
        </Grid.Column>
        <Grid.Column width={6}>
          <Route path='/listings/:id' render={() => (
            <div>{!!showListing ? <ListingShow listing={showListing} /> : null}</div>
          )}/>
        </Grid.Column>
      </Grid>
    )
  }

}

export default ListingsContainer
