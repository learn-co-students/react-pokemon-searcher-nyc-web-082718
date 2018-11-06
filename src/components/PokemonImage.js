import React from 'react'

class PokemonImage extends React.Component {
  handleClick = (e) => {
    const pokemon = this.props.pokemon
    if (e.target.src === pokemon.sprites.front) {
      e.target.src = pokemon.sprites.back
    }
    else {
      e.target.src = pokemon.sprites.front
    }
  }

  render() {
    const pokemon = this.props.pokemon
    return (
      <img
        alt="oh no!"
        src={pokemon.sprites.front}
        onClick={this.handleClick}
      />
    )
  }
}

export default PokemonImage
