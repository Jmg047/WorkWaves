import React from 'react'
import SearchBar from './SearchBar'
import GigList from '../pages/Homepage/Homepage.js'

class NavBar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      query: '' // Initialize the query state
    }
  }

  handleSearch = (query) => {
    this.setState({ query })
  }

  render () {
    const { query } = this.state

    return (
      <div>
        <h1>Work Waves</h1>
        <button type='button' onClick={() => this.handleSearch('job')}>
          find a job
        </button>
        <button type='button' onClick={() => this.handleSearch('worker')}>
          find a worker
        </button>
        <SearchBar onSearch={this.handleSearch} />

        {/* Use the GigList component to display gig or worker data based on the query */}
        <GigList query={query} />
      </div>
    )
  }
}

export default NavBar
