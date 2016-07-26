import React, { Component } from 'react'

export default class MenuItem extends Component {
  render () {
    return (
      <div>
        <p>{this.props.name} <span>{this.props.price}</span></p>
        <img src={this.props.imageUrl} alt={"Image of " + this.props.name} />
        <p>{this.props.description}</p>
      </div>
    )
  }

} 