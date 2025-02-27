//convert the following functions into arrow functions

// Ex1
function sum(a, b) {
  return a + b;
}
// to
const sum = (a, b) => a + b;

//Ex2
function isPositivie(number) {
  return number >= 0;
}
// to
const isPositive = (number) => number >= 0;

//Ex3
function randomNumber() {
  return Math.random;
}
// to
const randomNumber = () => Math.random;

//Ex 4
document.addEventListener("click", function () {
  console.log("Click");
});
// to
document.addEventListener("click", () => console.log("click"));
