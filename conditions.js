// q1:
// if nis div by 3 => Hello 
// if n is div by 5 => World
// if n is div by 3 and 5 => HelloWorld


// let n = 5;

// if(n%3==0 && n%5==0){
//     console.log("HelloWorld")
// }
// else if(n%3==0){
//     console.log("Hello");
// }
// else if(n%5==0){
//     console.log("World")
// } 

 



// q2: You have been given a time in 24 hrs format. You need to give the time in 12 hrs format.

let hour = 0
let min = 10
let sec = 45
let amPM

// 4:10:45 PM , 12:56:45 afternoon
// 23:59:59 => 00:00:00 => 00:00:01 => 12:00:01 AM

if(hour > 12){ // 13:10:45, 14:10:45, 15:10:45, 16:10:45
   hour = hour - 12
   amPM = "PM"
}
else if(hour == 0){
    hour = 12
    amPM = "AM"
}
else if(hour<12){  // 10:10:45, 11:10:45 
    amPM = "AM"
}

else if(hour == 12){
    amPM = "PM"
}


console.log(hour+":"+min+":"+sec+" "+amPM)