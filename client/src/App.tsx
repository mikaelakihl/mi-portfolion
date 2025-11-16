import { Routes, Route, Outlet, Link } from 'react-router-dom'
import './App.css'

const Layout = () => {
  return (
    <div>
      <nav>
        <Link to="/cv">CV</Link>
        <Link to="/projects">Projects</Link>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

const CV = () => {
  return <div>CV</div>
}

const Projects = () => {
  return <div>Projects</div>
}

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="cv" element={<CV />} />
        <Route path="projects" element={<Projects />} />
      </Route>
    </Routes>
  )
}

export default App
