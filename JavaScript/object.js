// object literals-store key value pairs
let student = {
    name :"apna",//string treat
    age:32,
    subjects:["eng","hindi"],
    1:"a",//number treat
    null :"null"
};
console.log(student);
console.log(student.name);

// first value in object internally convert t string and then give the value
student[1];
//but if by dot student.1 it give error as it doesnt convert int to string


//Add/Update Value
const student1 = {
    name :"apna",
    age:32,
    marks:70,
    city :"Noida"
};
//update
console.log(student1.city = "Mumbai");
//add
student1.gender;
console.log(student1.gender = "female");
//delete
delete student1.marks;


//  Object of Objects --> store multiple objects info
const classInfo = {
    aman: {
        grade:"A+",
        state:"Delhi"
    },
    tamanna: {
        grade:"B",
        state:"UP"
    }
}

console.log(classInfo);
console.log(classInfo.tamanna.state);

//obj in array
const classInfo1 = [
    {
        name:"tam",
        grade:"A+",
        state:"Delhi"
    },
      { 
        name:"vs",
        grade:"B",
        state:"UP"
    }
]

(console.logclassInfo[1].state="mp");

// math object

// object
const studentt = {
    name: "tamanna",
    age: 20,
    eng: 87,
    math: 32,
    phy: 53,
    getAvg(){
        console.log(this);
        // let avg = (eng+math+hindi)/3;
        let avg = (this.eng+this.math+this.hindi)/3; //by usinh this
        console.log(`${this.name} got avg marks = ${avg}`);
    }
}
//window object - outside object this describe in a function window.getAvg()
function getavg(){
    console.log(this);
    let avg = (this.eng+this.math+this.hindi)/3; //by usinh this
    console.log(`${this.name} got avg marks = ${avg}`);
}
window.getavg();//a window object(used to call function when nothinh is there by default it used) details. By default this value is window object . higher level value it is


//try & catch
console.log("hii");//if not use try before error one stst print but after one not so use try & cach togther
try{
    console.log(a);
} catch(err){
    console.log("Caught an error. a is not defined"); 
    console.log(err); 
}


//Miscellaneous Topics 
     //ARROW FUNCTIONS=>not like normal function definiton but same calling
     const sum1 = (a,b) => {
        console.log(a+b); 
     };
     sum1(2,4);

     const cube = (n) => {
        console.log(a*a*a); 
     };

     const power =(e,p) => {
        return e ** p;
     }
     console.log(power(2,3));
     
     //arrow func - implicit return/automatic return 
     const mul = (a,b) =>{
        a * b
     };
     //or
     const mul1 = (a,b) =>a * b;

     //setTimeout - inside it stat print after 1s timeout
     console.log("Hi");

    setTimeout( () => {
        console.log("tamanna");
    },1000);

     console.log("Hlwww");

     //setInterval-every 2s it will print
     setInterval( () => {
        console.log("tamanna");
    },2000);

    //
    let id = setInterval(() => {
        console.log("Hello worls"); 
    },2000);

    setTimeout ( () =>{
        clearInterval(id);
        console.log("clear interval");
        
    },10000);//after 10s clearInterval (stop setInterval) and print clear interval 

    // Ques1 arrow function that accepts an array of numbers and returns the avg of those numbers
    let sum=0;
    const arrayAvg = (arr) =>{
        for(let i=0;i<arr.length;i++){
           sum = sum +  arr[i];
        }
        return sum/arr.length;
    };
    let arr =[1,2,3];
    console.log(arrayAvg(arr));

    //Ques2 - isEven by arrow func
    const isEven = (n) => n%2==0
    //  console.log("Even"); give true , works without it
     ;
     console.log(isEven(4));
   

    