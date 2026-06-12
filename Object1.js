// ************** Object *****************

// Object Using Literals *************

// let obj = {
//     name : "Neha",
//     "full name" : "Neha Kumari",
//     age : 18,
//     city : "Delhi",
// }

// obj.zCode = 12345;

// obj.name = "Sumit";
// console.log(obj);

// console.log(obj["full name"]);
// console.log(obj["name"]);

// Object.freeze(obj);

// delete obj.city;

// obj.city = "Noida";

// console.log(obj);

// console.log(obj.name);

// for(let i in obj){
//     console.log(i, " :- ", obj[i]);
    
// }

// console.log(typeof(obj));

// Object using Constructor *****************

// let car = new Object();

// car.brand = "BMW";
// car.color = "White";
// car.price = 12000;

// console.log(car);

// Function inside Object ****************

// let car = {
//     brand : "TATA",
//     model : "Punch",
//     color : "White",

//     start : function() {
//                 console.log("Start The Car");  
//                 }

// }

// console.log(car);

// console.log(car.start());

// car.start();


// object inside object ***************

// let student ={
//     name :"Neha",
//     age : 18,

//     add : {
//             city : "Noida",
//             Zcode : 123456,
//           }
// }

// console.log();

// console.log(student.add.city);
// console.log(student.add.Zcode);


// Optional Chaining ***************** ?. ************

// console.log(student?.add?.Zcode);


// let obj = {
//     name : "Neha",
//     age : 18,
//     city : "Delhi",
// }

// console.log(obj);

// Convert object in JSON Formate ***********

// let jsonData = JSON.stringify(obj);

// console.log(jsonData);   // {"name":"Neha","age":18,"city":"Delhi"}

// Convert JSON into Object **************

// let normalData = JSON.parse(jsonData);
// console.log(normalData);   // { name: 'Neha', age: 18, city: 'Delhi' }



// Destructure **********

// console.log(obj);

// let {name, age, city} = obj;

// console.log(name);
// console.log(age);
// console.log(city);


// Copy ****************

// let obj1 = obj;
// Deep Cloning ********************

// let copydata = JSON.stringify(obj);

// let obj1 = JSON.parse(copydata);

// obj1.zCode = 123456;

// console.log(obj1);
// console.log(obj);

// Spread Operator **************

// let obj1 = {
//     name : "Ayush",
//     age : 22
// }

// let obj2 = {
//     city : "Delhi",
//     zCode : 123456
// }

// let obj3 = {
//     education : "B-Tech",
//     marks : 9.8
// }

// let obj4 = {
//     job : "Developer",
//     salary : 35000
// }


// let newObj = {...obj1, ...obj2, ...obj3, ...obj4};
// console.log(newObj);


// *****************Object Used in assign method in acess**************


// let obj1 = {
//     name : "Ayush",
//     age : 22
// }

// // let obj2 = Object.assign({}, obj1 );

// ***************Spread operator ka use krke object ko acess kr sakte hai vo bhi ek ek value***********

// let obj2 = {...obj1};

// console.log(obj2);


// let obj = {
//     name : "Neha",
//     age : 18,
//     city : "Delhi"
// }
// Object convert in JSON formate into Normal Data

// let obj2 = JSON.parse (JSON.stringify(obj));


// console.log(obj2);



// let key = "age";

// let obj = {
//     name : "Neha",
//     age : 18,
// }

// console.log(obj[key]);

//  Dynamic type changed variable name******************

// let obj ={
//     "Full-Name" : "Neha Maurya",

// }

// let {"Full-Name" : CompleteName} = obj;

// console.log(CompleteName);

// *************Object Class ka use krke object me se value ko acess karana key and value ke pair****************

// let obj = {
//     name : "Neha",
//     age : 18,
//     city : "Delhi"
// }

// console.log(Object.keys(obj));
// console.log(Object.values(obj));

// access in entries method  used ************

// console.log(Object.entries(obj));

// ************for each method ka use krke entries ka object ko access krna ******************

// Object.entries(obj).forEach(function (n) {
//     console.log(n[0], " : ", n[1]);
    
// })




// let data = "job";

// let student = {
//     name : "Neha Maurya",
//     roll : 12,
//     add : "Noida",
//     [data] : "Developer",
// }

// console.log(student);
// console.log(student.job);


// class **************

// class Student {
   

//     // Method
//     greet(){
//         console.log("Good Morning");
        
//     }

// }


// // object

// let obj1 = new Student();

// obj1.greet();






// class Student {
   
//     constructor(roll, name){
//         this.roll = roll;
//         this.name = name;

//     }

//     greet(){
//         console.log(`Good Morning Roll No ${this.roll} Your Name Is ${this.name}`);
        
//     }

// }


// let obj1 = new Student(12, "Neha");

// obj1.greet();




// Inheritance

// class Animal {

//     constructor(name, color){
//         this.name = name;
//         this.color = color;
//     }

//     sound(){
//         console.log("Animal Make Sound...");
        
//     }

//     eat(){
//         console.log("Animal Eats...");
        
//     }
// }


// class Dog extends Animal {

//     sound(){
//         console.log(`${this.name} Barks 🐕🐶 And he is ${this.color}`);    
//     }

//     eat(){
//         console.log(`The ${this.color} Dog ${this.name} Eats Bone 🍖🦴`);
        
//     }
    
// }


// let d1 = new Dog("Tommy", "Black");
// d1.sound();
// d1.eat();




// class Animals {

//     constructor(name , color){
//     this.name = name;
//     this.color = color;

//     }

//     sound(){
//         console.log("The cow sound...");
        
//     }

//     eat(){
//         console.log("The cow eats....");
        
//     }

//     gave(){
//         console.log("The Cow gave Milk.......");
        
//     }

// }

// class Cow extends Animals {
//     sound(){
//         console.log(`${this.name} Moo ,and she is ${this.color}`);
        
//     }
//     eat(){
//         console.log(`The ${this.color} Cow ${this.name} Eats Grass `);
        
//     }

//     gave(){
//         console.log(`The ${this.name} gave Milk`);
        
//     }
// }

// let d1 = new Cow("fuleshri", "White");
// d1.eat();
// d1.sound();
// d1.gave();


