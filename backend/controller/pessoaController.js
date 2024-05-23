import {read, create, update, deletePes} from '../model/pessoaModel.js'

export async function createPessoa(req, res){
    const{nome,cpf, idade, sexo, bairro, cep} = req.body
    console.log('Dados recebidos do frontend:', {nome,cpf, idade, sexo, bairro, cep})

    create(nome,cpf, idade, sexo, bairro,cep,(err, result) =>{
        if(err){
           res.status(500).json({error:err.message})
           return
        }
        res.status(201).json({mensagem: 'Pessoa criada com sucesso'})
    })
}

export async function getAllPessoas(req, res){
    read((err, moradores) => {
        if(err){
            res.status(500).json({error:err.message})
            return
        }
        res.json(moradores)
    })
}

export async function updatePessoa(req,res){
    const{id} = req.params
    console.log('Dados recebidos do front', {id})
    const {nome,cpf,idade,sexo,bairro,cep} = req.body
    update(nome,cpf,idade,sexo,bairro,cep,id, (err, result) =>{
        if(err){
            res.status(500).json({error:err.message});
            return
        }
        res.send('Pessoa atualizada com sucesso')
    })
}

export async function deletePessoa(req,res){
    const {id} = req.params
    deletePes(id,(err,result) =>{
        if(err){
            res.status(500).json({error:err.message})
            return
        }
        res.send('Pessoa excluída com sucesso')
    })
}