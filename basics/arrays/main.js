//arrays
const numbers = new Array(1, 2, 3, 4, 5, 6) //constructor

const fruits = ['apples', 'oranges', 'pears' ]

console.log(numbers)
console.log(fruits)

//only appears apples
console.log(fruits[0])

//add to array
fruits[3] = "grapes"

console.log(fruits)

//add to array ex2
fruits.push('mangos')

console.log(fruits)

//add on the beginning
fruits.unshift('pears')

console.log(fruits)

//remove the last one
fruits.pop()

console.log(fruits)

//true or false array

console.log(Array.isArray(fruits))

//index of certain value
console.log(fruits.indexOf('oranges'))