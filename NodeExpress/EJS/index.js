const express = require("express");
const app = express();

const port = 8000;

//app.set
app.set("view engine", "ejs");

app.get("/", (req,res) => {
    res.render("home.ejs");
});

app.listen(port, () =>{
    console.log(`listening on port ${port}`);
});
