const x = [['jack',24],['Sara',23],['Perter',21]];

console.log(x[0]);
// access th frist item of frist inner array 
console.log(x[0][0]);

// we will also push or add te elements to the multidimention array using Push()method
x.push(['nick',25]);
console.log(x);
// we can also add the element ti the inner array using this index no of inner arry ....
x[1][2]='hello';
console.log(x);
x[1].push('hello');
console.log(x);

// ** You can also add the element the arrays splice()method to add an element at spacified index 
const studentData = [['Jack ',20],['Sara',21]];
studentData.splice(1,0,['petter',22]);
console.log(studentData);

for(let i =0;i<studentData.length;i++){
    let innerArray = studentData[i].length;
    for(let j = 0; j<innerArray;j++){
        console.log(studentData[i][j]);
    }
}

// Arary concatination with the concat()

const arr1 = [2,3,5,7];
const arr2 =[2,4,6,8];

const joinedArray = arr1.concat(arr2);
console.log(joinedArray);

// concat() method is created the new array with the elements of the objects on which 
// the method is called . It then sequentially adds arguments or the elements of arrguments 

let language1 = ["Javascript", "Python", "JAva"];
let language2  = ["C","C++"];

var new_Array  = language1.concat(language2);
console.log(new_Array);
// concating value and array

var new_Array1 = language1.concat("Lca",language1);
console.log(new_Array1);

// concating the nested array :- The concat()  method returns the shallow copy of the concatenated i  the follwoin way 
// 1) Its copies objects reffrance of new array (For example: passing a nested array ) so references objects will
//   the modified , the changes are visible returned new array 
// 2) it the copies the values of the strings and numbers the new arrays

var reandomList = [1,3,4,];
var randomList = [[5,6,],[7,8]];

var combinedList = reandomList.concat(randomList);
console.log(combinedList);
// chaged the value 1 to 0
reandomList[0]=0;
console.log(reandomList);
console.log(combinedList);
randomList[0].push(6);
console.log(randomList);
console.log(combinedList);
// here nested array refrences is copied to the connected array. So, we can modifyed any of the refrences, to changes are
// reflected everyone

// ******toString():- The toString() method returns a String formed by the Elements of the elements of the given array.

let item = ["q",1,"a",2];
let itemString = item.toString();
console.log(itemString);
console.log(item);
// we can also converted nested array in to the string format using a toString()

const item1 = [1,3];
const item2 = [["kishan", "Amit", 4, 6],["ashan",5,8,"sakasan"]];
const item3 = item1.concat(item2);
console.log(item3);
 const itemString1= item3.toString();
 console.log(itemString1);