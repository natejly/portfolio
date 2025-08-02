import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import './App.css'

import Home from './pages/Home'
import P1 from './pages/p1'
import P2 from './pages/P2'

function ScrollRouter() {
  const location = useLocation()

  const homeRef = useRef(Home)
  const p1Ref = useRef(P1)
  const p2Ref = useRef(P2)

  useEffect(() => {
    const path = location.pathname

    const scrollTo = (ref) => {
      ref?.current?.scrollIntoView({ behavior: 'smooth' })
    }

    switch (path) {
      case '/':
        scrollTo(homeRef)
        break
      case '/projects':
        scrollTo(p1Ref)
        break
      case '/contact':
        scrollTo(p2Ref)
        break
      default:
        break
    }
  }, [location])

  return (
    <div>
      <nav className="navbar">
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/projects">Projects</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>

      <div ref={homeRef}><Home /></div>
      <div ref={p1Ref}><P1 /></div>
      <div ref={p2Ref}><P2 /></div>

      <footer className="footer">
        <p>© 2025 John Doe. All rights reserved.</p>
      </footer>
    </div>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<ScrollRouter />} />
      </Routes>
    </Router>
  )
}

export default App
