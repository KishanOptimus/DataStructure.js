const student ={
    firstName:'jack',
    rollno: 32
};
console.log(student);
console.log(student.firstName);
student.lastname = 'Alex';
student.hobbies ='Playing cricket';
student.hobbies = 'Dancing';
delete student.hobbies;
console.log(student);

 const Person ={
    name: 'Bob',
    age: 20,

    greet: function(){
       console.log("Bob says Hi!");
    }
 }
 Person.greet();
//  in objects  You can also defied the Functions, arrays and even objects inside of an objects.
// You can access the values of the objects using . dot operator

 // program to create JavaScript object using object literal
const person = { 
    name: 'John',
    age: 20,
    hobbies: ['reading', 'games', 'coding'],
    greet: function() {
        console.log('Hello everyone.');
    },
    score: {
        maths: 90,
        science: 80
    }
};

console.log(typeof person); // object

// accessing the object value
console.log(person.name);
console.log(person.hobbies[0]);
person.greet();
console.log(person.score.maths);
// Object.create():- THis method creates new object using protype of the given object.

let Student ={
    sname:'Priya',
    age: 24,
    marks:89.5,
    display(){
        console.log("Name:", this.sname);
    }
};
let std1 = Object.create(Student);
std1.sname ='Nisha';
std1.display();
console.log(Student);


let Animal ={
    isHuman: false,
    sound :"Unsatified",
    makeSound(){
        console.log(this.sound);
    },
};
 let snake = Object.create(Animal);
 snake.makeSound();
 snake.sound = "Hiss";

 snake.makeSound();

 let Properties = {
    isHuman:{
        value:true,
    },
    pname:{
        value:"Korin",
        enumerable: true,
        witable: true,
    },
    introduse:{
        value:function(){
            console.log(`Hey i am ${this.pname}`);
        },
    },
 };
 human = Object.create(Animal,Properties);
 human.introduse();