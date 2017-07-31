import React, { Component } from 'react'
import { Button, Form } from 'semantic-ui-react'
import { Redirect } from 'react-router-dom'


class LoginForm extends Component {

  constructor () {
    super()
    this.state = {
      username: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit (e) {
    e.preventDefault()
    this.props.onSendLogin(this.state)
    this.setState({username: '', password: ''})
  }

  render () {
    return (
      <div>
        {this.props.isLoggedIn() ?
          <Redirect to='/listings'/> :
          <Form onSubmit={this.handleSubmit}>
            <Form.Field>
              <label>Username</label>
              <input name='username' placeholder='Username' onChange={this.handleChange} />
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <input type='password' name='password' placeholder='Password' onChange={this.handleChange} />
            </Form.Field>
            <Button type='submit'>Log In</Button>
          </Form>
        }
      </div>
    )
  }
}

export default LoginForm
