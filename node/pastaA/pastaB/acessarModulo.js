const moduloA = require('../../moduloA') //sai de duas pastas // "moduloa" não funciona no Linux
console.log(moduloA.ola)
const moduloB = require('../../moduloB')
console.log(moduloB.bomDia)

const saudacao = require('saudacao') //encontra a pasta saudaçao
console.log(saudacao.ola)

const c = require('./pastaC/index') //pasta seguinte //ou Ssomente pastaC pelo arquivo ser index
console.log(c.ola2)

// const http = require('http')
// http.createServer((req, res) => {
//     res.write('Bom dia!')
//     res.end()
// }).listen(8080) // http://localhost:8080