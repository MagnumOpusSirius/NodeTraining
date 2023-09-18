// var x=10;
// var y='10';
// console.log(x==y); // true // this only checks the value of the variable
// console.log(x===y); // false // this checks the type of the variable as well

// var person= {
//     name:'Sachin',
//     say: function() {
//         console.log(this.name) // this is called string interpolation
//         console.log(`${name}`); // this is called template literals //
//         console.log(this.name.length); // this is used to find the length of the string
//         console.log(this.name.toUpperCase());
//         console.log(name.toLowerCase());
//         console.log(name.indexOf('a')); // this is used to find the index of the character
//         console.log(name.lastIndexOf('a'));
//         console.log(name.substr(0,3)); // this is used to find the substring
//         console.log(name.substr(1,3));
//     }
// }
// person.say();

// console.log(name) // this is called string interpolation
// console.log(`${name}`); // this is called template literals //
// console.log(name.length); // this is used to find the length of the string
// console.log(name.toUpperCase());
// console.log(name.toLowerCase());
// console.log(name.indexOf('a')); // this is used to find the index of the character
// console.log(name.lastIndexOf('a'));
// console.log(name.substr(0,3)); // this is used to find the substring
// console.log(name.substr(1,3));
// console.log(this.name);

// var d = new Date();
// console.log(d);
// console.log(d.getDate());
// console.log(d.getDay());
// console.log(d.getFullYear());
// console.log(d.getHours());
// console.log(d.getMinutes());
// console.log(d.getMonth());
// console.log(d.getSeconds());
// console.log(d.getTime());
// console.log(d.toLocaleDateString());
// console.log(d.toLocaleTimeString());

// for(let i = 1; i< 10; i++) {
//     console.log(i);
// }
//console.log(i); // this will throw an error as i is not defined outside the for loop

// var item=["1","2","3","4","5","6","7","8","9","10"];
// var item1=["pencil", 1, "sharpner", "scale"]
// var x= "10";
// console.log(typeof x);
// console.log(typeof item);
// console.log(typeof item1);
// console.log(item1);
// console.log(item1)


// console.log(x); // undefined (no ReferenceError)
// var x = 10;

//var item= ["1","2","3"];
var item=["pencil", 1, "sharpner", "scale"]

// for(let i of item) 
// console.log(i);

// for(let i of item1){
//     console.log(i);
// }
// for(let i of item1) {
//     console.log(item1[i]); // item1[pencil] //thats why it is undefined
// }

console.log(item)
item.push("eraser");
console.log(item)

item.splice(2,1,"abc") // this is used to replace the value at the index 2 with abc
console.log(item)

item.unshift('gum')
console.log(item)

item.pop()
console.log(item)

item.splice(2,2) //splice( index, no of elements to be deleted, elements to be added)
console.log(item) 

