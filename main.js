function fun4(name) {
  return "Hi, " + name + "!";
}
var name = prompt("What is your name?");
let greeting = fun4(name);
console.log(greeting);

function fun9(number){
	if ( number < 0) {return "Number is negative"}
	else if (number > 0) {return "Number is positive"}
	else {return "Number is 0"}
}
var number = prompt("Enter a number");
let result = fun9(number);
console.log(result);

function fun6(a, b){
	sum = a**2 + b**2
	return sum 
}
var a = prompt("Enter the first number");
var b = prompt("Enter the second number");
sums = fun6(a ,b);
console.log(sums);
