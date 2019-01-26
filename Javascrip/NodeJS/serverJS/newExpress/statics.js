const express= require('express');
const app=express();

const json={
    Nombre:"Edwin Giovanni",
    Ciudad:"Puerto Vallarta"
}
app.get('/',(req,resp)=>{
    resp.send('hola');
});
app.use('/static',express.static('images'));

app.listen(8080,()=>{
    console.warn("Escuchando desde express");
});
