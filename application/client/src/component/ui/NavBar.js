import React from 'react'
import SearchBar from '../ui/SearchBar'
// TODO : ? use REACT ROUTER to handle the route of my link/button
// import Homepage from '../../Homepage/SearchBar';
// import SearchBar from './ui/SearchBar';
// import Homepage from 'component/pages/Homepage/SearchBar'

// handleSearch = (query) => {
//   this.setState({ query })
// }

export default function NavBar () {
  return (
  <nav className='nav'>
    <a href='/' className='site-title'>
      Work Waves
      </a>
    <ul>
      <li className='active'>
        <a href='/find a job'>Find a job</a>
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