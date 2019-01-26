const fs = require('fs');
var dato="Edwin";

//Crear un nuevo archivo
// fs.writeFileSync('nuevo.txt',dato,(error)=>{
//     if(error) return console.log("Error");
// });

//Añadir nueva linea de texto al archivo
// fs.appendFile('otro.txt',dato,(error)=>{
//     if(error) return console.log("Error");
// });

//METODOs SYNCRONO NO HAY CALLBACK, PARA CACHAR LOS ERRORES SE USA EL TRY CATCH
//TODOS LOS METODOS DEL FS TIENEN METODOS ASYNCRONOS
// fs.appendFile(7,'otro.txt',(error)=>{
//     if(error) return console.log("Error");
// });


//DELETE A FILE 
// fs.unlink('nuevo.txt',(error)=>{
//     if(error) return console.log("Error, there was problem");
//     console.log("File Deleted");
// });

//CREATE A DIRECTORY
// fs.mkdir('nuevaCarpeta',(error)=>{
//     if(error) return console.log("Error, there was problem"+error);
//     console.log("Directory Created");
// });

//ELIMINAR DIRECTORIO CON ARCHIVOS DENTRO
// fs.readdir('nuevaCarpeta',(error,files)=>{
//     if(error) return console.error(error);
//     files.forEach(file=>{
//         fs.unlinkSync(`nuevaCarpeta/${file}`);  
//     });
//     fs.rmdir('nuevaCarpeta',(error)=>{
//         if(error) return console.error(error);
//         console.warn("carpeta Eliminada");
//     });

    
// })

//ELIMINAR DIRECTORIOS CON ARCHIVOS DENTRO METODO 2
// const dirName = 'dir';
// try {
//     const files = fs.readdirSync(dirName);
//     //const hasFiles = files.length>0;
//     //if(hasFiles){
//         files.forEach(file=>{
//             fs.unlinkSync(`./${dirName}/${file}`);
//         });
//         fs.rmdirSync(dirName);
//     //}
// } catch (error) {
//     console.error('No se pudo borrar',error);
// }