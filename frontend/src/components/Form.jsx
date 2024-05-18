import {useState} from 'react' 

const Formulario =  () =>{

    const [formValores, setformValores] = useState({
        nome:'',
        cpf:'',
        idade:'',
        sexo:'',
        bairro:'',
        cep:''
    })

    const handleChange = (e) =>{
        const {name, value} = e.target
            setformValores(prevState =>({...prevState, [name]:value}))
    }

    const handleSubmit = async (e)=>{
        e.preventDefault()

        try{
            console.log('Dados a serem enviados:',formValores)
            const response = await fetch('http://localhost:3000/pessoas', {
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(formValores)

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

        <label> Nome:</label>
        <input type="text" name='nome' value={formValores.nome} placeholder="Digite aqui" onChange={handleChange}/>
        <label > CPF:</label>
        <input type="text" name='cpf'  value={formValores.cpf} placeholder="Digite aqui" onChange={handleChange}/>
        <label > IDADE:</label>
        <input type="text" name='idade'  value={formValores.idade} placeholder="Digite aqui" onChange={handleChange}/>
        <label > SEXO:</label>
        <input type="text" name='sexo'  value={formValores.sexo}  placeholder="Digite aqui" onChange={handleChange}/>
        <label >BAIRRO:</label>
        <input type="text" name='bairro'  value={formValores.bairro} placeholder="Digite aqui" onChange={handleChange}/>
        <label >CEP:</label>
        <input type="text"  name='cep'  value={formValores.cep} placeholder="Digite aqui" onChange={handleChange}/>
        <button type="submit">Cadastrar</button>

        </form>
    )
}

export default Formulario