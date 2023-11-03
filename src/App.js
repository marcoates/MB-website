import { Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { AboutMe } from "./pages/AboutMe"
import { Project } from "./pages/Project"
import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {
  
  return (
  <>
  <Header />
  <Routes>
    <Route path="/MB-website/" element={<Home/>}/>
    <Route path="/MB-website/about-me" element={<AboutMe />}/>
    <Route path="/MB-website/project/:name" element={<Project />}/>
  </Routes>
  <Footer />
  </>
)}

export default App