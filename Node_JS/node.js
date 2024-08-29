// //Node REPL 
// let n =5;

// for(let i=0; i<n; i++){
//     console.log("hello, ",i);
// }

//Process- tis obj provides info about 
// let args = process.argv

// for(let i=2; i<args.length; i++){
//     console.log("hello , welcome to ", args[i]);
// }
//using properties of any file by module.exports
// const someValue = require("./math");
// console.log(someValue);

const info = require("./Fruits");
console.log(info); 
// o/p--->[
//     { name: 'apple', color: 'red' },
//     { name: 'mango', color: 'yellow' },
//     { name: 'banana', color: 'yellow' }
//   ]
