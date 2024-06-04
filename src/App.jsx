import { Route, Routes } from 'react-router-dom'
import './App.css'
import Course from './pages/Course/Course'
import Header from './components/Header/Header'
import Blog from './pages/Blog/Blog'
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <div className='app'>
      <Header/>
        <Routes>
          <Route  path='/' element={<Home/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/cource' element={<Course/>}/>
        </Routes>
        <Footer/>
    </div>
  )
}

export default App
