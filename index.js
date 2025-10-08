const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send("Hello Chiru Welcome to Backend-Dev");
});
app.get('/about',(req,res)=>{
    res.send("Chiru Backend-Dev");
});

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});

