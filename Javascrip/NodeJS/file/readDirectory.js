const fs= require('fs');

fs.readdir('./newDir',(error,files)=>{
    if(error) return console.error("Error no se encontro : "+error);
    console.warn('Error\n'+files+"\n");
});