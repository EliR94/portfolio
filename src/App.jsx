import './App.css'
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home'
import NotFound from './components/NotFound';
import ProjectsList from './components/ProjectsList'
import ProjectItem from './components/ProjectItem';

function App() {
  return (
      <HashRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<ProjectsList />} />
          <Route path='/projects/:project' element={<ProjectItem />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
  )
}

export default App
