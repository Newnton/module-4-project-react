import React, {Component} from 'react'
import { Button, Form } from 'semantic-ui-react'


export default class ListingForm extends Component {

  state = {
    apt_type: '',
    address: '',
    zipcode: 0,
    bedrooms: 0,
    bathrooms: 0,
    sqft: 0,
    price: 0.0,
    description: '',
    image_url_1: '',
    image_url_2: '',
    image_url_3: ''
  }

  handleInputChange = (event) => {
    const name = event.target.name
    const value = event.target.value

    this.setState({
      [name]: value
    })
  }

  handleSubmit = () => {
    console.log(this.state);
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
            name='zipcode'
            placeholder='Zipcode'
            onChange={this.handleInputChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Bedrooms</label>
          <input type='number'
            name='bedrooms'
            placeholder='Bedrooms'
            onChange={this.handleInputChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Bathrooms</label>
          <input type='number'
            name='bathrooms'
            placeholder='Bathrooms'
            onChange={this.handleInputChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Square Footage</label>
          <input type='number'
            name='sqft'
            placeholder='Sqft'
            onChange={this.handleInputChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Price $</label>
          <input type='number' step='0.01'
            name='price'
            placeholder='Price'
            onChange={this.handleInputChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Type</label>
          <input
            name='apt_type'
            placeholder='Apt Type'
            onChange={this.handleInputChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Description</label>
          <input
            name='description'
            placeholder='Description'
            onChange={this.handleInputChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Link to Image 1</label>
          <input
            name='image_url_1'
            placeholder='Image URL 1'
            onChange={this.handleInputChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Link to Image 2</label>
          <input
            name='image_url_2'
            placeholder='Image URL 2'
            onChange={this.handleInputChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Link to Image 3</label>
          <input
            name='image_url_3'
            placeholder='Image URL 3'
            onChange={this.handleInputChange}
          />
        </Form.Field>
        <Button>Submit</Button>
      </Form>
    )
  }
}
