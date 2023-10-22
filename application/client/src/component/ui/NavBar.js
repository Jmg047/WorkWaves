import React from 'react'
import SearchBar from './SearchBar'
// import Homepage from '../../Homepage/SearchBar';
// import SearchBar from './ui/SearchBar';
// import Homepage from 'component/pages/Homepage/SearchBar';

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

        {/* Use the Homepage component to display gig or worker data based on the query */}
        {/* <Homepage query={query} /> */}
      </div>
    )
  }
}

export default NavBar
