import React, { Component } from 'react'
import Book from './Book'

class Shelf extends React.Component {
  render() {
    return (
			<div className="bookshelf">
				<h2 className="bookshelf-title">Currently Reading</h2>
				<div className="bookshelf-books">
					<ol className="books-grid">
						<Book />
						<Book />
					</ol>
				</div>
			</div>
		);
  }
}

export default Shelf