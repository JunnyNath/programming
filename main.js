const name = "John";
const age = 30;
const rating = 4.5;
const iscool = true;
const x = null;
const y = undefined;
let z;
console.log(typeof z);

// strings
// Concatenation
console.log("My name is " + name + " and i am " + age);

// Template String
const hello = `My name is ${name} and i am ${age}`;
console.log(hello);

console.log(hello);
const s = "technology, computer, it, code";

console.log(s.substring(0, 5).toUpperCase(0, 4));
console.log(s.split(""));

//Arrays - variables that hold multiple values

const numbers = new Array(1, 2, 3, 4, 5);
console.log(numbers);

const fruits = ["apples, mangoes, banana"];
fruits[3] = "oranges";

fruits.push("pear");

fruits.unshift("strawberries");

fruits.pop();
//To check if an array is true
console.log(Array.isArray("hello"));
// Index of a value
console.log(fruits.indexOf("mangoes"));

console.log(fruits);

// Object literals

const person = {
  firstName: "John",
  lastName: "Smith",
  age: 30,
  hobbies: ["music", "movies", "gaming"],
  address: {
    street: "50 main st",
    city: "New York",
    state: "USA",
  },
};
console.log(
  person.firstName,
  person.lastName,
  person.hobbies[1],
  person.address.city
);

const {
  firstName,
  lastName,
  address: { city },
} = person;

console.log(city);
//Es6
person.email = "nathbenwhite@gmail.com";
console.log(person);

//Array of object

const todos = [
  {
    id: 1,
    text: "Take out trash",
    isCompleted: true,
  },

  {
    id: 2,
    text: "Meeting with the boss",
    isCompleted: true,
  },

  {
    id: 3,
    text: "Dentist appt",
    isCompleted: false,
  },
];
console.log(todos);
console.log(todos[1].text);
//JSON FORMATTER
const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

//Loop
//For

for (let i = 0; i <= 10; i++) {
  console.log(`For Loop Number: ${i}`);
}

//while
let i = 0;
while (i < 10) {
  console.log(`While Loop Number: ${i}`);
  i++;
}

for (let i = 0; i < todos.length; i++) {
  console.log(todos[i].text);
}

for (let t of todos) {
  console.log(t);
}

//forEach, map, filter iteration with arrays
todos.forEach(function (t) {
  console.log(t.text);
});

const todoText = todos.map(function (t) {
  return t.text;
});
console.log(todoText);

const todoCompleted = todos
  .filter(function (t) {
    return t.isCompleted === true;
  })
  .map(function (t) {
    return t.text;
  });
console.log(todoCompleted);

//conditionals
const X = 4;
const Y = 11;

if (x > 5 && y > 10) {
  console.log("x is more than 5 or y is more than 10");
} else if (X > 10) {
  console.log("x is greater than 10");
} else {
  console.log("x is less than 10");
}

// if(X > 5) {
//   if (Y > 10){

//   }
// }

//shorthand if statement

const Z = 9;

// const color = Z > 10 ? 'red' : 'blue';

const color = "green";

console.log(color);

//switches change the answers

switch (color) {
  case "red":
    console.log("color is red");
    break;
  case "blue":
    console.log("color is blue");
    break;
  default:
    console.log("color is NOT red or blue");
    break;
}

const addNums = (num1 = 1, num2 = 1) => num1 + 5;

console.log(addNums(5));

todos.forEach((todo) => console.log(todo));

//NaN = NOT a NUMBER

//OPP = object oriented programming

// Constructor function
// function Person(firstName, lastName, dob) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.dob = new Date(dob);
//   // this.getBirthYear = function() {
//   //   return this.dob.getFullYear();
//   // }
//   // this.getFullName = function() {
//   //   return `${this.firstName}  ${this.lastName}`;
//   // }
// }

// Person.prototype.getBirthYear = function () {
//   return this.dob.getFullYear();
// };

// Person.prototype.getFullName = function () {
//   return `${this.firstName}  ${this.lastName}`;
// };

// console.log(person1, Date());
// console.log(person2.dob.getFullYear());

// console.log(person1.getBirthYear());
// console.log(person1.getFullName());

// Right way

// A method is a function inside of a class
// Class

class Person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
  }

  getBirthYear() {
    return this.dob.getFullYear();
  }
  getFullName() {
    return `${this.firstName}  ${this.lastName}`;
  }
}

// Instantiate object

const person1 = new Person("John", "Smith", "4-5-2004");
const person2 = new Person("Mary", "Jane", "4-3-2015");

console.log(person2.getFullName());
console.log(person1);

console.log(window);

// alert(1)

// single element
//  console.log(document.getElementById("my-form"));
//  console.log(document.querySelector(".container , h1, div"));
// // const form = document.getElementById('my-form');
// // console.log(form)

// // multiple element

// console.log(document.querySelectorAll('.item'));
// console.log(document.getElementsByClassName('item'));
// console.log(document.getElementsByTagName('li'));

// const items = document.querySelectorAll(".item");

// items.forEach((item) => console.log(item));

// const ul = document.querySelector(".items");

// // ul.remove();
// // ul.lastElementChild.remove()
// ul.firstElementChild.textContent = 'Hello';
// ul.children[1].textContent = 'i am good';
// ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

// 
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");
const userList = document.querySelector("#users");

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
 e.preventDefault();

 if(nameInput.value === '' || emailInput.value === '') {
   msg.classList.add('error');
   msg.innerHTML = "Please enter all field";

   setTimeout(() => msg.remove(),3000);
 } else {
   console.log('success');
 }
 const li = document.createElement('li')
 li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

 userList.appendChild(li);

}
