import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

  generatePokemonCards = () => {
    return this.props.pokemonList.map(
      pokemonCardObj => <PokemonCard key={pokemonCardObj.id}
      pokemon={pokemonCardObj}/>
    )
  }

  render() {
    return (
      <Card.Group itemsPerRow={6}>
        {this.generatePokemonCards()}
      </Card.Group>
    )
  }
}

export default PokemonCollection
