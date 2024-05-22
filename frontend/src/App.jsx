
import './App.css'
import Formulario from './components/Form'
import Consulta from './components/Consulta'
import Titulo from './layout/Titulo'
import Footer from './layout/Footer'
import Nav from './components/Nav'
import Update from './components/Update'
import Home from './components/Home'
import{ BrowserRouter as Router, Routes, Route,Link} from 'react-router-dom';

function App() {
 

  return (

    <Router>
    <div className='grid-geral'>

      <header>
      <Titulo/>
        <Nav/>
        
      </header>

      <main>
        
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Form' element={<Formulario/>}/>
        <Route path='/Consulta' element={<Consulta/>}/>
        <Route path='/Update' element={<Update/>}/>
        </Routes>
      </main>

      <footer>
        <Footer/>
      </footer>
      
    </div>
    </Router>
  )
}

export default App
