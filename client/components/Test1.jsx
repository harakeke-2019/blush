import React from 'react'
import {getFeels} from '../api'

class Test1 extends React.Component {
  constructor () {
    super()
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    getFeels().then(res => {
      this.setState(
        {data: res}
      )
    })
  }

  render () {
    return (
      <React.Fragment>
        <h2>{console.log(this.state.data)}</h2>
  
      </React.Fragment>
    )
  }
}

export default Test1
