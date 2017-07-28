import React, {Component} from 'react'
import { Button, Form } from 'semantic-ui-react'


export default class ListingForm extends Component {

  state = {
    address: '',
    zipcode: '',
    bedrooms: 0,
    bathrooms: 0,
    sqft: 0,
    price: 0.0,
    type: '',
    description: ''
  }

  handleInputChange = (event) => {
    const name = event.target.name
    const value = event.target.value

    if (typeof value === 'string'){
      value.toString(value)
    }

    this.setState({
      [name]: value
    })
  }

  handleSubmit = () => {
    fetch('http://localhost:3000/api/v1/listings/new', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        'content-type': 'application/json',
        'accept': 'application/json',
        'Authorization': localStorage.getItem('jwt')
      }
    }).then(res => res.json())
    .then(res => console.log(res))
  }

  render() {
    console.log(this.state);
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Field>
          <label>Address</label>
          <input
            name='address'
            placeholder='Address'
            onChange={this.handleInputChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Zipcode</label>
          <input type='number'
            placeholder='Zipcode'
            onChange={this.handleInputChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Bedrooms</label>
          <input type='number'
            placeholder='Bedrooms'
            onChange={this.handleInputChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Bathrooms</label>
          <input type='number'
            placeholder='Bathrooms'
            onChange={this.handleInputChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Square Footage</label>
          <input type='number'
            placeholder='Sqft'
            onChange={this.handleInputChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Price</label>
          <input type='number' step='0.01'
            placeholder='Price'
            onChange={this.handleInputChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Type</label>
          <input
            placeholder='Type'
            onChange={this.handleInputChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Description</label>
          <input
            placeholder='Description'
            onChange={this.handleInputChange}
          />
        </Form.Field>
        <Button>Submit</Button>
      </Form>
    )
  }
}
