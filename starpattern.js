// *
// *
// *
// *
// *



// for(let  i = 1; i<=5; i++){
//     console.log("*")
// }

// * * * * *

// let str = ""
// for(let  i = 1; i<=5; i++){
//      str = str + "* "
// }

// console.log(str)



// * * * * *
// * * * * *
// * * * * *


// for(let x = 1; x<=3; x++){
//          let str = ""
//         for(let  i = 1; i<=5; i++){
//             str = str + "* "
//         }

//         console.log(str)
// }



// ***** 
// *****
// *****

// for(let line = 1; line<=3; line++){

//    let str = ""
//     for(let col = 1; col<=5; col++){
//         // process.stdout.write("*")
//         str = str + "*"
//     }
//     console.log(str)

// }


// *
// **
// ***
// ****
// *****


// for(let line = 1; line<=5; line++){

//     let str = ""
//      for(let col = 1; col<=line; col++){
         
//          str = str + "*"
//      }
//      console.log(str)
 
//  }


// *
// ***
// *****
// *******
// *********
// let numberOfStars = 1
// for(let line = 1; line<=5; line++){

//     let str = ""
//      for(let col = 1; col<= 2*line-1; col++){
         
//          str = str + "*"
//      }
//      console.log(str)

//      numberOfStars = numberOfStars + 2
 
//  }

 // line => 1 , col => 1 - 1, numberOfStars = 3

 // line => 2 , col => 1 - 3 , numberOfStars = 5

    // line => 3 , col => 1 - 5 , numberOfStars = 7

 
    // line:  1, 2, 3, 4, 5
    // num:   1, 3, 5, 7, 9  => 2*n+1, 2n-1
    // even  => 2n


// 1
// 12
// 123
// 1234
// 12345


// for(let line = 1; line<=5; line++){

//     let str = ""
//      for(let col = 1; col<=line; col++){
         
//          str = str +  col
//      }
//      console.log(str)

//  }

//  line = 1  => 1-1
//  line = 2  => 1-2
//  line = 3  => 1-3
//  line = 4  => 1-4
//  line = 5  => 1-5



// 1
// 22
// 333
// 4444
// 55555


// for(let line = 1; line<=5; line++){

//     let str = ""
//      for(let col = 1; col<=line; col++){
         
//          str = str + line
//      }
//      console.log(str)

//  }

 // line 1 => col 1 => 1
 // line 2 => col 1-2 => 2 2
 // line 3 => col 1-3 => 3 3 3


//  1
//  2 3
//  4 5 6
//  7 8 9 10
//  11 12 13 14 15



//  1
//  2 3
//  1 2 3
//  1 2 3 1
//  2 3 1 2 3


// 1
// 2 1
// 3 2 1
// 4 3 2 1
// 5 4 3 2 1


// 5
// 4 5
// 3 4 5
// 2 3 4 5
// 1 2 3 4 5


   //      1
    //    12
    //   123
    //  1234
    // 12345 


// hey ai generate a diamond pattern    
//      *
//    * * *
//   * * * * *
//  * * * * * * *
// * * * * * * * * *
//   * * * * * * *
//    * * * * *
//     ***
//      *




let numberOfStars = 1 
let numberOfSpaces = 4
for(let line = 1; line<=9; line++){
   let s1 = ""
  for(let spaces = 1; spaces<=numberOfSpaces; spaces++){
      s1 = s1 + " "
  }
  
   let str = ""
   for(let col = 1; col<=numberOfStars; col++){
       str = str + "*"
   } 
   console.log(s1+str)
  // console.log(str)
   
  
  
  if(line < 5){
      numberOfStars = numberOfStars+2
      numberOfSpaces = numberOfSpaces - 1
  }
  else if(line>=5){
     numberOfStars = numberOfStars - 2
     numberOfSpaces = numberOfSpaces +1
  }
}