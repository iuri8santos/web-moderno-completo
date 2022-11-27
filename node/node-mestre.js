// funcionarios

const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const chineses = f => f.pais === 'China'
const mulheres = f => f.genero === 'F'
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}

axios.get(url).then(response => {
    const funcionarios = response.data
    // console.log(funcionarios)

    const func = funcionarios
    .filter(chineses)
    .filter(mulheres)
    .reduce(menorSalario)
    console.log(func)
})

// acessarModulo

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

// index

this.ola2 = 'Legal!'

// arquivoEscrita

const fs = require('fs')
const produto= {
    nome: 'Celular',
    preco: 1249.99,
    desconto: 0.15
}
fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => {
    console.log(err || 'Arquivo salvo!')
})

// arquivoLeitura

const fs = require('fs')
const caminho = __dirname + "/arquivo.json"

// Síncrono
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

// Assíncrono
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo) // Transformando conteudo em objeto
    console.log(`${config.db.host}:${config.db.port}`)
})

const config = require('./arquivo.json')
console.log(config.db)

fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteúdo da pasta ...')
    console.log(arquivos)
})

// entradaESaida

const anonimo = process.argv.indexOf('-a') !== -1
// console.log(anonimo)
if(anonimo) {
    process.stdout.write('Fala Anônimo!\n')
    process.exit()
} else {
    process.stdout.write('Informe o seu nome: ')
    process.stdin.on('data', data => {
        const nome = data.toString().replace('\r\n', '')
        process.stdout.write(`Fala ${nome}!\n`)
        process.exit()
    })
}

// exportar
console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 1
exports.b = 2
module.exports.c = 3

exports = null
console.log(module.exports)

exports = {
    nome: 'Teste' // Aqui não altera valor
}
console.log(module.exports)

module.exports = {publico: true} // Exportar com valor redefinido

// exporarCliente

const exportar = require('./exportar')
console.log(exportar)

// global

// console.log(global)

global.MinhaApp = Object.freeze({
    saudacao() {
        return 'Estou em todos os lugares!'
    }, nome: 'Sistema Legal'
})

// globalCliente

require('./global')
console.log(MinhaApp.saudacao())

MinhaApp.nome = 'Eita!'
console.log(MinhaApp.nome)

// instanciaCliente

const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')()
const contadorD = require('./instanciaNova')()

contadorA.inc()
contadorB.inc()
console.log(contadorA.valor, contadorB.valor)

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor)

// middlewares

//middleware patter (chain of resposability)
const passo1 = (ctx, next) => {
    ctx.valor1 = 'mid1'
    next()
    }
    
    const passo2 = (ctx, next) => {
        ctx.valor2 = 'mid2'
        next()
    }
    
    const passo3 = ctx => ctx.valor3 = 'mid3'

// moduloA

this.ola = 'Fala, pessoal!'
exports.bemVindo = 'Bem vindo ao Node!'
module.exports.ateLogo = 'Até o próximo exemplo.'

// moduloB

module.exports = {
    bomDia: 'Bom dia',
    boaNoite() {
        return 'Boa Noite!'
    }
}

// moduloCliente

const moduloA = require('./moduloA')
const moduloB = require('./moduloB')
console.log(moduloA.ola)
console.log(moduloA.bemVindo)
console.log(moduloA.ateLogo)
console.log(moduloA)

console.log(moduloB.bomDia)
console.log(moduloB.boaNoite())
console.log(moduloB)

// passandoParametros

module.exports = function(...nomes) {
    return nomes.map(nome => `Boa semana, ${nome}!`)
}

// passandoParametrosClientes

const saudacoes = require(`./passandoParametros`)('Ana', 'Luan', 'João')
console.log(saudacoes)

// temporizador

const schedule = require('node-schedule')

// const tarefa1 = schedule.scheduleJob('/5*****', function () { // seg-min-hora-dia-mês-diadasemana 7-domingo
//     console.log('Executando tarefa 1!', new Date().getSeconds())
// })

// setTimeout(function () {
//     tarefa1.cancel() // revisar
//     console.log('Cancelando tarefa1!')
// }, 20000)

// setImmediate
// setInterval

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 5)]
regra.hour = 02
regra.second = 30
const tarefa2 = schedule.scheduleJob(regra, function() {
    console.log('Executando tarefa 2!', new Date().getSeconds())
})

// this

console.log(this === global)
console.log(this === module)
console.log(this === module.exports)
console.log(this === exports)

function logThis() {
    console.log('Dentro de uma função ...')
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global)
}
logThis()

// usandoModulosTerceiros

const _ = require('lodash')
setInterval(() => console.log(_.random(1, 1000)), 2000)

// Fim Node