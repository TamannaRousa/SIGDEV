//key press -->game start
//array
let gameSeq = [];
let userSeq = [];

let btns = ["yellow","red","green","purplea"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress",function(){//keypress on screen not on console
    if(started == false){
      console.log("game is started");
      started = true;
      document.querySelector("body").style.backgroundColor = "white";


      levelUp();
    }
});

//random button flash + level 2
function gameFlash(btn){
  btn.classList.add("flash");
  setTimeout(function(){
  btn.classList.remove("flash");
   },250);
}

function userFlash(btn){
  btn.classList.add("userflash");
  setTimeout(function(){
  btn.classList.remove("userflash");
   },250);
}

function levelUp(){
  userSeq = [];
  level++;
  h2.innerText = `Level ${level}`;

  //random color generate
  let randIdx = Math.floor(Math.random() * 4);
  let randColor =  btns[randIdx];
  let randbtn = document.querySelector(`.${randColor}`);
  gameSeq.push(randColor);
  console.log(gameSeq);
  
  // console.log(randIdx);
  // console.log(randColor);
  // console.log(randbtn);
  gameFlash(randbtn);
}

function checkAns(idx){
  // let idx = level-1;

  if(userSeq[idx] === gameSeq[idx]){
    if(userSeq.length == gameSeq.length){
       setTimeout(levelUp,1000);
    }
  }else{
  h2.innerHTML = `Game over! Press any key to start <b> ${level}</b> <br> Press any key to start`;
  document.querySelector("body").style.backgroundColor = "red";
  // setTimeout(function (){
  // document.querySelector("body").style.backgroundColor = "white";},150);
  reset();
  }
}

function btnPress(){
  // console.log(this);//this is the recent button pressed
  let btn = this;
  userFlash(btn);

  userColor =  btn.getAttribute("id");
  userSeq.push(userColor);
  
  checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
  btn.addEventListener("click", btnPress);
}

function reset(){
      started = false;
      gameSeq =[];
      userSeq = [];
      level = 0;
}