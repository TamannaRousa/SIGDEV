let todo=[];
let req = prompt("plz enter your request");

while(true){
    if(req=="quit"){
        console.log("Quiting app");
        break;
    }
    if(req=="list"){
        console.log("---------------");
        for(let i=0; i<todo.length; i++){
            console.log(i, todo[i]);
        }
        console.log("---------------");

    }else if(req =="add"){
        let task = prompt("enter your task");
        todo.push(task);
        console.log("Task added!");
    }
    else if(req == "delete"){
        let idx = prompt("plz enter the task index");
        todo.splice(idx, 1);//delete till nxt element
    }

    req = console.log("enter your next request");
}