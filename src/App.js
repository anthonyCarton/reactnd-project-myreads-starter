import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'
import './App.css'
import Provider, { AppContext } from './Provider'
import Home from './Home'
import Search from './Search'

class BooksApp extends React.Component {
  render() {
    return (
			<div className="app">
				<Provider>
		        <Route
							exact
							path='/'
							render={() => (
								<AppContext.Consumer>
									{context => <Home {...context} />}
								</AppContext.Consumer>
		        )} />
		        <Route
							exact
							path='/search'
							render={() => (
								<AppContext.Consumer>
									{context => <Search {...context} />}
								</AppContext.Consumer>
		        )}/>
				</Provider>
			</div>
    )
  }
}

export default BooksApp
