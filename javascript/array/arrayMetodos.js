const pilotos = ['Vettel', 'Alonso', 'Raikonen', 'Massa']
pilotos.pop() // Massa quebrou o carro
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift()
console.log(pilotos)

pilotos.unshift('Hamilton')
console.log(pilotos) 

// splice adiciona e remove elementos
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

pilotos.splice(3, 1)
console.log(pilotos)

const algunsPilotos = pilotos.slice(2) //novo array
console.log(algunsPilotos)

const algunsPilotos2 = pilotos.slice(1, 4) //novo array
console.log(algunsPilotos2)

