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



let obj = {
    name : "Neha Maurya",
    roll: 12,
    add: "Noida"
}



