import connection from "../config/Conecta.js";


export function read(callback){
    connection.query('SELECT * from moradores where Activo_pessoa = 1', callback)
}
export function create(nome,cpf, idade, sexo, bairro, cep,callback){
    connection.query('INSERT INTO moradores (Nome, Cpf, Idade, Sexo, Bairro, Cep, Activo_pessoa) VALUES(?,?,?,?,?,?,1)', [nome,cpf,idade,sexo,bairro,cep], callback)
}
export function update(nome,cpf,idade,sexo,bairro,cep,id, callback){
    connection.query('UPDATE moradores SET Nome = ?, Cpf = ?, Idade = ?, Sexo = ?, Bairro = ?, Cep = ?, Activo_pessoa = 1 WHERE id = ?', [nome,cpf,idade,sexo,bairro,cep,id], callback)
}
export function deletePes(id, callback){
    connection.query('UPDATE  moradores SET Activo_pessoa = 0 WHERE id = ?', [id], callback)
}