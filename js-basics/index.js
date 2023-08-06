console.log("hello world");
console.log("hello Nat");

let name = "paul";
console.log(name);

let firstName = "Mosh"; // string literal
let lastName = "Tiffany";
console.log(firstName);

let age = 18; //number literal

let isApproved = true; //boolean literal

let person = {
  //Object
  name: "Ben",
  age: 30,
};

// Dot Notation
person.name = "John";

// Bracket Notation
person[name] = "Mary";

console.log(person[name]);

// Array
let selectedcolor = ["red", "blue"];
selectedcolor[2] = "green";
console.log(selectedcolor.length);

// function
// Performing a task Function
function greet(name,lastName ) {
  console.log('hello' + name + '' + lastName);
}

greet('John', 'smith');

// Calculating a value function
function square(number){
  return number * number;
}
console.log(square(2));


