const fs = require('fs');

//Eliminar
// fs.unlink('./hola',error=>{
//     if(error) return console.error("Error"+error);
//     console.log("Archivo Eliminado");
// });

//ELIMINAR DIRECTORIO VACIO
// fs.rmdir('./hola',error=>{
//     if(error) return console.error("Error"+error);
//     console.log("Archivo Eliminado");
// });


//ELIMINAR DIRECTORIOS CON ARCHIVOS
fs.readdir('./newDir',(error,files)=>{
    files.forEach(file => {
        fs.unlink(`./newDir/"${file}`,(error)=>{
            if(error) return console.error("Error en "+error);
            console.warn("File deleted");
        });
    });
    if(error) return console.error("Error en : "+error);
    //console.warn("Directory deleted");
    console.log("Borrando carpeta");
    setTimeout(()=>{
        fs.rmdir("./newDir",(error)=>{
            if(error) return console.error("Error en  : "+error);
            console.warn("Carpeta final eliminada");
        })
    },500);
    

});