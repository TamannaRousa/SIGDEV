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
  case "yellow": 
    console.log("READY!");
    break;
  case "green": 
    console.log("GO!");
    break;
  default:
    console.log("NO RULE!");
}

console.log("after switch stt");

let day = 1;
switch(day){
    case 1:
    console.log("Monday");
    break;
    case 2: 
    console.log("Tuesday");
    break;
    case 3: 
    console.log("Wednesday");
    break;
    case 4: 
    console.log("Thursday");
    break;
    case 5: 
    console.log("Friday");
    break;
    case 6: 
    console.log("Saturday");
    break;
    case 7: 
    console.log("Sunday");
    break;
    default:
    console.log("NO RULE!");
}
//null
let abc = null;//have to define null 
//undefined
let abc1 ;//need not to define

//concatenation=+
console.log("abscsd"+1);

//string length
let firsname = "Tamanna";
console.log(firsname.length);
console.log(firsname[3]);

//truthy-value(except falsy everything has true values) & falsy-value(0,-0,"",undefined,null)
if(true){
    console.log("true values");
}
else{
    console.log("flase values");
}

//alerts & errors & warning  in JS
alert("Warning!");
console.error("ERROR !");
console.warn("WARNING!");

//prompt
let firname = prompt("enter name");
console.log(firname);

//largest of 3 numbers
let x =523;
let y=34;
let z=240;

if(x>y){
    if(y>z){
    console.log("x is greatest");
    }
    else{
        console.log("z is greatest");  
    }
}
else if(y>z){
    if(z>x){
        console.log("y is greatest");
    }
    else{
        console.log("z is greatest");
    }
}
//question
let name = prompt("enter name");
alert(`${name}`);

//string methods - toLowerCase & toUpperCase
//with arguements

let msg = "    IloveIndex";
msg.trim();
//msg.trim().toUpperCase();
msg.indexOf("love");
msg.indexOf("l");
msg.slice(1,6);
msg.replace("love","do");
msg.repeat(3);
