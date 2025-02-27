//spread operator
const first = [1, 2, 3];
const second = [4, 5, 6];

const combined = first.concat(second);
//vs
const combined2 = ["a", ...first, "b", ...second, "c"];
console.log(combined2);
