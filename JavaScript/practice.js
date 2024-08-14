let arr = [1,2,3,4,5,6,2,3];
let num =2;

for(let i=0;i<arr.length;i++){
    if(arr[i]==num){
        arr.splice(i,1);
    }
}

console.log(arr);

let number = 2871533332;
// let count = (number.toString()).length;
let count =0;
while(number!=0){
    count++;
    number = Math.floor(number/10);
    
}
console.log(count);
let sum = 0;

while(number!=0){
    let rem = Math.floor(number)%10;//to neglect decimal after values
    sum+=rem;
    number=number/10;
    
}
console.log(sum);

//factorial
let n = 1;
function fact(n){
  if(n==0  || n==1){
    return 1;
  }
  return n*fact(n-1);
}

console.log(fact(n));

//largest number in an array with only +ve numbers
let ar = [2,4,51,11,3,2,4];
let largest =0;
for(let k=0;k<arr.length;k++){
    if(ar[k]>largest){
        largest = ar[k];
    }
}
console.log(largest);