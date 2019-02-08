import React from 'react'
import {Link} from 'react-router-dom'
// import Dropdown from './Dropdown'

class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  render () {
    return (
      <div className="pageWrapper">
        <div className="logoWrapper">
          <img src="pokemon-logo.png" alt="Logo" />
          <h3>Find your spirit-pokemon</h3>
        </div>
        <div className="buttonWrapper">
          <form>
            <input type="text" placeholder="  Full Name" /><br />
            <input type="text" placeholder="  Birthday" /><br />
            {/* <Dropdown /> */}
            <div className="enter">
              <Link to='/dashboard'> enter</Link>
            </div>
          </form>

        </div>

      </div>

    )
  }
}

export default Home
