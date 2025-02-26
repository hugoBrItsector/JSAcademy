//Constructor functions
function Person(firstName, lastName, dob){
    this.firstName = firstName
    this.lastName = lastName
    this.dob = new Date(dob)
}

//prototypes

Person.prototype.getBirthYear = function() {
    return this.dob.getFullYear()
}

Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`
}

//Instantiate object
const person1 = new Person("Hugo", "Brandao", "10-27-2000")

console.log(person1.getBirthYear())
console.log(person1.getFullName())
console.log(person1)

//On ES6

class Person2 {
    constructor(firstName, lastName, dob){
        this.firstName = firstName
        this.lastName = lastName
        this.dob = new Date(dob)
    }
    getBirthYear() {
        return this.dob.getFullYear()
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

const person2 = new Person2("José", "Martins", "11-12-2000")

console.log(person2.getBirthYear())
console.log(person2.getFullName())
console.log(person2)
