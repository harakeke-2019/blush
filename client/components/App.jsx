import React from 'react'
<<<<<<< HEAD
import {HashRouter as Router, Route} from 'react-router-dom'

import Home from './Home'
import Dashboard from  './Dashboard'
||||||| merged common ancestors
=======
import {getPokemons} from '../api'
import Pokemons from './Pokemons'
>>>>>>> a7dcec3ee35d4f43cab97d530065f2b36602cfbe

<<<<<<< HEAD
const App = () => {
  return (
    <Router>
      <div className = 'app'>
        <div className = 'routesContainer'>
          <Route exact path = '/' component = {Home} />
          <Route exact path = '/Dashboard' component = {Dashboard} />
        </div>
      </div>
    </Router>
  )
}
||||||| merged common ancestors
const App = () => {
  return (
    <h1>React development has begun!</h1>
  )
}
=======
class App extends React.Component {
  constructor () {
    super()
    this.state = {
      pokemon: {}
    }
  }
>>>>>>> a7dcec3ee35d4f43cab97d530065f2b36602cfbe

<<<<<<< HEAD
export default App
||||||| merged common ancestors
export default App

=======
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
      </div>
    )
  }
}
export default App
>>>>>>> a7dcec3ee35d4f43cab97d530065f2b36602cfbe
