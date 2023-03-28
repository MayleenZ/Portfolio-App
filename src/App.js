import './App.css';
import NavBar from './components/NavBar'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Projects from './pages/Projects'

import { Route, Routes } from 'react-router-dom';
function App () {
  return (
    <div className = 'App'>
    <NavBar />
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path = '/projects' element={<Projects/>} />
      <Route path='/contact' element={<Contact/>}/> 
    </Routes>
    </div>
  )
}

export default App;
