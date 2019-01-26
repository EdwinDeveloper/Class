const saludar=require('./promesas.js');

//CALLBACKS
// saludar(null,(error,data)=>{
//     if(error) return console.error('Error:',error)//if error SALIDAS TEMPRANAS detiene el flujo
//     console.warn('DONE : ',data);
// });

//PROMESAS
// saludar('Yovas')
//     .then(response=>{
//         console.warn('>> then',response);
//     }).catch( error =>{
//         console.error('>>Error:',error);
//     });

//ASCYN AWAIT ///PROMESA!!!!!!!!!!
async function main(){
    const result = await saludar('charles');
    const result2 = await saludar('Edwin');
    console.warn('>>result',result);
    console.warn('>>result',result2);
}
main();