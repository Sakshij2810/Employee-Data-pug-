const express = require("express");
const axios = require("axios");

const app = express();

app.set("view engine", "pug");

app.get("/", async(req, res) => { //to render json data 
    const query = await axios.get("http://localhost:3001/results"); //getting data into query, fetch data from json server
    res.render("index", { employees: query.data }); //passing control to the template
})

app.listen(3000, ()=>{
    console.log(`Server is running on PORT 3000`);
})