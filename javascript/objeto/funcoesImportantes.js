const pessoa = { nome: 'Rebeca', idade: 2, peso: 13 }
console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
})
// Ou, igualmente
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, //caso: 'false', a key "dataNascimento" não é mostrada
    writable: false, //semelhante a 'freeze'
    value: '01/01/2019'
})
pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// Object.assign (ECMAScript 2015)
const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a: 4}
const obj = Object.assign(dest, o1, o2) //obj recebe os outros e sobrescreve os valores
console.log(obj)

Object.freeze(obj)
obj.c = 1234 //não muda 'c'
console.log(obj)