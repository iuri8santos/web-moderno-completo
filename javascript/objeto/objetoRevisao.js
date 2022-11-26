// Coleção dinâmica de pares chave/valor
const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Genérica'
produto.preco = 220
console.log(produto)

delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro = { 
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores: [{
        nome: 'Júnior',
        idade: 19
    }, {
        nome: 'Ana',
        idade: 45
    }],
    calcularValorSeguro: function() {
        // ...
    }
}
carro.proprietario.endereco.numero = 1000 // Mudou o número para 1000
carro['proprietario']['endereco']['logradouro'] = 'Av. Gigante' // Para param string
console.log(carro)

delete carro.calcularValorSeguro
// delete carro.condutores
delete carro.proprietario.endereco // Se apagar esse atributo primeiro, apaga todos os demais abaixo
console.log(carro)
console.log(carro.condutores)
console.log(carro.condutores.length)