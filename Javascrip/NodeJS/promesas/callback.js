function saludar(name="hola Edwin callback"){
    console.warn(`hola ${name}`);
}
function esperarYSaludar(name,callback){
    setTimeout(()=>{
        const error = !name
        ? new Error('no hay nombre para saludar')
        :null 
        

        const result = name 
        ? `${name} fue saludado`
        : null 

        saludar(name)
        if(callback) return callback(error, result)
    },500);
}

module.exports = esperarYSaludar;