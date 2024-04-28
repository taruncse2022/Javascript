let score = "tarun"

//console.log(typeof score);
//console.log(typeof(score));

let valueInNumber = Number(score)
//console.log(typeof valueInNumber);
//console.log(valueInNumber);


// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let isLoggedIn = "tarun"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "tarun" => true

let someNumber = 10

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

/* ------------------------------------------OPERATIONS--------------------------------------------------- */

let value = 5
let negValue = -value
//console.log(negValue);

let str1 = "Hello "
let str2 = "World"

let str3 = str1 + str2 
//console.log(str3);      => Hello World

//console.log(1 + 2);     => 3
//console.log("1" + 2);     => 12
//console.log(1 + "2");     => 12
//console.log("1" + 1 + 2);     =>112
//console.log(1 + 1 + "2");       =>22  
//console.log((1 + 2) * 5 % 3);     =>0
//console.log(true);    =>true
//console.log(+true);   =>1         //has to avoid this 
//console.log(+false);    =>0       //has to avoid this
//console.log(+"");     =>0         //has to avoid this

let num1 , num2 , num3
num1 = num2 = num3 = 2 + 2 //try to avoid these thing just simply write 4 instead of 2+2

let gameCounter = 100
++gameCounter
console.log(gameCounter);
