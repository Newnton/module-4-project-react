import React, {Component} from 'react'
import { Input, Button, Form } from 'semantic-ui-react'

class Search extends Component {
  constructor(){
    super()

    this.state={
      searchTerm: ''
    }
  }

    handleChange = (event) =>{
      this.setState({
        searchTerm: event.target.value
      })
    }

    render(){
      return(
        <Form>
         <br></br>
         <br></br>
        <Form.Field>
         <input placeholder='' onChange={this.handleChange} type="text"/>
        </Form.Field>
         <Button type="submit" onClick={() => this.props.handleSearch(this.state.searchTerm)}>Search</Button>
         <br></br>
         <br></br>
     </Form>
      )
    }


}

export default Search
