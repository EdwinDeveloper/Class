function saludar(name="pepitoPromesa"){
    console.warn(`Hola ${name}`);
}
function esperarYSaludar(name){
    return new Promise((resolve,reject)=>{
        if(!name) return reject(new Error('No hay nombre para saludar'));
        setTimeout(()=>{
            saludar(name);
            resolve(`${name} fue saludado`);
        },5000);
    });
}
module.exports = esperarYSaludar;