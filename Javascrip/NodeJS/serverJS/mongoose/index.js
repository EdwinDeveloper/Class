const express = require('express');
const app = express();

app.get('./dishes',(req,res)=>{
    console.log('>> Hola Dishes');
    res.send("Hola");
});
app.listen(8080,()=>{
    console.log('i am up koders');
})