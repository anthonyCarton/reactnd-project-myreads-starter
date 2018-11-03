import React from 'react'
// import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'
import './App.css'
import Home from './Home'
import Search from './Search'

class BooksApp extends React.Component {
  render() {
    return (
			<div className="app">
        <Route exact path='/' render={() => (
          <Home />
        )}/>
        <Route exact path='/search' render={({ history }) => (
          <Search />
        )}/>
			</div>
    )
  }
}

export default BooksApp
