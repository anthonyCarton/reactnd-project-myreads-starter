import React, { Component } from 'react'
import { getAll } from './BooksAPI'
import * as BooksAPI from './BooksAPI'

import Shelf from './Shelf'
import OpenSearch from './OpenSearch'

class Home extends React.Component {
	componentDidMount() {
		BooksAPI.getAll().then(
			(books) => {
				const BOOKS = getAll()
				this.setState({ books })
				console.log(BOOKS)
		}).catch(
			error => {console.log(error)}
		);
	}
  render() {
    return (
			<div className="list-books">
				<div className="list-books-title">
					<h1>MyReads</h1>
				</div>
				<div className="list-books-content">
					<div>
						{/* Currently Reading Shelf */}
						<Shelf
							title="Currently Reading"
							/>

						{/* Want to Read Shelf*/}
						<Shelf title="Want to Read"/>

						{/* Read Shelf */}
						<Shelf title="Read"/>
					</div>

					{/* Open Search Button*/}
					<OpenSearch />
				</div>
			</div>
		)
	}
}

export default Home
