import connection from "../config/Conecta";


export function read(callback){
    connection.query('SELECT * from pessoas', callback)
}
export function create(nome,idade,cpf,sexo,callback){
    connection.query('INSERT INTO pessoas (nome, idade, cpf, sexo) VALUES(?,?,?,?)', [nome,idade,cpf,sexo], callback)
}
export function update(id,novoDados, callback){
    connection.query('UPDATE pessoas set ? where id = ?', [novoDados,id], callback)
}
export function deletePes(id, callback){
    connection.query('UPDATE pessoas set ativo_pessoa = 0 where id = ?', [id], callback)
}