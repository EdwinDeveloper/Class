const { copyFile } = require('fs');

copyFile('./file.txt','./copied.txt',error=>{
    if(error) return console.error('Error : ',error);
    console.log('Copiado sin problema');
});