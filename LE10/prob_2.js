const express = require('express');
const app = express();

app.get("/",(req,res) =>{
	res.send("Hello World");
});

app.get("/juet",(req,res)=>{
	res.redirect('https://www.juet.ac.in');
});
app.listen(5000);