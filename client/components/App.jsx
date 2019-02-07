import React from 'react'
import {getPokemons} from '../api'
import Pokemons from './Pokemons'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      pokemons: [],
      showPokemons: false
    }
  }

  componentDidMount () {
    getPokemons()
      .then(pokemons => {
        this.setState({pokemons: pokemons})
      .catch(err => { console.error('error:', err) })
  }
  render () {
    return (
      <div>
        <Pokemons pokemons={this.state.pokemons}/>
      </div>
    )
  }
}
export default App
