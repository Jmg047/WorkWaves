import React from 'react'
import AppCSS from './App.module.css'

// * COMPONENTS IMPORTS
import NavBar from './component/ui/NavBar'
import Home from './pages/Home/Home'

const App = () => {
  // const [query, setQuery] = useState('gigs') // Initialize query state with 'gigs'

  // const handleSearch = (newQuery) => {
  //   setQuery(newQuery) // Set the query when a button is clicked
  // }

  // const App = () => {
  //   const handleSearch = (query) => {
  //     console.log(Searching for: ${query})
  //   }

  return (
    <div className={AppCSS.App}>
      <NavBar />
      <div className={AppCSS.container}>
        <div><Home /></div>
        {/* <div className={AppCSS.itemOne}><CategorySideBar /></div>
        <div className={AppCSS.itemTwo}><Feed /></div>
        <div className={AppCSS.itemThree}>Yessir</div> */}
      </div>
    </div>
  )
}

export default App
