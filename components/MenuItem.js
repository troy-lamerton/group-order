import React, { Component } from 'react'

export default class MenuItem extends Component {
  render () {
    return (
      <div>
        <h2>Restaurant menu</h2>
        {this.props.children}
      </div>
    )
  }
  
} 