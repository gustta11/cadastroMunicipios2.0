import './Update.css'
import {useState} from 'react' 

const Update = () =>{

    const [NovosDados, setNovosDados] = useState({
        id:'',
        nome:'',
        cpf:'',
        idade:'',
        sexo:'',
        bairro:'',
        cep:''
    })

    const handleChange = (e) =>{
        const {name, value} = e.target
            setNovosDados(prevState =>({...prevState, [name]:value}))
    }

    const handleSubmit = async (e)=>{
        e.preventDefault()

        try{
            
            const response = await fetch(`http://localhost:3000/pessoas/${NovosDados.id}`, {
                method:'PUT',
                headers:{
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(NovosDados)
            })

            const json = await response.json()
            console.log(response)
            console.log(json)
             
        }catch (err){
            console.error("Erro ao enviar", err)
        }
    }

    return(
        <form onSubmit={handleSubmit}>
        
        <label >ID:</label>
        <input type="number" name='id' value={NovosDados.id} placeholder="Digite aqui" onChange={handleChange} className='inputs'/>
        <label> Nome:</label>
        <input type="text" name='nome' value={NovosDados.nome} placeholder="Digite aqui" onChange={handleChange} className='inputs'/>
        <label > CPF:</label>
        <input type="text" name='cpf'  value={NovosDados.cpf} placeholder="Digite aqui" onChange={handleChange} className='inputs'/>
        <label > IDADE:</label>
        <input type="text" name='idade'  value={NovosDados.idade} placeholder="Digite aqui" onChange={handleChange} className='inputs'/>
        <label > SEXO:</label>
        <input type="text" name='sexo'  value={NovosDados.sexo}  placeholder="Digite aqui" onChange={handleChange} className='inputs'/>
        <label >BAIRRO:</label>
        <input type="text" name='bairro'  value={NovosDados.bairro} placeholder="Digite aqui" onChange={handleChange} className='inputs'/>
        <label >CEP:</label>
        <input type="text"  name='cep'  value={NovosDados.cep} placeholder="Digite aqui" onChange={handleChange} className='inputs'/>
        <button type="submit" className='botao'>Atualizar</button>

        </form>
    )
    
}

export default Update