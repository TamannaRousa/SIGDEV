//function in JS
     //1 func definition
     function abc(){
        console.log("abc");
     }
    //2func call
    abc();
    
    //isAdult
    function isAdult(){
        let age = 10;
        if(age>18){
            console.log("adult");
        }
        else{
            console.log("not"); 
        }
    }
    isAdult();

    //dice 1-6
    //Math.randm()-->btw 0-1 so *6 and +1 for 5.5to6
    function rollDice(){
    let random = Math.floor(Math.random() * 6) + 1;//here 6 tell the range of random numbers & +1 says range will be from 1-6
    console.log(random);
    }
    rollDice();

    //func with arguements
    function printName(name,age){
        console.log(name,age);
    }
    printName("tamanna",20);//maintain order of arguements while calling function
    printName(23,"tamanna");//this is wrong but not give any error

    //avg func
    function avg(a,b,c){
        let avrg = a+b+c/3;
        console.log(avrg);
    }
    avg(1,3,5);

    function printTable(n){
        for(let i=n ; i<=n*10; i+=n){
            console.log(i); 
        }
    }
    printTable(4);

    //return keyword in function
    function sum(a,b){
        return a+b;
    }
    console.log(sum(sum(1,3),4));//this will cal 2+3=5 then 5+4

    //array of string concatenation
    let str =["apple","banana","cat"];

    function concat(str){
        let result ="";

        for(let i=0;i<str.length;i++){
            result+=str[i];
        }
        return result;
    }
    console.log(concat(str));

    //scope-
       //1.function scope - variables inside function not applicable outside fucntion but can define same name of variable outside that function
       let sum1 =44;//global scope - can be used anywhere in file

       function calSum(a,b){
        let sum2 = a+b;//function scope - only accessible in function
        return sum2;
       }

       //2.Block scope -{inside this variable}
       {
        let a=23;
       }
    //    console.log(a);//not print but if a is var not let it will print

       //3.Lexical Scope - nested functions concept -->variables of outsdie func can be used by inner function just after outer but only when variables are defined before inner function
       function outerFunc(){
        let x=4;
        let y=3;
        function innerFunc(){//function scope -only inside function print krege
           console.log(x);
        }
        // let x=4;
        // let y=3;//not here
        innerFunc();
       }

       //Question output - hello namaste / inner func nt call only one nmste
       let greet = 'hello';//global scope

       function changeGreet(){
        let greet ="namste";
        console.log(greet);//function scope
        function innerFunc() {
            console.log(greet);//lexical scope
        }
       }
       console.log(greet);
       changeGreet();
       
       //function expression = defin in a variable
       let add = function(z,d) {
          return z+d;
       }

       let hell = function() {
          console.log("hello");
       }
       //call- this will call by variable()
       console.log(add(1,2));
       hell();

       //HIGHER ORDER fUnctions = multiple call func
       function multipleGreet(func, count) {
         for(let v=1;v<=count; v++){
            func();
         }
       }

       let greeet = function(){
         console.log("cvjsghj");
       }
       multipleGreet(greeet,2);//greeet()= cause it will execute greet print hello
       multipleGreet(function() {console.log("qnns")}, 2);//no variable used here

       //higher order func that return a function
       function oddEvenTest(request) {
        if(request =="odd"){
            let odd =  function(){
                console.log(!(n%2==0));
            }
            return odd;
        }
            else if(request=="even"){
                let even = function() {
                    console.log(n%2==0);  
                }
                return even;
            }
            else{
                console.log("wrong request");
            }
        }
       console.log(oddEvenTest("odd"));
       
       //methods = that can be perfom on an object
       const calculator = {
        add: function(a,b) {
            return a+b;
        },
        subt: function(a,b) {
            return a-b;
        },
        mult: function(a,b) {
            return a*b;
        }
       };
       console.log(calculator.add(2,3));
       
       //Methods Shorthand - without : and function
       const calculaor = {
        add(a,b) {
            return a+b;
        },
        subt(a,b) {
            return a-b;
        },
        mult(a,b) {
            return a*b;
        }
       };

       //func to return arrray elements larger than a number
       let arr1 = [];
       function largerElements(arr,numb){
        for(let i=1;i<arr.length;i++){
            if(arr[i]>numb){
              arr1.push(arr[i]);
            }
        }
        return arr1;
       }
       console.log(largerElements([2,3,4,5],3));
       
       //function to extract unique character fom a string
       let result = "";
       function uniqueChar(strr){ 
          for(let i=0;i<strr.length;i++){
            let currChar = strr[i];
            if(result.indexOf(currChar) == -1){//not exists in result
                 result+= currChar;
            }
          }
          return result;
       }
       console.log(uniqueChar("abbbbsbcbc"));
       
       //function that accepts a list of country names as input and output returns longest country name as o/p
       let output=""; 
       function longestCountry(country){
            let largest = country[0];
            for(let i=1;i<country.length;i++){
                if(country[i].length > largest.length){
                    largest = country[i];
                    output = largest;
                }
                else{
                    output = country[0];
                }
            }
            return output;
        }
        console.log(longestCountry(["Australia","usa","India"]));
        
        //function to generate a random number within a range(start,end);
        let start = 3;
        let end = 5;
        function ran(){
            let diff = end - start + 1 ;
            let randomNum = Math.floor(Math.random()*diff) + start;
            console.log(randomNum);
        }
        ran();