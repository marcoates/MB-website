import { HashRouter, Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { AboutMe } from "./pages/AboutMe"
import { Project } from "./pages/Project"
import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {

  return (
  <HashRouter>
  <Header />
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about-me" element={<AboutMe />}/>
    <Route path="/project/:name" element={<Project />}/>
  </Routes>
  <Footer />
  </HashRouter>
  )}

export default App