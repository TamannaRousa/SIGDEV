//Array Methods
   //1 forEach
   let arr = [1,2,3,4];

    arr.forEach(function(){
       console.log(el);//el = individual element in array
   })

    arr.forEach( (el) =>{
       console.log(el);
})

//example
let arr1 = [
    {
        name: "a",
        marks: 45
    },
    {
        name: "b",
        marks: 47
    },
    {
        name: "c",
        marks: 50
    },
];
//printing individual students marks
arr1.forEach( (student) =>{
  console.log(student);
});
// map used here
  let gpa = arr1.map((el)=>{
       return marks/10;
  });

    //2 Map()
   let num = [1,2,8,3];

   let double = num.map ( (el)=>{})//no value it comntain 
   let double1 = num.map ( (el)=>{
    console.log(el);
    
   })// it comntain num values in double through map

   //3 filter() - depend upon condition or filter is true
   let ans = num.filter((el)=>{
    return el%2==0;//true for even,false for odd
   });

   //4 every()
   let arr2 = [2,4,6].every((el)=> el%2 ==0);//print true for every element

   //reduce() - reduce arr too single value -->(accumulatot,element) ->for el1 el=1 acc=0+el1 = 1 return->el2=acc1+el2->el3=acc2+el3
   let arr3 = [1,2,3,4].reduce( (res,el) => (res+el));

   //max in array using reduce
   let max = num.reduce( (max,el) =>{//max=0(acc) el=num[i0]
    if(max < el){
        return el;
    }else{
        return max;
    }
   });
   console.log(max);

   //numbers in array are multipls of 10 or not
   let isMult = num.every( (el)=> el%10==0);
   console.log(isMult);
   
   //min muber in an array
   let minNumb = num.reduce( (min,el) =>{
      if(el<min){
        return el;
      }else{
        return min;
      }
   });
   console.log(minNumb);
   
   //Default parameters - giving a default value to the arguements
   function sum(a,b=3){
    return a+b;
   }
   sum(2);//5- work when only one parameter given
   sum(3,5);//8

   //spread - expand an iterable into multiple values
   console.log(Math.min(...num));//...=spread travers in array using 3dots
   console.log(...num);//print every elemet by spreading not print array num
   
   //spread with Array literals
   let ar = [...[1,2,3,34,5]];
   let chars = [..."hello"];
   console.log(chars);
   
   let odd=[1,3,5,7];
   let even=[2,4,6,8];
   let nums = [...odd,...even];//first odd then even
   console.log(nums);

    //spread with object literals
   const data ={
    emal: "a@gmail.com",
    password: "abcd"
   };
    const dataCopy ={...data, id:124, country:"India"};//...data will copy same in datacopy and extra id and country will be added

    let obj1 = {..."hello"};//obj1 object h then hello will print with indexes
    let obj2 = {...even};//same even elements print eith their indexes 

   //Rest - allow func to take indefinite no of agruements and bundle them in an array
    //rest used when arguements not used as methods
        //arguements is a collection
    function sum(...args){// spread args used when we dont know number of input limit it will add any number of elements and group them
        for(let i=0; i<args.length; i++){
            console.log("you gave me: ",agrs[i]); 
            // return arguements.reduce((sum,el) =>sum+el);//this will not work as args not function  
            return args.reduce((sum,el) =>sum+el);//this will work as use of rest ...args 
        }
    }
    function minn(){
        console.log(arguments);
        console.log(arguments.length);
        arguments.push(1);//not works as not a function
    }

//Destructuring

let names = ["tom","jerry","rob","mob"];
// let first = names[0];
// let second = names[1];
// let third = names[2];
let [first,second,...others] = names;//destructure + Rest concept

const student ={
    name:"tamanna",
    age:13,
    class:9,
    subjects: ["Hindi","Eng","Maths"],
    username: "tamanna111",
    password: "swcdcc"
};
 let username = student.username;

1
let sum=0;
let avg1 = 0;
let avg = (arr) =>{
    for(let i=0;i<arr.length;i++){
        sum = sum + Math.sqrt(arr[i]);
    }
    return Math.floor(sum/arr.length); 
}

Ques1
let arrr=[2,4,6,8];
let summ = arrr.map((summ,el) => (summ+el*el)/arrr.length)
console.log(summ);



//Ques2
let a =[2,3,4];

const b = a.map((el)=>{
    return el+5;
})

Ques3
let array1 = ["apple","car"]

let array2 = array1.map((el)=>el.toUpperCase());
console.log(array2);
console.log("hello");

//Ques4
let array = [1,2,3];
function doubleAndReturnArgs(array,...args){
     args.map((el)=> array.push(el*2));  
    // double.forEach(element =>{
    //        array.push(element);
    // });
    console.log(args);
    
    return array;
};
console.log(doubleAndReturnArgs(array,1,3,4));

// Ques5
let car = {
    fname: "Kia",
    type: "second",
};
let bike = {
    lname: "R15",
    model: "advanced",
};
const margeObjects = (car,bike) => ({...car, ...bike});
console.log(margeObjects(car,bike));//cannot take same key





