// import React from 'react'
// import './App.css'

// export default function App(){
  
//   return(
//     <div>
//       <h1> The Most Amazing Movie List</h1>
//     </div>
//   )
// }

// import React, {Component} from 'react'
// import './App.css'
// import List from './List'
// export default class App extends Component {
//   constructor(props){
//     super()
//   }

//   render(){
//     return(
//       <div className='App'>
//         <h1 className='movie-list-title'>The Most Amazing Movie List</h1>
//         <List />
//       </div>
//     )
//   }

// }

import React from 'react'
import './App.css'
import List from './List'

export default function App(){

  return(
    <div className='App'>
      <h1 className='movie-list-title'>The Most Amazing Movie List</h1>
      <List/>
    </div>
  )
}