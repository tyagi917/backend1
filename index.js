const express=require('express');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
//const v1routes=require('./route/v1.js');
const postroute =require('./route/postroute')
mongoose.connect("mongodb://localhost:27017/candidates",{
	useNewUrlParser:true
})
mongoose.connection.on('connected',()=>{
	console.log("connection is succesfuuly");
})
mongoose.connection.on('err',()=>{
	console.log("Error:",err);
})
const port=5000;
const app=express();
app.use(bodyParser.json());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use('/post',postroute);

app.listen(port,console.log(`Example app listening at http://localhost:${port}`))
