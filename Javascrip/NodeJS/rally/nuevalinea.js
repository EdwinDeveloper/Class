const fs = require('fs');//archivos de sistema file system
var dato="Edwin Giovanni from Puerto Vallarta\n";

const string = 'kxodxexmxixax, cxhxaxrxlxesx';
const arrString= string.split(',');
//console.log('arrString : '+arrString);

const arrStringTrim = arrString.map(string =>string.trim());
//console.warn('arrStringTrim : ',arrStringTrim);

//const cleanStrings = arrStringTrim.map(string=>string.replace('x',''));
const cleanStrings = arrStringTrim.map(string=>string.replace(/x/g,''));
//console.log('limpio : '+cleanStrings);

// fs.readFile('csv.txt','UTF8',(error,data)=>{
//     if(error) return console.log('Error en : '+error);
//     console.log("La informacion es: "+typeof(JSON.stringify(data)));
//     const dataString=JSON.stringify(data);
//     const otro=dataString.split('\n');
//     console.log(otro);
// });

const fileInfo= fs.readFileSync('csv.txt','UTF8');
const fileString=fileInfo.toString();
const line=fileString.split('\n');
//const sinuno=line.slice(1);
//const json=JSON.stringify(line);
//console.log(sinuno);
const objline = line.reduce((acumulator,dato)=>{
    //console.log(dato);
    
    
    const arrayMentor=dato.split(',');
    
    const [ nombre , curso ] =arrayMentor;
    console.log(nombre,curso);
    const objMentor= { nombre,curso }
    //console.log(objMentor);
    return [...acumulator,objMentor];
    
    //console.log(arrayMentor);
});
const final={
    objline
}
fs.writeFileSync('archivo.json',JSON.stringify(final));