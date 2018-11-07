import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    }
  }

  handleChangeName = (event) => {
    this.setState({name: event.target.value})
  }

  handleChangeHp = (event) => {
    this.setState({hp: event.target.value})
  }

  handleChangeFrontUrl = (event) => {
    this.setState({frontUrl: event.target.value})
  }

  handleChangeBackUrl = (event) => {
    this.setState({backUrl: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({name: '', hp: '', frontUrl: '', backUrl: ''})
    console.log(this.state)
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" value={this.state.name} onChange={this.handleChangeName} />
            <Form.Input fluid label="hp" placeholder="hp" name="hp" value={this.state.hp} onChange={this.handleChangeHp} />
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" value={this.state.frontUrl} onChange={this.handleChangeFrontUrl}/>
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" value={this.state.backUrl} onChange={this.handleChangeBackUrl}/>
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
