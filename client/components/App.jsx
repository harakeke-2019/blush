import React from 'react'
import {getPokemons} from '../api'
import Pokemons from './Pokemons'
import Test3 from './Test3'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      pokemon: {}
    }
  }

  componentDidMount () {
    const id = Math.floor(Math.random() * 19 + 1)
    getPokemons(id)
      .then(pokemon => {
        this.setState({pokemon: pokemon})
      })
      .catch(err => { console.error('error:', err) })
  }

  render () {
    return (
      <div>
        <Pokemons pokemon={this.state.pokemon} />
        <Test3 />
      </div>
    )
  }
}
export default App
