// console.log(5 > 4);
// console.log(5 < 4);
// console.log(5 >= 4);
// console.log(5 <= 4);
// console.log(5 == 4);

// console.log("4" > 1);
// console.log("04" > 1);

// console.log(null > 0);  //comparisons convert null to a number , treating it as 0 so 0>0 is false  
// console.log(null == 0); 
// console.log(null >= 0); //comparisons convert null to a number , treating it as 0 so 0>=0 is true 

// console.log(undefined > 0);
// console.log(undefined == 0);
// console.log(undefined < 0); 

/* ------------------TRY TO AVOID USING NULL AND UNDEFINED IN COMPARISON------------------------*/

// === it compare the number or string but also check wether the same datatype is present or not

console.log("2" === 2);     //false as datatype is different
console.log("2" === "2");   //true
console.log(2 === 2);       //true