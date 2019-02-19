import React from 'react'
import {getPokemons} from '../api'
import Pokemons from './Pokemons'
import {Link} from 'react-router-dom'

class Dashboard extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      pokemon: {},
    }
  }
  componentDidMount () {
    const id = Math.floor(Math.random() * 50 + 1)
    getPokemons(id)
      .then(pokemon => {
        this.setState({pokemon: pokemon})
      })
      .catch(err => { console.error('error:', err) })
  }

  render () {
    return (

      <div className="pageWrapperDashboard">
        <div>
          <div className="smlogo">
            <img src="pokemon-logo.png" alt="pokemon" />
          </div>
        </div>
        <main>
          <div className="row">
            <div className="col1">
              <div className="userInfo">
                <p>Hello Evandah</p>
                <div className="starSignBirthday">
                  <p>Your starsign is: Aquarius</p>
                  <h6>09/02/1996</h6>
                </div>
              </div>
              <p className="intro">Discover what your Pokemon is based on your starsign</p>
              <div className="dashboardbuttons">
                <div className="button">
                  <p><Link to='/'> back</Link></p>
                </div>

              </div>
            </div>
            <div className="col2">
              <div className="stateChange">
                <div className="api">
                  <Pokemons pokemon={this.state.pokemon} />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

    )
  }
}

export default Dashboard
