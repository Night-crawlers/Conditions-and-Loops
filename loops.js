// q1:
// Take two numbers and find product of all numbers between them that satisfy following condition (inclusive range):
// -> Numbers should be even
// -> Second last digit of number is 4

// Input:
// Two lines of input each containing a single integer.
// Output:
// A single integer which is the product of all such numbers which follow the above mentioned conditions.

// Example:

// Case 1:
// Input:
// 10
// 20
// Output:
// 0

// Case 2:
// 30
// 40
// Output:
// 40







// let a = 10
// let b = 20
// let product = 1
// let flag = false
// for(let i = a; i<=b; i++){
//     // even => i%2==0
//     // 4998765467
//     let last2Digit = i%100 // 67
//     let secondLastDigit =  parseInt(last2Digit/10) // 6.7 => 6

//     if(i%2==0 && secondLastDigit==4){
//         product = product * i
//         flag = true
//     }
// }
// // flag == false ? console.log(0) : console.log(product)
// console.log(flag ? product : 0)










// q2: Take a number and print all its digits  

// let n = 568 

// let last = n%10 // 8

// n = parseInt(n/10) // 56.8 => 56


// //  n = reminaing // 56

//  last = n%10 // 6

//  n = parseInt(n/10) // 5.6 => 5


//  //  n = reminaing // 5

//  last = n%10 // 5

//  n = parseInt(n/10) // 0.5 => 0

// let n = 563
// while(n>0){
//     let last = n%10 // 3,6,5
//     console.log(last)
//     n = parseInt(n/10) // 0.5 => 0
// }


// print the numbers in the actual order 
// 563 => 
    // 5,
    // 6,
    // 3




// q3: 
// *****
// *****
// *****




// for(let lines = 1; lines<=3; lines++){

// }



// *
// *
// *


// for(let i = 1; i<=3; i++){
//     console.log("*")
// }

// process.stdout.write("*")



// *******
// 1234567


// let str=""
// for(let i = 1; i<=5; i++){
//             str = str + i
// // i = 1 => str = "" + "*" => "*"
// // i = 2 => str = "*" + "*" => "**"
// // i = 3 => str = "**" + "*" => "***"
// // i = 4 => str = "***" + "*" => "****"
// // i = 5 => str = "****" + "*" => "*****"
// }
// console.log(str)



// let ans = 36 + "64"

// console.log(ans, typeof ans)