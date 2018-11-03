import React, { Component } from 'react'
import Shelf from './Shelf'
import OpenSearch from './OpenSearch'

class Home extends React.Component {
  render() {
    return (
			<div className="list-books">
				<div className="list-books-title">
					<h1>MyReads</h1>
				</div>
				<div className="list-books-content">
					<div>
						{/* Currently Reading Shelf */}
						<Shelf />

						{/* Want to Read Shelf*/}
						<Shelf />

						{/* Read Shelf */}
						<Shelf />
					</div>

					{/* Open Search Button*/}
					<OpenSearch />

				</div>
		)
	}
}

export default Home
