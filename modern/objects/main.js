//Objects
const person = {
  name: "hugo",
  idade: 0,
  walk() {
    console.log(this);
  },
};

//metodo usado em react para poder referenciar ao objeto
const walk = person.walk.bind(person);
walk();
