function Carro (velocidadeMaxima = 200, delta = 5) {
    let velocidadeAtual = 0 // let é privado
    this.acelerar = function() { // this é público
        if(velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }
    //método público
    this.getVelocidadeAtual = function() {
        return velocidadeAtual
    }
}
const uno = new Carro // sem ()
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar() // 20
ferrari.acelerar() // 40, e assim, por diante
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar() // 340
ferrari.acelerar() // 350
ferrari.acelerar() // 350
console.log(ferrari.getVelocidadeAtual())

console.log(typeof Carro)
console.log(typeof ferrari)