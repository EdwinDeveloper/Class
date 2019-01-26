const fs = require('fs');

//asincrono not bloking
fs.readFile('./file.txt','UTF8',(error,data)=>{
    if(error) return console.error(">> Error : ",error);
    console.log('>> File Content',data);
});

//sincrono bloking 
const txtcontent = fs.readFileSync('./file.txt','utf8');
console.log('txt content',txtcontent);