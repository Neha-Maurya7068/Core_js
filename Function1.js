// ***************** Function *********************

/*
function  ->  Keywords
greet   ->   Function_Name
()   ->   Parameters
{ }   ->  Function Body

greet()   ->   Function_Signature
function greet ()   ->   Function Decleration  
function greet (){ ... }    ->   Function_Defination

2 - Types Of Functions ...
- No Args Function
- Parametrized Function

*/

// No-Args Function  ...


// function greet () {
//     console.log("Good Morning...");
// }
// greet()


// Parametrized Function ...

// function greet(name) {
//     console.log("Good Morning ",name);
    
// }

// greet("Neha");


// function getSum(a, b){
    // console.log(a + b);
    // let sum = a + b;
    // console.log("Sumation Is : ",sum);
    // return a + b;
    // return sum;
    
    // console.log("Hello");  // unreachable code / Dead Code
      
// }
// // let sum = getSum(12, 13);
// // console.log(sum);

// console.log(getSum(12, 13));

// Function Expression **********

//  let data = function() {
//     console.log("Function Expression !!");
    
// }

// data();

// Default Function **********

// function fillForm(name = "Unknown") {
    
//     console.log("Form Filled by",name);
    

// }

// // fillForm();
// fillForm("Neha");



// Function As an Object ************


// function getDeatils() {
//     console.log("Function....");
    
// }

// getDeatils.city = "Noida";

// console.log(getDeatils.city);


// Arrow Function *********** () => {}

// let getData = ()=>{
//     console.log("Get Data");
    
// }
// getData()


// let data = (n)=> n*10;

// let data = (n)=> {return n*10 };

// let data = n => n*10;
// console.log(data(12));



// IIFE **************** ()()

// ( function (){
//     console.log("This Is IIFE");
    
// }) ()


// Rest Parameter ...

// function getNumber(a, b , ...n){
//     console.log("A : ",a);
//     console.log("B : ",b);
//     // console.log("C : ",c);
//     // console.log("D : ",d);
//     // console.log("E : ",e);
    
//     console.log(n);
        
// }

// getNumber(10, 20, 30, 40, 50);


// CallBack **********************

// function greet(name){
//     console.log("Good Morning ",name);
    
// }

// function saySomething(a){  
//     let n = "Neha";
//     console.log("This is saySomething");
//     // console.log(a);
//     a(n);
  
// }

// saySomething(greet);


// Filter **********

// let arr = [1, 2, 3, 4, 5, 6, 7];

// let result = arr.filter( n => n >= 1  )

// console.log(result);


// Map ******************


// let arr = [1, 2, 3, 4, 5, 6, 7];

//  let result = arr.map( n => n*5  )

// console.log(result);

// Reduce 

// let arr = [1, 2, 3, 4, 5];

// let sum = arr.reduce( (a, b) => {

//     return a + b;
// },0 )

// console.log(sum);



//  HOF ***********

// function greet(name){
//     console.log("Good Morning ",name);
    
// }

// function saySomething(a){  
//     let n = "Neha";
//     console.log("This is saySomething");
//     // console.log(a);
//     a(n);
  
// }

// saySomething(greet);


// Return Function *********


// function multiply(num1) {
    
//     return function(num2) {
//             return num1*num2;
//              }
// }


// let result = multiply(12);
// let result1 = result(2);

// console.log(result1);


// let result = multiply(25)(4);
// console.log(result);

// function greet(name) {
//     return function(){
//         return `good Morning ${name}`;
//     }
    
// }

// let result = greet("Neha")()
// console.log(result);



// Closure *****************

// function outer() {

//     let name = "Neha";
//     return inner;

//     function inner() {
//         console.log("Hello From Inner Function",name);
        
//     }
    
// }

// let result = outer();
// result();







function getCounter() {
    let count = 0;
    return counter;
    
    function counter(){
        count++;
        return count;
    }
    
}

let count = getCounter();

console.log(count());  // 1
console.log(count());  // 2
console.log(count());  // 3





