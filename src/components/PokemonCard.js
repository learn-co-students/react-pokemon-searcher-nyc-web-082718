import React from 'react'
import PokemonImage from './PokemonImage'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  render() {
    const pokemon = this.props.pokemon
    const hpObj = pokemon.stats.find(stat => {
      return stat.name === 'hp'
    })
    return (
      <Card>
        <div>
          <div className="image">
            <PokemonImage
              pokemon={pokemon}
            />
          </div>
          <div className="content">
            <div className="header">{pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {hpObj.value}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
