import React, { Component } from 'react'

export default class Images extends Component {
  render() {
    return (
      <div>
        <img src={this.props.src} alt={this.props.alt} />
      </div>
    )
  }
}
