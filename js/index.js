/* 1. There are three types of variable in Javascript 
   var,let,const Five thinks to decliare a variable (var -> variable name, numberOne variable name decliare, than = equal this is assignment operator, than finally variable value 4444 and last ;)
*/
var numberOne = 4444; // 4444 which is type of number value
var numberTwo = 5.555; // 5.555 this one also type of number value
let developerName = "Al-Amin Sir"; // Al-Amin sir this is string type value
let securityName = "MD Sabbir Hosain Rafi"; // Another string variable
const studentID = 1160; // Also number variable

// 2. What is the diffrance between var,let,const variable?
/* i. 
First of all about var variable, there are two same variable name declare but variable value is diffrent in this case when variable name print into console.log function the programme read naxt one and print "Sabbir".
 */
var name = "Rafi";
var name = "Sabbir";
console.log(name);

/* ii.
Than explore let variable, three let variable declare but two variable name same another variable diffrent. so, in this declaration multiple same variable can't be assign value because of this is a syntax error and let is private variable.
*/
// let id = 9000;
let id = 8000;
let engineer = "xyz";
console.log(id); // Output will be syntax error
console.log(engineer); // Output will show xyz

/* iii.
Third one is const variable it is constant type variable multiple same variable can't be assign value because of this is a syntax error and const is private variable and constant.
*/
// const abc = 9;
const abc = "Bangladesh";
console.log(abc);

// 3. { } script 
{
   let num = 5+5;
   console.log(num);
}
// console.log(num);
/*
num is undifine because of second console.log print outside of script tag and another reasone let is private variable and also same think is about const
*/

/* 4. Concatenation and sumation,substract,multiplication and division operation using let,var,const variable
*/

const number1 = 500;
const number2 = 900;
const sum = number1+number2;
const sub = number2-number1;
const mul = number2*number1;
const div = number2/number1;
const mod = number2%number1;

console.log(number1+" "+"+"+" "+number2+" "+"="+" "+sum);
console.log(number2+" "+"-"+" "+number1+" "+"="+" "+sub);
console.log(number2+" "+"X"+" "+number1+" "+"="+" "+mul);
console.log(number2+" "+"/"+" "+number1+" "+"="+" "+div);
console.log(number2+" "+"%"+" "+number1+" "+"="+" "+mod);

 