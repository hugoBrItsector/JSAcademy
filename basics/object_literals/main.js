//Object
const person = {
    firstName: "Hugo",
    lastName: "Brandão",
    age: 24,
    skills: ['React', 'JS', 'CSS', 'HTML'],
    address: {
        street: "Rua xpto",
        city: "Braga",
    }
}

//full object
console.log(person)

//only firstname
console.log(person.firstName)

//print React from skills
console.log(person.skills[0])

//pull properties out from object
 const {firstName, lastName, address: {city}} = person

 console.log(firstName)

 //new part of the ES6
 console.log(city)

 //add properties
 person.email = 'hugo@gmail.com'

 console.log(person)

//arrays of objects
const todoList = [
    {
        id: 1,
        text: "Take out trash",
        iscompleted: false
    },
    {
        id: 2,
        text: "Make my lunch",
        iscompleted: true
    },
    {
        id: 3,
        text: "Have meeting with the team",
        iscompleted: false
    },
]

console.log(todoList[1].text)

//jSON

//convert to JSON
const todoListJSON = JSON.stringify(todoList)
console.log(todoListJSON)



