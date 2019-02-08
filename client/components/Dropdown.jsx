import React from 'react'
import FontAwesome from 'react-fontawesome'
import {getFeels} from '../api'

class Dropdown extends React.Component {
  constructor (props) {
    super()
    this.state = {
      listOpen: false,
      headerTitle: 'Pick a Feels',
      feelings: [
        {
          id: 1,
          feeling: 'shy'
        },
        {
          id: 2,
          feeling: 'lonely'
        },
        {
          id: 3,
          feeling: 'frustrated'
        },
        {
          id: 4,
          feeling: 'bored'
        },
        {
          id: 5,
          feeling: 'anxious'
        },
        {
          id: 6,
          feeling: 'grateful'
        },
        {
          id: 7,
          feeling: 'vocally vegan'
        },
        {
          id: 8,
          feeling: 'ambitious'
        },
        {
          id: 9,
          feeling: 'flirty'
        },
        {
          id: 10,
          feeling: 'zen AF'
        },
        {
          id: 11,
          feeling: 'average'
        },
        {
          id: 12,
          feeling: 'intelligent'
        },
        {
          id: 13,
          feeling: 'bogan'
        },
        {
          id: 14,
          feeling: 'positive'
        },
        {
          id: 15,
          feeling: 'funny'
        },
        {
          id: 16,
          feeling: 'groovy baby'
        },
        {
          id: 17,
          feeling: 'casual'
        },
        {
          id: 18,
          feeling: 'carnivorous'
        },
        {
          id: 19,
          feeling: 'faaaabulous, honey!'
        },
        {
          id: 20,
          feeling: 'afraid of commitment'
        }

      ]
    }
  }

  componentDidMount () {
    getFeels().then(res => {
      this.setState(
        {data: res}
      )
    })
  }

  toggleList () {
    this.setState(prevState => ({
      listOpen: !prevState.listOpen
    }))
  }

  render () {
    const feeling = this.state.feelings
    const {listOpen, headerTitle} = this.state
    console.log('feeling', this.state.feelings)
    return (
      <React.Fragment>
        <div className="dd-wrapper">
          <div className="dd-header" onClick={() => this.toggleList()}>
            <div className="dd-header-title">{headerTitle}</div>
            {listOpen
              ? <FontAwesome name="angle-up" size="2x"/>
              : <FontAwesome name="angle-down" size="2x"/>}
          </div>
          {listOpen &&
          <ul className="dd-list">
            {feeling.map((item) => (
              <li className="dd-list-item" key={item.id}>{item.feeling}</li>
            ))}
          </ul>}
        </div>
      </React.Fragment>
    )
  }
}

export default Dropdown
