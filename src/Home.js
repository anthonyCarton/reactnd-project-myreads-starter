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
						<Shelf title="Currently Reading"/>

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
