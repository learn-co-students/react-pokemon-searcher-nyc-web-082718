import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  render() {
    const health = this.props.pokemon.stats.find(stat => stat.name === 'hp')
    // debugger
    return (
      <Card>
        <div>
          <div className="image">
            <img onClick={event => this.props.changePokemonSprite(this.props.pokemon.id)} src={this.props.pokemon.front ? this.props.pokemon.sprites.front : this.props.pokemon.sprites.back} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {health.value} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
