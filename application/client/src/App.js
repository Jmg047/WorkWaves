import React from 'react'
// TODO : ? use REACT ROUTER to handle the route of my link/button
import AppCSS from './component/ui/App.module.css'

// * IMPORT EVERY COMPONENTS HERE
import NavBar from './component/ui/NavBar' // no error
import CategorySideBar from './component/ui/CategorySideBar'
import Feed from './component/ui/Feed'

const App = () => {
  // const [query, setQuery] = useState('gigs') // Initialize query state with 'gigs'

  // const handleSearch = (newQuery) => {
  //   setQuery(newQuery) // Set the query when a button is clicked
  // }

  // const App = () => {
  //   const handleSearch = (query) => {
  //     console.log(Searching for: ${query})
  //   }

  // TODO: make a third empty container after Feed
  // TODO: apply CSS flexbox to position them properly as UI
  return (
    <div className={AppCSS.App}>
      <NavBar />
      <div className={AppCSS.container}>
        <div className={AppCSS.itemOne}><CategorySideBar /></div>
        <div className={AppCSS.itemTwo}><Feed /></div>
        <div className={AppCSS.itemThree}>Yessir</div>
      </div>
    </div>
  )
}

export default App
