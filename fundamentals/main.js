//Ex1

const matches = (a, b) => {
  const stringifyObjectA = JSON.stringify(a);
  const stringifyObjectB = JSON.stringify(b);
  console.log(stringifyObjectA);
  console.log(stringifyObjectB);

  //Antes de converter para JSON
  console.log(a === b);
  //depois de converter para JSOn
  console.log(stringifyObjectA === stringifyObjectB);
};

matches({ age: 24, name: "Hugo" }, { age: 24, name: "Hugo" });

//Ex2
const copy_to_Clipboard = (str) => {
  const textArea = document.createElement("textarea");

  textArea.value = str;

  document.body.appendChild(textArea);
};

copy_to_Clipboard("Teste");

//Ex3

const csv_to_array = (data, delimeter = ",", omitFirstRow = false) => {
  return data
    .slice(omitFirstRow ? data.indexOf("n") + 1 : 0)
    .split("\n")
    .map((v) => v.split(delimeter));
};

console.log(csv_to_array("a,b\nc,d")); // [['a', 'b'], ['c', 'd']]

//Ex5

const numberToArray = (n) => {
  return [...`${n}`].map((i) => parseInt(i));
};

console.log(numberToArray(123));

//Ex6

const digIntoObject = (obj, target) => {
  return target in obj
    ? obj[target]
    : Object.values(obj).reduce((acc, val) => {
        if (acc !== undefined) return acc;
        if (typeof val === "object") return digIntoObject(val, target);
      }, undefined);
};

const data = {
  level1: {
    level2: {
      level3: "some data",
    },
  },
};

const dog = {
  status: "success",
  message: "https://images.dog.ceo/breeds/african/n02116738_1105.jpg",
};

console.log(digIntoObject(dog, "nome"));

//Entender melhor reduce

const fruits = [
  "apple",
  "banana",
  "orange",
  "apple",
  "orange",
  "banana",
  "banana",
];
const count = fruits.reduce((accumulator, fruit) => {
  accumulator[fruit] = (accumulator[fruit] || 0) + 1;
  return accumulator;
}, {});
console.log(count); // Output: { apple: 2, banana: 3, orange: 2 }

//Ex8
const pullOutfromArray = (arr, ...args) => {
  let argState = Array.isArray(args[0]) ? args[0] : args;
  let pulledOut = arr.filter((v) => !argState.includes(v));
  arr.length = 0;
  pulledOut.forEach((element) => arr.push(element));
  return arr;
};

const elementsToPullOut = [2, 3];
console.log(pullOutfromArray([1, 2, 3, 4, 5, 6, 7], elementsToPullOut));

//EX10
