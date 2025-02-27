export class Person {
  constructor(name) {
    this.name = name;
  }

  walk() {
    console.log("walk");
  }
}
const person2 = new Person("hugo");
console.log(person2);
