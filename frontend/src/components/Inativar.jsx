import './Inativar.css'
import {useState} from 'react' 

const Inativar = () =>{


    const [NovosDados, setNovosDados] = useState({
        id:''
    })

    const handleChange = (e) =>{
        const {name, value} = e.target
            setNovosDados(prevState =>({...prevState, [name]:value}))

    }

    const handleSubmit = async (e)=>{
        e.preventDefault()
        

        try{
            
            const response = await fetch(`http://localhost:3000/pessoas/${NovosDados.id}`, {
                method:'DELETE',
                headers:{
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(NovosDados)
                
            })
            
            const json = await response.json()
            console.log(response)
            console.log(json)
             return
        }catch (err){
            console.error("Erro ao enviar", err)
        }
    }

    return(
        <form onSubmit={handleSubmit}>
        
        <label >ID:</label>
        <input type="number" name='id' value={NovosDados.id} placeholder="Digite aqui" onChange={handleChange} className='inputs'/>
       
       <button onClick={handleSubmit}>Inativar</button>
        </form>
    )
    
}

export default Inativar