import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

// * CSS IMPORTS
// import './component/ui/App.css'
import './component/ui/Navbar.css'
// import './component/ui/CategorySideBar.css'
// import './component/ui/Feed.css'

const domNode = document.getElementById('root')
const root = createRoot(domNode)
root.render(
    <React.StrictMode>
        <BrowserRouter>
        <App />
        </BrowserRouter>
    </React.StrictMode>
)
