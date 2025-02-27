//classes

class Person {
  constructor(name) {
    this.name = name;
  }

  walk() {
    console.log("walk");
  }
}
const person2 = new Person("hugo");
console.log(person2);

//inheritance

class Teacher extends Person {
  constructor(name, degree) {
    super(name);
    this.degree = degree;
  }
  teach() {
    console.log("teaching");
  }
}

const teacher = new Teacher("hugo", "MasterScience");

console.log(teacher);
