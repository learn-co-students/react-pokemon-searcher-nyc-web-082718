import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  state = {
    clicked: false
  }

  handleClick = () => {
    this.setState({clicked: !this.state.clicked})
    // console.log(this.state)
  }

  render() {
    return (
      <Card onClick={this.handleClick}>
        <div>
          <div className="image">
            {this.state.clicked ? <img alt="oh no!" src={this.props.pokemon.sprites.back}/> : <img alt="oh no!" src={this.props.pokemon.sprites.front}/>}
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemon.stats.find(stats => stats.name === 'hp').value} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard

// on click = if state is false = image should be front, else image should be back
