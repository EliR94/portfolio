import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home'
import NotFound from './components/NotFound';
import ProjectsList from './components/ProjectsList'

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<ProjectsList />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
