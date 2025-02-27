//object destructuring

const address = {
  street: "a",
  city: "b",
  country: "c",
};

//creating a new const var st by referencing do street
const { street: st } = address;

console.log(st);
