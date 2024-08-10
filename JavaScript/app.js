console.log("Tamanna");
let a = 5;
let b=4;
let sum = 'The sum of a and b is $(a+b)';
// console.log(sum);

let age=20;
console.log(age>18);

//== compare only value nut === compare value as well as type
//character compare by UNICODE

//if 
console.log("before if");
let myage = 20;
if(age>18){
    console.log("vote");
    console.log("stat print inside it if condition true otherwise not");
}
console.log("after if");

//traffic lyt system
let color ="pink";
if(color=="red"){
    console.log("STOP!");
}
else if(color=="yellow"){
    console.log("READY!");
}
else if(color=="green"){
    console.log("GO!");
}
else{
    console.log("NO RULE!")
}

//GOOD STRING Practice
let str = "apple";
if(str[0] =='a' && str.length>3){
    console.log("goos string");
}
else{
    console.log("BAD");
}

//evry thing or string in boolean context if else it has its true or false value
//switch stat
let colour ="pink";
switch(colour){
   case "red":
    console.log("STOP!");
    break;
  case "yellow": {
    console.log("READY!");
    break;
  case "green": {
    console.log("GO!");
    break;
  default:
    console.log("NO RULE!");
}
