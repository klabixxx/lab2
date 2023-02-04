//server.js
const express = require('express');
const app = express();
const fs = require('fs')
require('dotenv').config();

app.use(function(request, response, next){
     
    let now = new Date();
    let hour = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let data = `${hour}:${minutes}:${seconds} ${request.method} ${request.url} ${request.get("user-agent")}`;
    console.log(data);
    fs.appendFile("server.log", data + "\n", function(){});
    next();
});
app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.get("/developer", (req, res)  =>{

    res.send({developer_name: process.env.DEVELOPER_NAME, year: process.env.YEAR});
});

module.exports = app;
