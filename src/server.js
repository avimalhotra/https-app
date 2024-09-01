const express=require('express');
var app=express();
var bodyParser=require("body-parser");
var https=require('https');
var http=require("http")
var fs=require('fs');
var options = {
    key: fs.readFileSync('conf/private-key.pem'), 
    cert: fs.readFileSync('conf/public-cert.pem'),
    //ca:[fs.readFileSync('conf/')]
    };

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/',(req,res)=>{
    res.send("hi");
})

var data=["sun","mon","tues","wed","thurs","fri","sat"];

app.get("/api",(req,res)=>{
    //res.header('Access-Control-Allow-Origin',"*")
   
    //console.log(res.json(req.body));
     return res.send(data)
})


var httpsServer=https.createServer( options, app);
var httpServer=http.createServer(app);


httpServer.listen(3000,()=>{
    console.log(`http://127.0.0.1:3000`)
})

httpServer.listen(3030,()=>{
    console.log(`https://127.0.0.1:3030`)
})
