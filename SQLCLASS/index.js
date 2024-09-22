const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');

const express = require('express');
const app = express();
const path = require("path");
const methodOverride = require("method-override");

app.use(methodOverride("_method"));
app.use(express.urlencoded({extended: true}));//to pass form data
app.set("view engine","ejs");
app.set("views", path.join(__dirname, "/views"));

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'sigma_app',
    password:"root1011"
  });

  let getRandomUser = () => {
    return [
      faker.string.uuid(),//faker generating all 4 values
      faker.internet.userName(),
      faker.internet.email(),
      faker.internet.password(),
    ];
  }

  //Home route
  app.get("/", (req,res) =>{
    let q = `SELECT count(*) FROM user`;
    try{
        connection.query(q, (err,result) => {
            if(err) throw err;
            let count = result[0]["count(*)"];
            res.render("home.ejs",{count});
        });
    }catch(err){
        console.log(err);
        res.send("some error in DB");
    }
  });

//Show route
app.get("/user", (req,res) => {
    let q = `SELECT * FROM user`;
    try{
        connection.query(q, (err,users) => {
            if(err) throw err;
            res.render("showusers.ejs",{users});
        });
    }catch(err){
        console.log(err);
        res.send("some error in DB");
    }
});
//edit route
app.get("/user/:id/edit",(req,res) =>{
    let {id} = req.params;
    let q = `SELECT * FROM user WHERE id ='${id}' `;
    try{
        connection.query(q, (err,result) => {
            if(err) throw err;
            let user =result[0];
            res.render("edit.ejs",{user});
        });
    }catch(err){
        console.log(err);
        res.send("some error in DB");
    }
})

//UPDATE(DB) route
app.patch("/user/:id",(req,res) => {
    let {id} = req.params;
    let {password: formPass, username :newUsername} = req.body;
    let q = `SELECT * FROM user WHERE id ='${id}' `;
    try{
        connection.query(q, (err,result) => {
            if(err) throw err;
            let user =result[0];
            if(formPass!=user.password){
                res.send("WRONG PASSWORD");
            } else{
                let q2 = `UPDATE user SET username='${newUsername}' WHERE id='${id}'`;
                connection.query(q2,(err,result)=>{
                    if(err) throw err;//error
                    res.redirect("/user");//correct response
                })
            }
        });
    }catch(err){
        console.log(err);
        res.send("some error in DB");
    }
});


  app.listen("3000",()=>{
    console.log("server is listening to port 3000");
  })
//   console.log(getRandomUser());

//   //Inserting new data
// let q = "INSERT INTO user (id, username, email, password) VALUES ?";//insertion query for multiple users

// let data =[];
// for(let i=0;i<=100;i++){
//     data.push(getRandomUser());//100 fake users data
// }

// try{
//     connection.query(q,[data],(err,result)=>{
//         if(err) throw err;
//         console.log(result);
//     });
// } catch(err){
//     console.log(err);
// }

// connection.end();

  