// var numbers=[1,2,3,4,3]

// var normal = numbers.map(function(n){
//     return n+1;
// });

// let suma = () =>{

// }

//console.log(let arra[] =numbers.map((n)=>{ n+1;}));

const circles = [
    {
        name:"circle1",
        radio:30
    },
    {
        name:"circle2",
        radio:12
    },
    {
        name:"circle3",
        radio:4.5
    },
    {
        name:"circle4",
        radio:12.3
    }
]
const PI=3.1416;
let areas = () =>{
    circles.forEach(circle => {
        format(circle.name,circle.radio);
        //console.log("El area de : "+circle.name+ " es "+ PI*(circle.radio**2)+" U2 ");
    });
}
const format = (nombre,radio,extra,er)=>{
    let area = PI*(radio**2)
    // console.log( `El area de ${nombre} es : ${area} `);
}
areas();

const suma = (x,y=2,z=10) => `La suma es ${ x + y + z }. `;
//console.log(suma(1,3,3));

var fisrtNumbers = [6,7,8,9,8];
var allnumbers = [1,2,3,...fisrtNumbers,4,5]
//console.log(allnumbers);
var saludo = "meus amigos do brasil";
//console.log([...saludo]);//convierte en array
//console.log({...saludo})//convierte en objeto

var firstNames = [
    {
        name:"alguien"
    },
    {
        name:"alguien"
    },
    {
        name:"alguien"
    },
    {
        name:"alguien"
    }
]
//console.log({...firstNames});

const alumnos=["uno","dos","tres"];
const asistencia = (x,y,...z) => {
    //console.log(x,y,z);
}
asistencia(1,2,3,87,alumnos);

var x=1,y=2,z;
var obj={x,y,z};
console.log(obj);

var n= [1,2,3,4,5,6];

var [a,,b,c,,d]=n;

console.log([a,,b]);

var obj={
    nombre:"Edwin",
    edad:23,
    sas:23
}
var {nombre,edad,otro}=obj;

console.log({nombre,edad,otro});


