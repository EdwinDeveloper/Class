const express=require('express');
const app=express();

const html={
    Nombre:"Edwin Giovanni",
    Ciudad:"Puerto Vallarta"
};
const kodemia=`
<!DOCTYPE THML>
<h1>kodemia</h1>
`;

app.post('/',(req,resp)=>{
    resp.send(html);
});
app.post('/kodemia',(req,resp)=>{
    resp.send(kodemia);
});
app.listen(8080,()=>{
    console.log("App listen in port 8080");
});