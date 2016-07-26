import React, { Component } from 'react'
import RestaurantMenu from './RestaurantMenu'

class App extends Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        <h1>Welcome to {this.props.name}</h1>
        <RestaurantMenu/>
      </div>
    )
  }

}

export default App
