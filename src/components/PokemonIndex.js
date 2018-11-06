// create an index displaying pokemon 'cards'
// render each pokemon name, picture, and hp in a card
// when clicked, the card should toggle between displaying the front and back pictures
// allow users to search in order to narrow down the cards shown on the page
// wire up the form to add a missing pokemon (bulbasaur is missing, and you can probably intuit the image links to use based on the data you have). Since there aren't any validations, you may have to manually remove additions from the db.json file if you make a mistake on a post request, etc. When a new pokemon is added, it should show on the page without having to refresh.
// BONUS: implement some way to sort or filter pokemon in addition to the name search

import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {
  constructor() {
    super()
    this.state = {
      pokemon: [],
      filteredPokemon: []
    }
  }

  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />

        <Search
          onSearchChange={_.debounce(this.handleSearch, 500)}
          showNoResults={false}
          id='search'
        />

        <br />

        <PokemonCollection
          pokemon={this.state.filteredPokemon}
        />

        <br />

        <PokemonForm
          postPokemon={this.postPokemon}
        />
      </div>
    )
  }

  componentDidMount() {
    this.fetchPokemon()
  }

//////////////////////

  fetchPokemon = () => {
    fetch('http://localhost:3000/pokemon')
    .then(r => r.json())
    .then(r => {
      this.setState({
        pokemon: r,
        filteredPokemon: r
      })
    })
  }

  handleSearch = (e) => {
    const value = document.querySelector('#search').value
    const filteredPokemon = this.state.pokemon.filter(p => p.name.includes(value))
    this.setState({
      filteredPokemon: filteredPokemon
    })
  }

  postPokemon = (name, hp, front, back) => {
    fetch('http://localhost:3000/pokemon', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        stats: [
          {
            value: hp,
            name: 'hp'
          }
        ],
        sprites: {
          front: front,
          back: back
        }
      })
    })
    .then(() => this.fetchPokemon())
  }
}


export default PokemonPage
