const express = require("express");
const app = express();
const fs=require('fs');
const path = require('path');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true })); 

app.get('/form', function(req, res) {
  res.sendfile("form.html");
});

app.post('/login',(req,res)=>{
	var name=req.body.name;
	var age=req.body.age;
	console.log(name);
	console.log(age);
	reply="Hi your name is "+name+" and age is "+age;
	res.send(reply);
	fs.writeFile('message.txt',reply,(err)=>{
		if(err) throw err;
		console.log("File saved");
});
});
app.listen(3000);