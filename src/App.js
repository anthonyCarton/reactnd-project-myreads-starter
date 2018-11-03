import React from 'react'
// import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'
import './App.css'
import Home from './Home'
import Search from './Search'

class BooksApp extends React.Component {
	state = {
		books: [
			{
				"authors": [0: "William E. Shotts, Jr."],
				"imageLinks": ['thumbnail': "http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"],
				"shelf": "currentlyReading",
				"title": "The Linux Command Line"
			},
			{
				"authors": [0: "William E. Shotts, Jr."],
				"imageLinks": ['thumbnail': "http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"],
				"shelf": "wantToRead",
				"title": "The Linux Command Line"
			},
			{
				"authors": [0: "William E. Shotts, Jr."],
				"imageLinks": ['thumbnail': "http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"],
				"shelf": "read",
				"title": "The Linux Command Line"
			}
		]
	}
	
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
