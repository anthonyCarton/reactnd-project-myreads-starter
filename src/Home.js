import React, { Component } from 'react'
import { getAll } from './BooksAPI'
import * as BooksAPI from './BooksAPI'

import Shelf from './Shelf'
import OpenSearch from './OpenSearch'


class Home extends React.Component {
	async componentDidMount() {
		try {
			const books = await getAll();
			this.props.addBooks(books);
		} catch (error) {
			console.log(error);
		}
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
						<Shelf title="Currently Reading" books={this.props.currentlyReading} moveBook={this.props.moveBook}/>

						{/* Want to Read Shelf*/}
						<Shelf title="Want to Read" books={this.props.wantToRead} moveBook={this.props.moveBook}/>

						{/* Read Shelf */}
						<Shelf title="Read" books={this.props.read} moveBook={this.props.moveBook}/>
					</div>

					{/* Open Search Button*/}
					<OpenSearch />
				</div>
			</div>
		)
	}
}

export default Home
