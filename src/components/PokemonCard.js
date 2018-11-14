import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  state = {
    clicked: false
  }

  clickCard = () => {
    this.setState({
      clicked: !this.state.clicked
    })
    console.log(this.state.clicked)
  }

  render() {
    if (!this.state.clicked) {
      return (
        <Card onClick={this.clickCard}>
          <div>
            <div className="image">
              <img src={this.props.pokemon.sprites.front} />
            </div>
            <div className="content">
              <div className="header">{this.props.pokemon.name}</div>
            </div>
            <div className="extra content">
              <span>
                <i className="icon heartbeat red" />
                {this.props.pokemon.stats.find(stat =>
                  stat.name === "hp"
                ).value}
              </span>
            </div>
          </div>
        </Card>
      )
    } else {
      return (
        <Card onClick={this.clickCard}>
          <div>
            <div className="image">
              <img src={this.props.pokemon.sprites.back} />
            </div>
            <div className="content">
              <div className="header">{this.props.pokemon.name}</div>
            </div>
            <div className="extra content">
              <span>
                <i className="icon heartbeat red" />
                {this.props.pokemon.stats.find(stat =>
                  stat.name === "hp"
                ).value}
              </span>
            </div>
          </div>
        </Card>
      )
    }


  }
}

export default PokemonCard
