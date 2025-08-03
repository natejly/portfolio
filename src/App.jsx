import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import './App.css'
import { SocialIcon } from 'react-social-icons'
import Home from './pages/About'
import P1 from './pages/Projects'
import P2 from './pages/Personal'

function ScrollRouter() {
  const location = useLocation()
  const [activeSection, setActiveSection] = useState('/')

  const homeRef = useRef(null)
  const p1Ref = useRef(null)
  const p2Ref = useRef(null)

  // Social icon size variable
  const socialIconSize = { height: 36, width: 36 }

  // Handle URL navigation
  useEffect(() => {
    const path = location.pathname

    const scrollTo = (ref) => {
      ref?.current?.scrollIntoView({ behavior: 'smooth' })
    }

    switch (path) {
      case '/':
        scrollTo(homeRef)
        setActiveSection('/')
        break
      case '/projects':
        scrollTo(p1Ref)
        setActiveSection('/projects')
        break
      case '/contact':
        scrollTo(p2Ref)
        setActiveSection('/contact')
        break
      default:
        break
    }
  }, [location])

  // Handle scroll-based navigation detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3

      const aboutElement = document.getElementById('about')
      const projectsElement = document.getElementById('projects')
      const contactElement = document.getElementById('contact')

      if (aboutElement && projectsElement && contactElement) {
        const aboutTop = aboutElement.offsetTop
        const projectsTop = projectsElement.offsetTop
        const contactTop = contactElement.offsetTop

        if (scrollPosition >= contactTop) {
          setActiveSection('/contact')
          window.history.replaceState({}, '', '#contact')
        } else if (scrollPosition >= projectsTop) {
          setActiveSection('/projects')
          window.history.replaceState({}, '', '#projects')
        } else {
          setActiveSection('/')
          window.history.replaceState({}, '', '#about')
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    // Initial check
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="flex min-h-screen lg:flex-col">
      {/* Left Sidebar - Hidden on small screens */}
      <div className="fixed left-[15vw] top-[10vh] w-[25vw] h-[90vh] bg-white text-black p-12 flex flex-col lg:hidden">
        <div className="text-left profile-section">
          <h1>
            Nate Ly
          </h1>
          <h2 className="text-[20px] p-[0rem] text-black/70 font-bold">
            Junior at Yale 
          </h2>
          
          <p className="text-base text-black/60 leading-snug">
            Passionate about building intelligent systems that solve real-world problems
          </p>

        </div>

        <nav className="mt-[3rem]" aria-label="In-page jump links">
          <ul className="list-none p-0 m-0">
            <li>
              <a 
                href="#about" 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                  setActiveSection('/');
                }}
                className={`group flex items-center py-3 no-underline ${
                  activeSection === '/' ? 'active' : ''
                }`}
              >
                <span className="nav-text">About</span>
              </a>
            </li>
            <li>
              <a 
                href="#projects" 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                  setActiveSection('/projects');
                }}
                className={`group flex items-center py-3 no-underline ${
                  activeSection === '/projects' ? 'active' : ''
                }`}
              >
                <span className="nav-text">Projects</span>
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  setActiveSection('/contact');
                }}
                className={`group flex items-center py-3 no-underline ${
                  activeSection === '/contact' ? 'active' : ''
                }`}
              >
                <span className="nav-text">Contact</span>
              </a>
            </li>
          </ul>
        </nav>

        {/* Social media icons */}
        <div className="mt-auto mb-[4rem] flex items-center gap-[1rem]" aria-label="Social media">
          <SocialIcon 
            url="https://github.com/natejly" 
            style={socialIconSize}
            className="transition-transform duration-200 hover:scale-125"
            bgColor="#000000"
            fgColor="#ffffff"
            target="_blank"
          />
          <SocialIcon 
            url="https://www.linkedin.com/in/natejly/" 
            style={socialIconSize}
            className="transition-transform duration-200 hover:scale-125"
            bgColor="#000000"
            fgColor="#ffffff"
            target="_blank"
          />
          <SocialIcon 
            url="https://instagram.com/natejly" 
            style={socialIconSize}
            className="transition-transform duration-200 hover:scale-125"
            bgColor="#000000"
            fgColor="#ffffff"
            target="_blank"
          />
        </div>
      </div>

      {/* Right Content Area */}
      <div className="w-full pl-[max(calc(40vw+2rem),400px)] pr-[max(calc(5vw+2rem),300px)] lg:pl-8 lg:pr-8">
        <div className="max-w-5xl pl-16 pr-16 lg:pl-0 lg:pr-0">
          <div ref={homeRef}>
            <Home />
          </div>
          <div ref={p1Ref}>
            <P1 />
          </div>
          <div ref={p2Ref}>
            <P2 />
          </div>
        </div>
      </div>
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