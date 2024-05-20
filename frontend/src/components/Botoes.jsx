import './Botoes.css'
import {Link} from 'react-router-dom'
const Botoes = () =>{


    return(
        <div className='botoes'>
            <Link to='/Form'><button>Registrar</button></Link>
            <Link to='/Consulta'><button>Consultar</button></Link>
            <button>Atualizar</button>
            <button>Inativar</button>
        </div>
    )
}

export default Botoes