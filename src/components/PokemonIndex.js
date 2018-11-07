import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

const URL = 'http://localhost:3000/pokemon'
class PokemonPage extends React.Component {
  state = {
    pokemons: [],
    search: ''
  }

  componentDidMount() {
    this.fetchGetPokemons()
  }

  fetchGetPokemons = () => {
    fetch(URL)
    .then(response => response.json())
    .then(data => {
      // console.log(data)
      this.setState({pokemons: data})
    })
  }

  handleSearchChange = (event, {value}) => {
    this.setState({search: value})
    console.log(this.state)
  }

  filteredPokemon = () => {
    return this.state.pokemons.filter((pokemon) => {
      return pokemon.name.includes(this.state.search)
    })
  }

  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm />
        <br />
        <Search onSearchChange={this.handleSearchChange} showNoResults={false} />
        <br />
        <PokemonCollection pokemons={this.filteredPokemon()}/>
      </div>
    )
  }
}

export default PokemonPage
