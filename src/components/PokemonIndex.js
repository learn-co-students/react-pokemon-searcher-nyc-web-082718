import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {
  state = {
    pokemonList: [],
    searchTerm: ''

  }

  fetchPokemon = () => {
    fetch("http://localhost:3000/pokemon")
    .then(response => response.json())
    .then(json => {this.setState({
      pokemonList: json
    })})
  }

  filterPokemon = () => {
    if (this.state.searchTerm === '') {
      this.fetchPokemon()
    } else {
      fetch("http://localhost:3000/pokemon")
      .then(response => response.json())
      .then(json => this.setState({
        pokemonList: json.filter(
          pokemon => pokemon.name.includes(this.state.searchTerm)
        )
      }))
    }
  }

  componentDidMount(){
    this.fetchPokemon()
  }

  searchHandler = (event) => {
    this.setState({
      searchTerm: event.target.value
    })

    this.filterPokemon()
  }

  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={(event) => this.searchHandler(event)} showNoResults={false} />
        <br />
        <PokemonCollection pokemonList={this.state.pokemonList}/>
        <br />
        <PokemonForm fetchPokemon={this.fetchPokemon}/>
      </div>
    )
  }
}

export default PokemonPage
