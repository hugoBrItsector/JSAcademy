import { Person } from "./person";

export function promote() {}

export default class Teacher extends Person {
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
