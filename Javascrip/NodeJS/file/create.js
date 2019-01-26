const fs=require('fs');
const obj={
    Nombre:"Edwin Giovanni",
    Ciudad:"Puerto Vallarta"
}
const content = JSON.stringify(obj);

////Ascyncrono
// fs.writeFile('./create.json',content,error=>{
//     if(error) return console.error('Error:',error);
//     console.warn('Archivo Creado');
// })


//Sincrono
try {
    const x=2;
    if(x===1) throw new Error('New error, adds nudes');
    console.log('hola \\o/  it\'s');
    //fs.writeFileSync('./noexiste/created.txt',content);
} catch (error) {
    console.error("Error : "+error);
}
console.warn("We're still alive");
