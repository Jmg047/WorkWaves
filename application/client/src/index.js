import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

// * IMPORT EVERY STYLE.CSS HERE
import './component/ui/Navbar.css'

const domNode = document.getElementById('root')
const root = createRoot(domNode)
root.render(<App />)
