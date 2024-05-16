import express from 'express'
const app = express()
import cors from 'cors'
import connection from './config/Conecta'
import {getAllPessoas, createPessoa, updatePessoa, deletePessoa} from './pessoasController.js'

app.use(express.json())
app.use(cors())

app.get('/pessoas', getAllPessoas)
app.post('/pessoas', createPessoa)
app.put('/pessoas',updatePessoa)
app.delete('/pessoas', deletePessoa)

app.listen(3000, ()=>{
    console.log('Servidor rodando na porta 3000')
})