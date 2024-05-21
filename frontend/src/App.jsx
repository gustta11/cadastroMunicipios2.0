
import './App.css'
import Formulario from './components/Form'
import Consulta from './components/Consulta'
import Titulo from './layout/Titulo'
import Footer from './layout/Footer'
import Nav from './components/Nav'
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
        <Route path='/Form' element={<Formulario/>}/>
        <Route path='/Consulta' element={<Consulta/>}/>
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
