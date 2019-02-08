import React from 'react'

import {HashRouter as Router, Route} from 'react-router-dom'

import Home from './Home'
import Dashboard from './Dashboard'

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

export default App
