let sum2 = 2 + 3;
console.log(sum2); // Output: 5

let diff = 5 - 2;
console.log(diff); // Output: 3

let product = 4 * 2;
console.log(product); // Output: 8

let division = 8 / 4;
console.log(division); // Output: 2

let modulus = 7 % 3;
console.log(modulus); // Output: 1


let a = 5;
let b = 10;

console.log(a == b); // Output: false
console.log(a != b); // Output: true
console.log(a > b); // Output: false
console.log(a < b); // Output: true
console.log(a >= b); // Output: false
console.log(a <= b); // Output: true


let sum3 = function(a, b) {
  return a + b;
};

let result1 = sum3(2, 3);
console.log(result1); // 5


let sum4 = (a, b) => a + b;

let result = sum4(2, 3);
console.log(result); // 5


function Person(name, age) {
  this.name = name;
  this.age = age;
}

let person = new Person("John", 30);
console.log(person.name); // "John"
console.log(person.age); // 30
