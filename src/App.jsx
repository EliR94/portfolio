import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home'
import NotFound from './components/NotFound';
import ProjectsList from './components/ProjectsList'
import ProjectItem from './components/ProjectItem';

function App() {
  return (
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<ProjectsList />} />
          <Route path='/projects/:project' element={<ProjectItem />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
