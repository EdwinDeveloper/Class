const express=require('express');

const app = express();

app.use((req,res,next)=>{
    console.log('Time : ',new Date());
    //res.write("Main middleware");
    next();
});

app.use('/',  (req, res, next) =>{
    console.log('Request Type:', req.method)
    next();
  })

app.get('/user',(req,res)=>{
    const json ={
        Date:new Date(),
        message:"GET method"
    }
    console.log("GET method");
    res.write(JSON.stringify(json));
    res.end();
});



app.listen(8081,()=>{
    console.log("Server Up");
})