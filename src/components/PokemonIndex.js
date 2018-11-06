import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {
  state = {
    pokemon: [],
    searchTerm: ''
  }

  componentDidMount() {
    fetch('http://localhost:3000/pokemon')
    .then(response => response.json())
    .then(pokemonData => {
      // debugger
      const pokemon = pokemonData.map(apiData => {
        return Object.assign({}, apiData, {front: true})
      })
      console.log(pokemon)
      this.setState({pokemon})
    })
  }

  createNewPokemon = (name, hp, frontImg, backImg) => {
    fetch('http://localhost:3000/pokemon', {
      'method': 'POST',
      'headers': {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      'body': JSON.stringify({
        'name': name,
        'stats': [{
          'name': 'hp',
          'value': parseInt(hp)
        }],
        'sprites':{
          'front': frontImg,
          'back': backImg
        }
      })
    })
    .then(response => response.json())
    .then(parsed => {
      console.log(parsed)
      this.setState({
        pokemon: [parsed,...this.state.pokemon]
      })
    })
  }

  changePokemonSprite = (pokemonId) => {
    const updatedPokemon = this.state.pokemon.map(pokemonObj => {
      if (pokemonObj.id === pokemonId) {
        if (pokemonObj.front){
          pokemonObj.front = false
        } else {
          pokemonObj.front = true
        }
      }
      return pokemonObj
    })
    this.setState({
      pokemon: updatedPokemon
    })
  }

  handleChange = (e) => {
    // debugger
    console.log(e.target.value)
    this.setState({
      searchTerm: e.target.value.trim().toLowerCase()
    })
  }

  filteredPokemon = () => {
    return this.state.pokemon.filter(pokemonObj => pokemonObj.name.toLowerCase().includes(this.state.searchTerm))
  }

  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={this.handleChange} showNoResults={false} />
        <br />
        <PokemonCollection changePokemonSprite={this.changePokemonSprite} pokemon={this.filteredPokemon()} />
        <br />
        <PokemonForm createNewPokemon={this.createNewPokemon} pokemon={this.state.pokemon}/>
      </div>
    )
  }
}

export default PokemonPage
