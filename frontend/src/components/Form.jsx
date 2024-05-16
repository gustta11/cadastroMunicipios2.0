import {useState} from 'react' 

const Formulario =  () =>{

    const handleChange = (e) =>{
        const {name, value} = e.target
            setFormValores(prevState =>({...prevState, [name]:value}))
    }

    const handleSubmit = async (e)=>{
        e.preventDefault()

        try{
            console.log('Dados a serem enviados:',formValores)
            const response = await fetch('http://localhost:3000/CadastrarPessoa', {
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(valores)

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
        <input type="text" placeholder="Digite aqui"/>
        <label > CPF:</label>
        <input type="text"placeholder="Digite aqui" />
        <label > IDADE:</label>
        <input type="text" placeholder="Digite aqui"/>
        <label > SEXO:</label>
        <input type="text" placeholder="Digite aqui"/>
        <label >BAIRRO:</label>
        <input type="text" placeholder="Digite aqui" />
        <label >CEP:</label>
        <input type="text"  placeholder="Digite aqui" />
        <button type="submit">Cadastrar</button>

        </form>
    )
}