import React, { Component } from 'react'

class Book extends React.Component {
  render() {
    return (<div>Hello, {this.props.name}</div>);
  }
}

export default Book
