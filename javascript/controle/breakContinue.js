const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (x in nums) {
    if (x == 5) {
        break
    }
    console.log(`x = ${nums[x]}`) // x = 1 ...
    // console.log(`${x} = ${nums[x]}`) 0 = 1 ...
}
for (y in nums) {
    if (y == 5) { //desvio de fluxo no 5, indo pro próximo
        continue
    }
    console.log(`${y} = ${nums[y]}`)
}
externo:
for (a in nums) {
    for (b in nums) {
        if (a == 2 && b == 3) break externo // quando 2,3, ele para
        console.log(`Par = ${a}, ${b}`)
    }
}
console.log('Fim!')