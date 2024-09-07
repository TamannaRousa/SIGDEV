const express = require("express");
const app = express();
const path = require("path");

const port = 3000;

//app.set
app.set("view engine", "ejs");
app.set("views",path.join(__dirname,"/views"));
app.get("/", (req,res) => {
    res.render("home.ejs");//render-file
});

app.get("/hello", (req,res) => {
    res.send("hello");//send-normaltext
});

app.get("/ig/:username",(req,res)=>{
    let{username} = req.params;
    res.render("instagram.ejs",{username});
})
app.get("/rolldice", (req,res) => {
    // res.render("rolldice.ejs");//send-normaltext
    let diceVal = Math.floor(Math.random()*6)+1;
    res.render("rolldice.ejs", {diceVal});
});
app.listen(port, () =>{
    console.log(`listening on port ${port}`);
});
