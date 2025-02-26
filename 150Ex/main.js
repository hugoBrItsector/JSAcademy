//Ex 1
function btn1() {
  const msg = document.querySelector(".msg1");
  const currentDate = new Date();
  msg.innerHTML = `<h2>${currentDate}</h2>`;
}

//Ex2
function btn2() {
  const msg = document.querySelector(".msg2");
  msg.innerHTML = `<h2>Window obtions printed</h2>`;
  window.print();
}

//Ex3
function btn3() {
  const msg = document.querySelector(".msg3");
  const date = new Date();
  let dd = date.getDay();
  let mm = date.getMonth();
  const yy = date.getFullYear();

  if (dd < 10) {
    dd = "0" + dd;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }
  msg.innerHTML = `
  <h2>${mm}-${dd}-${yy}</h2>
  <h2>${mm}/${dd}/${yy}</h2>
  <h2>${dd}-${mm}-${yy}</h2>
  <h2>${dd}/${mm}/${yy}</h2>`;
}

//Ex4
function btn4() {
  const msg = document.querySelector(".msg4");
  const a = 5;
  const b = 6;
  const c = 7;
  const semiPerimeter = (a + b + c) / 2;
  const totalArea = Math.sqrt(
    semiPerimeter *
      ((semiPerimeter - a) * (semiPerimeter - b) * (semiPerimeter - c))
  );
  msg.innerHTML = `<h2>Total area is ${totalArea}</h2>`;
}

//Ex5
function animate_string(id) {
  const msg = document.querySelector(".msg5");
  const element = document.getElementById(id);
  const textNode = element.childNodes[0]; //assume que não tem outro flho
  let text = textNode.data;
  console.log(text);

  setInterval(() => {
    text = text[text.length - 1] + text.substring(0, text.length - 1);
    textNode.data = text;
  }, 100);

  //msg.innerHTML = `<h2>Total area is ${totalArea}</h2>`;
}

//Ex6

function leapYear(year) {
  const msg = document.querySelector(".msg6");
  const isLeapYear = year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
  if (isLeapYear === true) {
    msg.innerHTML = "<h1> Is leap year</h1>";
  } else {
    msg.innerHTML = "<h1> is not a leap year</h1>";
  }
}

//Ex7

function findYear(year) {
  const msg = document.querySelector(".msg7");
  for (year; year <= 2050; year++) {
    let day = new Date(year, 0, 1);

    if (day.getDay() === 0) {
      msg.innerHTML += `First January is being a Sunday in ${year} <br />`;
    }
  }
}

//Ex8

function guessNumber() {
  const msg = document.querySelector(".msg8");
  const inputNumber = parseInt(document.getElementById("number").value);
  const randomNumber = Math.floor(Math.random() * 10 + 1);
  console.log(inputNumber);
  console.log(randomNumber);
  if (randomNumber === inputNumber) {
    msg.innerHTML = "<h1>Congrats!!! you guessed the number!</h1>";
  } else {
    msg.innerHTML = `<h1>The random number is ${randomNumber}</h1>`;
  }
}

//Ex9

function daysLeft() {
  const msg = document.querySelector(".msg9");
  const currentDate = new Date();
  const chmDate = new Date(currentDate.getFullYear(), 11, 25);
  const oneDay = 1000 * 60 * 60 * 24;

  const daysLeftToChm = parseInt((chmDate - currentDate) / oneDay);

  msg.innerHTML = `You have ${daysLeftToChm} to christmas`;
}

//Ex10

const multiply = () => {
  const num1 = document.getElementById("num1").value;
  const num2 = document.getElementById("num2").value;
  const msg = document.querySelector(".msg10");

  const result = num1 * num2;
  console.log(result);
  msg.innerHTML = `The result is: ${result}`;
};

const divide = () => {
  const num1 = document.getElementById("num1").value;
  const num2 = document.getElementById("num2").value;
  const msg = document.querySelector(".msg10");

  const result = num1 / num2;
  console.log(result);
  msg.innerHTML = `The result is: ${result}`;
};

//Ex 149

const verifyCapìtalizationAndChangeIt = (text) => {
  return text.toUpperCase() === text ? text.toLowerCase() : text.toUpperCase();
};

const changeCapitalization = () => {
  const inputText = document.getElementById("inputText").value;
  const capitalized = verifyCapìtalizationAndChangeIt(inputText);
  document.getElementById("inputText").value = capitalized;
};
