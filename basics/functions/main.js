function addNums(x = 1, y = 1) {
    return x + y
}

console.log(addNums(5, 5))

//arrow function ES6

const teste = (x = 1, y = 1) => {
    return x + y
}
        //OR
const teste2 = (x = 1, y = 1) => x + y

console.log(teste())
console.log(teste2())
