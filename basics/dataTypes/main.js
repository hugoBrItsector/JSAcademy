//Strings, number, boolean, null, undefined

const name = 'Hugo' //Tipo string

const age = 24 //tipo number

const isCool = true //tipo boolean

const x = null //Tipo null

const y = undefined // tipo undefined

let z //tipo undefined

console.log(typeof name)
console.log(typeof age)
console.log(typeof isCool)
console.log(typeof x)
console.log(typeof y)
console.log(typeof z)

const s = "Hello world"

//Tamanho de uma frase
console.log(s.length)
//minusculas
console.log(s.toLowerCase())
//imprimir apenas hello
console.log(s.substring(0, 5))
//imprimir apenas world
console.log(s.substring(6, 11))
//maiusculas
console.log(s.toUpperCase())
//Expressao completa
console.log(s.substring(0,5).toLowerCase() + " " + s.substring(6,11).toUpperCase())

// separar por letras
console.log(s.split(""))

const s2 = "hello, World"

//separar pela virgula

console.log(s2.split(","))