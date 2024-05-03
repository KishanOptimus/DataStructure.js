console.log('hello world');

const a= 122
let b='testing';
console.log(a);
console.log(typeof a);
console.log( b);
console.log(typeof b);

const age = [23,56,78,66,34];
age.splice(78,2);
console.log(age);
console.log(age);
console.log(typeof age);

let fruites = ['apple', 'orange', 'banana'];
fruites[3] ="mango";
fruites[2] = 'pottato';
console.log(fruites);

let numbers = [1,2,3,4,5];
numbers.splice(2,1);
console.log(numbers);

const languages = ["JavaScripts","Python ","Java", "Lua"];
// replacing the "java"&"Lua"with the "c"&"C++"
let removed = languages.splice(2,2,"C","C++");

console.log(removed);
console.log(languages);

let removed2 = languages.splice(2,3);
console.log(removed2);

// does not removes ,only appends to end

let removed3 = languages.splice(5,2,"C++");
console.log(removed3);
console.log(languages);

let removed4 = languages.splice(1);
console.log(removed4);
