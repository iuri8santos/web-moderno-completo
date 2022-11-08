const pessoa = { nome: 'João' }
pessoa.nome = 'Pedro' // Nome alterado pra Pedro
console.log(pessoa)

// pessoa = { nome: 'Ana' }
// console.log(pessoa) objeto constante mudado/ erro

Object.freeze(pessoa)
pessoa.nome = 'Maria'
delete pessoa.nome // Nome fixo, não muda
console.log(pessoa.nome) // Nome fixo, não muda

const pessoaConstante = Object.freeze({ nome: 'João' })
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)