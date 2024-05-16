import {read, create, update, deletePes} from '../model/pessoaModel.js'

export async function createPessoa(req, res){
    const{nome,idade,cpf,sexo} = req.body
    console.log('Dados recebidos do frontend:', {nome, idade, cpf, sexo})

    create(nome, idade, cpf, sexo,(err, result) =>{
        if(err){
           res.status(500).json({error:err.message})
           return
        }
        res.status(201).json({mensagem: 'Pessoa criada com sucesso'})
    })
}

export async function getAllPessoas(req, res){
    read((err, pessoas) => {
        if(err){
            res.status(500).json({error:err.message})
            return
        }
        res.json(pessoas)
    })
}

export async function updatePessoa(req,res){
    const{id} = req.params
    const novosDados = req.body
    update(id, novosDados, (err, result) =>{
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