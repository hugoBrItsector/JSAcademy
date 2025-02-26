let x = "10"
let y = 4

//only checks if value matches
if( x == 10) {
    console.log('x is 10')
}

//checks if datatype matches
if(x === 10){
    console.log("x is a string")
} else {
    console.log('x is not a string')
}

//else if statements
if(y === 10){
    console.log("y is 10")
} else if(x > 10) {
    console.log("y is greater than 10")
} else {
    console.log('y is less than 10')
}

// ternary operator

let z = 11

const color = z > 10 ? "red" : "blue"

console.log(color)

//Switch case
switch(color) {
    case "red" : 
        console.log("color is red")
        break;
    case "blue": 
        console.log("color is blue")
        break;
    default:
        console.log("color is not red or blue");
        break;
}