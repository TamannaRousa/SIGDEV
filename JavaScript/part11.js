//Call Stack (function call in another func)
function hello(){
    console.log("hello");
    
}
function demo(){
   hello();
}
demo();

//Visualizing call stack
function one(){
    return 1;
}

function two(){
    return one() + one();
}

function threee(){
    let ans = two() + one();
    console.log(ans); 
}
threee();
//Breakpoints - for debugging in browser

//JS is single threaded - one work at a time(call backs help in this issue & setTimout also works)
let a = 25;
console.log(a);
let b = 10;
console.log(b);
console.log(a+b);

//setTimout - multiple threading 
setTimeout(function() {
    console.log("apna collge"); 
},2000);
console.log("hello...");

setTimeout(function() {
    console.log("collge"); 
},2000);
console.log("hello...");

//
h1 = document.querySelector('h1');

function changeColor(color){
setTimeout(()=>{
    h1.style.color  = "red";
},1000);

setTimeout(()=>{
    h1.style.color  = "orange";
},2000);

setTimeout(()=>{
    h1.style.color  = "green";
},3000);

}
