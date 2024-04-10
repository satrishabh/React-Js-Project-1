//1
// const user={
//     name:"rishabh",
//     age:26
// }
// console.log(user.name)
// console.log(user.age)

//2
// const user={
//     name:"rishabh",
//     age:26,
//     greet(){
//         console.log("Hello!");
//     }
// }
// console.log(user.name);
// console.log(user.age);
// user.greet();

//3
// class User{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }

//     greet(){
//         console.log("hi");
//     }
// }
// const user1=new User("Manuel",35);
// console.log(user1);
// user1.greet();


//4
// const hobbies=["Cooking","Working","Reading"];
// console.log(hobbies[0]);

// hobbies.push("Sports");
// console.log(hobbies);

// const index=hobbies.findIndex((item)=>{
//      return item=='Sports';
// })

// console.log(index);

//5
// more effective

// const hobbies2=["Cooking","Working","Reading"];
// console.log(hobbies2[0]);

// hobbies2.push("Sports");
// console.log(hobbies2);
// const index2=hobbies2.findIndex((item)=>item=='Sports');//shortest possible way
// console.log(index2);

//// map method transform any itema any other type of item

// const editHobbies=hobbies2.map((item)=> item+"!");
// console.log(editHobbies);

// const editHobbies1=hobbies2.map((item)=> ({ text : item }));//curly bracket will provide java script object
// console.log(editHobbies1);

//6 Destructuring

// const userName=["max","mishra"];
// const [firstName,lastName]=["max","mishra"];
// console.log(firstName);
// console.log(lastName);

//7
// const user={
//     name:"Max",
//     age:"34"
// };

// const name=user.name;
// const age=user.age;
// console.log(name);
// console.log(age);
// //instead of this we can write as below

// const {name:userName,age:userAge}={
//     name:"Max",
//     age:34
// };

// console.log(userName);
// console.log(userAge);

//8 Spread Operator
// const hobbies=["Sports","Cooking"];
// const user={
//     name:"max",
//     age: 34
// }

// const newHobbies=["Reading"];
// const mergeHobbies=[...hobbies, ...newHobbies]; // add hobbies and newHobbies
// console.log(mergeHobbies);

// const extendeduser={
//     isAdmin:true,
//     ...user         //add user data
// }
// console.log(extendeduser);


// const prompt=require("prompt-sync")({sigint:true}); 

// const password = prompt('Your Password');
// if (password === "Hello") {
//     console.log("Hello Works");
// } else if (password === "hello") {
//     console.log("hello works");
// } else {
//     console.log("Access not granted.");
// }

//9 for loop
// const hobbies=["Sports","Cooking"];
// for (const hobby of hobbies){
//     console.log(hobby);
// }

// const list= document.querySelector("ul");
// list.remove();// will not use as react ill do it itself

//10
//time out also why not to pass method but just method for time out

// function handleTimeout(){
//     console.log("Time out!");
// }
// const handleTimeout2=()=>{
//     console.log("Timed out ... again!");
// }

// setTimeout(handleTimeout,2000);
// setTimeout(handleTimeout2,3000);
// setTimeout(()=>{
//     console.log("More timing out...");
// }, 4000);

// function greeter(greetFn){
//     greetFn();
// }

// greeter(()=> console.log("Hi"));

//10 scoped inside of init it is estimated
// function init(){
//     function greet(){
//         console.log('hi!');
//     }
//     greet();
// }

// init();

//11 always producing new values when dealing with primitive values
let userMessage='hello!';
userMessage=userMessage.concat('!!!');

//here this changes for object and arrays, as reference does not need a new object everytime we we add something
const hobbies=["Sports","Cooking"]; //const does not mean value cannot be eddited but value cannot be over written i.e. hobbies=[]
hobbies.push("Working");
console.log(hobbies);


