const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.send("Jenkins CI/CD Working Successfully!");
})

app.listen("3000",()=>{
    console.log("Server is runnning on port 3000");
})