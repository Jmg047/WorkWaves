import React, { useState } from 'react'
import SearchBar from '../ui/SearchBar'

export default function NavBar () {
  const [searchType, setSearchType] = useState('')

  const handleSearch = (type) => {
    if (type === 'find a job') {
      setSearchType('')
    } else if (type === 'find a worker') {
      setSearchType('worker')
    }
  }

  return (
    <nav className='nav'>
      <a href='/' className='site-title'>
        Work Waves
      </a>
      <ul>
        <li className='active'>
          <button onClick={() => handleSearch('find a job')}>Find a job</button>
        </li>
        <li>
          <button onClick={() => handleSearch('find a worker')}>Find a worker</button>
        </li>
        <li className='searchbar-container'>
          <SearchBar onSearch={searchType} />
        </li>
      </ul>
    </nav>
  )
}

// class NavBar extends React.Component {
//   constructor (props) {
//     super(props)
//     this.state = {
//       query: '' // Initialize the query state
//     }
//   }

//   handleSearch = (query) => {
//     this.setState({ query })
//   }

//   render () {
//     const { query } = this.state

//     return (
//       <div className='navbar-container'>
//         <div className='navbar'>
//         <ul>
//           <li><h1>Work Waves</h1></li>
//           <li><button type='button' onClick={() => this.handleSearch('job')}>
//           find a job
//         </button></li>
//           <li><button type='button' onClick={() => this.handleSearch('worker')}>
//           find a worker
//         </button></li>
//           <li><SearchBar onSearch={this.handleSearch} className="SearchBar"/></li>
//         </ul>
//         {/* Use the Homepage component to display gig or worker data based on the query */}
//         {/* <Homepage query={query} /> */}
//       </div>
//       </div>
//     )
//   }
// }

// export default NavBar
