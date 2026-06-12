// ********** Loop ************

// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);


// For ************

// for(let i = 1; i <= 5; i++ ){
//     console.log(i);
    
// }

// for(let i = 1; i <= 10; i++ ){
//     console.log(i);
    
// }


// 1 + 2 + 3 + 4 + 5 = 15
// s = n(n+1) / 2 = 5(6)/2 => 30/2 = 15

// let sum = 0;
// for(let i = 1; i <= 5; i++ ){

//     // 0 + 1 = 1, 1 + 2 = 3, 3 + 3 = 6, 6 + 4 = 10, 10 + 5 = 15
//     // sum = sum + i;
//     sum += i;
   
// }
//  console.log(sum);


/*
Print The Table :-

2 X 1 = 2
2 X 2 = 4
2 X 3 = 6
2 X 4 = 8
2 X 5 = 10
2 X 6 = 12
2 X 7 = 14
2 X 8 = 16
2 X 9 = 18
2 X 10 = 20

*/


// for(let i = 1; i <= 10; i++){
//     console.log("2 X ",i, "=", 2*i );    
// }


// Factorial 
// 5! = 5 * 4 * 3 * 2 * 1 = 120

// let n = 7;
// let fact = 1;
// for(let i = 1; i <= n; i++) {

//      fact = fact * i;

// }

// console.log("Factorial is : ",fact);


// while Loop ***********

// let i = 1;

// while(i <= 5){

// console.log(i);

// i++;
// }

// let n = 123;

// let count = 0;
// while(n > 0){
//     count++;
//     n = Math.floor(n /10);

// }
// console.log("Total Digits Are : ",count);



// let n = 123;

// while(n > 0){
   
//     let rem = n % 10;
//     console.log("Digits : " ,rem);
    
//     n = Math.floor(n /10);

// }



// let n = 12345;
// let a = n;
// let rev = 0;

// while( n > 0){
//     let rem = n % 10
//    rev =  (rev * 10 ) + rem

//    n = Math.floor(n / 10)
// }
// if (a === rev){
//     console.log(a, "Number palindrome");
    
// }
// else{
//     console.log(a, " Number not palindrome");
    
// }
// console.log("Reverse :" ,rev);





// function isPrime(num) {
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) {
//             return false;
//         }
//     }
//     return num > 1;
// }

// function printPrimeNumbers(n) {
//     for (let i = 2; i <= n; i++) {
//         if (isPrime(i)) {
//             console.log(i);
//         }
//     }
// }

// printPrimeNumbers(100);



 function isPrime(num) {
    if (num <= 1) return false; 

    for (let i = 2; i <= Math.sqrt(num); i++) {  
        if (num % i === 0) {
            return false; 
        }
    }
    return true; 
}


let numbers = 97;

if (isPrime(numbers)) {
    console.log(numbers + " is a Prime number.");
} else {
    console.log(numbers + " is NOT a Prime number.");
}



function isPerfect(num) {
    if (num <= 1) return false; 

    let sum = 0;

    
    for (let i = 1; i <= num / 2; i++) {
        if (num % i === 0) {
            sum += i; 
        }
    }

    return sum === num; 
}


let number = 8128;

if (isPerfect(number)) {
    console.log(number + " is a Perfect Number.");
} else {
    console.log(number + " is NOT a Perfect Number.");
}



// for(i = 1; i <= 100; i++)
// {
//     console.log(i);
    
// }

// let n = 4;
// let fact = 1;
