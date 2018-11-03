import React, { Component } from 'react'
export const AppContext = React.createContext();

class Provider extends React.Component {
	constructor() {
		super();
		this.state = {
			books: [],
			currentlyReading: [],
			wantToRead: [],
			read: [],
			addBooks: books => {
				const currentlyReading = books.filter(book => book.shelf === "currentlyReading");
				const wantToRead = books.filter(book => book.shelf === "wantToRead");
				const read = books.filter(book => book.shelf === "read");
				this.setState({ books, currentlyReading, wantToRead, read })
			},
			moveBook: (book, shelf, newShelf) => {}
		}
	}
  render() {
		return (
			<AppContext.Provider value={{...this.state}}>
				{this.props.children}
			</AppContext.Provider>
		);
  }
}

export default Provider
