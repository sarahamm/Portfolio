import { Route, Routes } from 'react-router-dom'
import './App.css'
import Main from './main'
import About from './about'
import Projects from './Projects'
import Contact from './Contact'
import ProjectInfo from './projectInfo'

function App() {

  return (
      <>
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project/:id" element={<ProjectInfo />} />
        </Routes>
      </>
  )
}

export default App
