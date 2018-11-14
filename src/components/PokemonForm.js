import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    fetch("http://localhost:3000/pokemon", {
      method: "POST",
      headers: {
        'Content-Type': 'Application/json',
        Accept: "application/json"
      },
      body: JSON.stringify(
        {
            name: this.state.name,
            stats: [
              {
                name: "hp",
                value: this.state.hp
              }
            ],
            sprites:
              {
                front: this.state.frontUrl,
                back: this.state.backUrl
              }
        }
      )
    })
    .then(response => response.json()).then(json => this.props.fetchPokemon())
  }

  nameChange = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  hpChange = (event) => {
    this.setState({
      hp: event.target.value
    })
  }

  frontUrlChange = (event) => {
    this.setState({
      frontUrl: event.target.value
    })
  }

  backUrlChange = (event) => {
    this.setState({
      backUrl: event.target.value
    })
  }


  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={event => this.nameChange(event)}/>
            <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={event => this.hpChange(event)}/>
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" onChange={event => this.frontUrlChange(event)}/>
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" onChange={event => this.backUrlChange(event)}/>
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
