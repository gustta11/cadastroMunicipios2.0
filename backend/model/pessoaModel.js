import connection from "../config/Conecta.js";


export function read(callback){
    connection.query('SELECT * from moradores', callback)
}
export function create(nome,cpf, idade, sexo, bairro, cep, callback){
    connection.query('INSERT INTO moradores (Nome, Cpf, Idade, Sexo, Bairro, Cep) VALUES(?,?,?,?,?,?)', [nome,cpf,idade,sexo,bairro,cep], callback)
}
export function update(id,novoDados, callback){
    connection.query('UPDATE moradores set ? where id = ?', [novoDados,id], callback)
}
export function deletePes(id, callback){
    connection.query('UPDATE moradores set ativo_pessoa = 0 where id = ?', [id], callback)
}