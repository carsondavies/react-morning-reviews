import React from 'react'

class List extends React.Component{
  constructor(){
    super()
    
    this.state = {
      movies: []
    }
  }

  render(){
    return(
      <div>I am the list Component</div>
    )
  }

}

export default List