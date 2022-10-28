// funçao sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}
imprimirSoma(2, 3)
imprimirSoma(2) //NaN
imprimirSoma(2, 10, 4, 5, 6, 7, 8) //5 soma somente os 2 primeiros
imprimirSoma()

// Funçao com retorno
function soma(a, b = 1){
    return a + b
}
console.log(soma(2, 3))
console.log(soma(2))
console.log(soma())