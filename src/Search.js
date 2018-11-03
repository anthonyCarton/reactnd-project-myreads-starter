import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { search } from './BooksAPI'
import Book from './Book'


class Search extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			query: "",
			books: []
		}
	}
	handleChange = async element => {
		try {
			const query = element.target.value;
			this.setState({query});

			if (query.trim()) {
				const results = await search(query);
				if (results.error) {
					this.setState({books: []});
				} else {
					this.setState({books: results});
				}
			} else {
				this.setState({books: []})
			}
		} catch (error) {
			console.log(error);
		}
	}
  render() {
    return (
			<div className="search-books">
				<div className="search-books-bar">

					<Link
						to="/"
						className="close-search"
					>Close</Link>

					<div className="search-books-input-wrapper">
						<input type="text"
							placeholder="Search by title or author"
							onChange={this.handleChange}
							value={this.state.query}
						/>
					</div>
				</div>
				<div className="search-books-results">
					<ol className="books-grid">
						{this.state.books.length > 0 &&
							this.state.books.map(book => (
								<Book key={book.id} {...book} moveBook={this.props.moveBook} />
						))}
					</ol>
				</div>
			</div>
		)
	}
}

export default Search
