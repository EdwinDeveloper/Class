const http = require('http');
let json = {
    success:true,
    message:"Oi kevin, tudo bem?",
    maisImformacao:"kkkkkkkk"
}
http.createServer((req,res)=>{
    res.write(JSON.stringify(json));
    res.end();
}).listen(8081,()=>{
    console.log("Server up");
});