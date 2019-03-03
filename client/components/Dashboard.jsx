import React from 'react'
import Request from 'superagent'

class Dashboard extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      movies: []
    }
  }

  componentDidMount () {
    const movieUrl = 'https://api.themoviedb.org/3/search/movie?api_key=81009ccb87e4c64254d9e74c695d113a&query=st'
    Request.get(movieUrl).then(res => {
      this.setState(
        {movies: res.body.results}
      )
    })
  }

  getMovieTitles = () => {
    return this.state.movies.map((movie, index) => {
      return ( 
      <li key={index}>
          {movie.title}
      </li>)
       }) 
  }

  render () {
    console.log(this.state.movies)
    return (

      <div className="pageWrapperDashboard">
        <h1>Movies starting with ST</h1>
        <ul>
        {this.getMovieTitles()}
        </ul>
      </div>

    )
  }
}

export default Dashboard
