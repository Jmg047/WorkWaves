import React from 'react'
import { Link } from 'react-router-dom'
// TODO: add more routes when the redirection pages are created
// TODO: routes for find a worker

// * COMPONENTS IMPORT
import SearchBar from '../ui/SearchBar'

export default function NavBar () {
  return (
  <nav className='nav'>
    <Link to='/' className='site-title'>
      Work Waves
      </Link>
    <ul>
      <li className='active'>
        <Link href='/'>Find a job</Link>
      </li>
      <li>
        <a href='/find a worker'>Find a worker</a>
      </li>
     <li className='searchbar-container'>
     <SearchBar />
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
