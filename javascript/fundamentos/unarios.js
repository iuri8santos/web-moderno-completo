let num1 = 1
let num2 = 2

num1++
console.log(num1)
--num1
console.log(num1)

console.log(++num1 === num2--) // 2 = 2 v -> 3
console.log(++num1 === --num2) // 2 = 1 f