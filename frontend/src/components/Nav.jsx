
import './Nav.css'
import {Link} from 'react-router-dom'

const Nav = () =>{


    return(
        <div className='layout-geral-nav'>
            <Link to='/'><span>Home</span></Link>
            <Link to='/Form'><span>Registrar</span></Link>
            <Link to='/Consulta'><span>Consultar</span></Link>
            <Link to='/Update'><span>Atualizar</span></Link>
            <Link to='/Inativar'><span>Inativar</span></Link>
        </div>
    )
}

export default Nav