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

//For loops

for(let i = 0; i < todoList.length; i++){
    console.log(`You need to ${todoList[i].text}`)
}

//another for method

for(let todo of todoList) {
    console.log(todo.id)
}

// forEach, map, filter

todoList.forEach(function(todo) {
    console.log(todo.text)
})

const todoId = todoList.map(function(todo) {
    return todo.id
})

console.log(todoId)

const todoFiltered = todoList.filter(function(todo) {
    return todo.iscompleted === true
}).map(function(todo) {
    return todo.text
})

console.log(todoFiltered)