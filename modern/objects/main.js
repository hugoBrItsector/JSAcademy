//Objects
const person = {
  name: "hugo",
  walk() {
    console.log(this);
  },
};

//metodo usado em react para poder referenciar ao objeto
const walk = person.walk.bind(person);
walk();
