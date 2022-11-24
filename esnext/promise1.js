let a = 1
console.log(a)
// p.then(function(valor) {
//     console.log(valor) // somente um valor
// })
// p.then(valor => console.log(valor)) // Ou assim ...

// function primeiroElemento(array) {
//     return array[0]
// } // ou abaixo
const primeiroElemento = arrayOuString => arrayOuString[0]
const primeiraLetra = string => string[0]
const letraMinuscula = letra => letra.toLowerCase()

new Promise(function(resolve) {
    resolve(['Ana', 'Bia', 'Carlos', 'Daniel'])
})
    // .then(valor => valor[0])
    // .then(primeiro => console.log(primeiro))
    // .then(primeiro => primeiro[0])
    .then(primeiroElemento) // array
    .then(primeiroElemento) // string
    .then(primeiraLetra)
    .then(letraMinuscula)
    // .then(v => console.log(v))
    // .then(letra => console.log(letra))
    // .then(letra => letra.toLowerCase())
    // .then(letraMinuscula => console.log(letraMinuscula))
    .then(console.log)