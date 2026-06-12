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
//     // console.log(a + b);
//     let sum = a + b;
//     // console.log("Sumation Is : ",sum);
//     return sum;
    
//     // console.log("Hello");  // unreachable code / Dead Code
      
// }
// // let sum = getSum(12, 13);
// // console.log(sum);

// con sole.log(getSum(12, 13));

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


// function factFind (){
// let n = 5 
// let fact = 1;
// for(let i = 1; i <= n; i++) {

//      fact = fact * i;

// }
// console.log("Factorial is : ",fact);
// }
// factFind();




// let a = 1;
// let b = 2;
// for(i = 0; i <= 1; i++){
//     // return a + b;
    
// }
// // console.log(a + b);


// arr =  [1, 2, 3, 4, 5]
// let result = arr.reduce((a , b ) => a + b , 0);
// console.log(result);

// arr = [1 ,2 ,3 ,4]
// let result = arr.map((a , b) => a * b , 0);
// console.log(result);



// arr = [1,2,3,4]
// let result = arr.map(n => n*3) 
// console.log(result);



// arr =[1, 2 ,3 , 4]
// let result = arr.filter(n => n>=2)
// console.log(result);


// function Add(num1){
//     return function(num2){
//     return (num1 + num2)
//     }
// }

// result = Add(4)(7);
// console.log(result);


// Higher Order function****************************

// function greet(){
//     return function(name){
//         return `Good Morning ${name}`
//     }
// }
// result= greet()("Neha");
// console.log(result);


// function outer(){
//     let count = 0;

//     return inner;

//     function inner(){
//         count++;
//         return count;
        
//     }

// }
// let result = outer();
// console.log(result());



// function outer(){
//     let count = 10;

//     return inner;

//     function inner(){
//         count--;
//         return count;
        //     }

// }
// let result = outer();
// console.log(result());
// console.log(result()); 
// console.log(result());
// console.log(result());
// console.log(result());



function createCounter(){
    let count = 0;

    return{
        increment: function() {
            count++;
            return count;
        },

        decrement: function() {
            count--;
            return count;
        },

        reset: function(){
        count = 0;
        return count;
        },
getCount: function(){
    return count;
}
    };
}
 const myCounter = createCounter();

 console.log(myCounter.getCount());
 console.log(myCounter.increment());
 console.log(myCounter.increment());
 console.log(myCounter.increment());
 console.log(myCounter.decrement());
 console.log(myCounter.decrement());
 console.log(myCounter.reset());


 
//  console.log(myCounter.increment());

//  console.log(myCounter.getCount);
 
 
//  console.log(myCounter.decrement());

 
//  window. se emoji lga sakte hai********************
 
 
 






