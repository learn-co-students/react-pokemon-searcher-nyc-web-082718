import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  displayCards = () => {
    return this.props.pokemon.map(p => {
      return <PokemonCard pokemon={p} key={p.id} />
    })
  }

  render() {
    return (
      <Card.Group itemsPerRow={6}>
        {this.displayCards()}
      </Card.Group>
    )
  }
}

export default PokemonCollection
