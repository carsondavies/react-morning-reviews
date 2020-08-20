import React from 'react'
import movies from './data/movies.json'
import ListItem from './components/ListItem'
import Form from './components/Form'

class List extends React.Component {
  constructor() {
    super()

    this.state = {
      movies: movies
    }
  }

  render() {
    const movieDisplay = this.state.movies.map((movie, index) => {
      console.log(movie)
      return <ListItem key={index} movie={movie} />
    })
    return (
      <div className='List'>
        <Form />
        {movieDisplay}
      </div>
    )
  }

}

export default List