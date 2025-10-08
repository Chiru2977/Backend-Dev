const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send("Hello Chiru Welcome to Backed-Dev");
});

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});

