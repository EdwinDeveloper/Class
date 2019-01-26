const express=require('express');

const app=express();

const logger = (req,resp,next)=>{
    console.log(`> log ${req.path}`);
    next();
}

const EdwinMiddleware=(req,resp,next)=>{
    console.log(`> Edwin MiddleWare log ${req.path}`);
    next();
}

app.use(logger);
const html=`
    <!DOCTYPE HTML>
    <h1>kodemia</h1>
`;
const EdwinHeader=`
    <!DOCTYPE HTML>
    <h1>Edwin Header</h1>
`;

const EdwinJson={
    Nombre:"Edwin Giovanni Perez Robles",
    Ciudad:"Puerto Vallarta"
}
app.get('/',(req,resp)=>{
    resp.send(html);
})
app.get('/Edwin',EdwinMiddleware,(req,resp)=>{
    resp.send(req.headers);

})
app.listen(8080,()=>{
    console.log('app listen in port 8080 middlewares');
});