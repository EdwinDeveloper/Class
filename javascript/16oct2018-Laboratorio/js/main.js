// var formu=document.getElementById('formu').addEventListener('submit',(e)=>{
//     e.preventDefault();
//     console.log("hola");
//     var $alumnos =  ['carlos',"juan","maria","caro","memo","cassandra"];
//     var c = $alumnos.filter(($alumno)=> {
//         return $alumno[0]==="c"
//     });
//     console.log(c);
// });
// var palabra = "hola";
// console.log([...palabra].reverse().join(''));

// Ejercicio 1  CONSOLE
// var resultado="&nbsp&nbsp&nbsp&nbsp*";
// var nuevovalor=resultado;
// var tercero="&nbsp";
// for(var i=0;i<5;i++){
//     document.write(resultado+"<br>");
//     resultado=resultado+"*";
// }

// Ejercicio 1 DOCUMENT WRITE
// var array = ['&nbsp','&nbsp','&nbsp','&nbsp','&nbsp'];
// contador=4;
// for(let x=0;x<6;x++){
//     array.forEach((valor)=>{
//         document.write(valor);
//     });
//     document.write('<br>');
//     array[contador]="*";
//     contador--;
// }

//
//Ejercicio 2
//Obtenemos el objeto donde el usuario introduce el correo
var $dato1=document.getElementById('dato1');

//Asignamos funcion addEventListener al boton
var $dato=document.getElementById('ejecutar').addEventListener('click',($e)=>{
    //Prevenimos la recarga de la pagina 
    $e.preventDefault();
    //Asignamos el valor de input a una variable y poderla utilizar
    var $correoPorUsuario=$dato1.value;
    //Mandamos la variable a la funcion validar el correo
    validarCorreo($correoPorUsuario);
});
function validarCorreo($nuevoCorreo){
    //Array de apoyo
    var $correos = [];
    //Se asigna el correo del usuario en la primera posicion del array de apoyo
    $correos[0] = $nuevoCorreo; 
    //Nuestros correo Registrados
    var $correosRegistrados = ["edwinperez@hotmail.com","kassandraperez@hotmail.com"];
    //array de asignacion primera parte del correo
    var $primeraParte=[];
    //array de asignacion correo ya modificado
    var $segundaParte=[];
    var $separado="";
    var $registrado="";

    //iteramos el correo que introdujo el usuario
    $correos.forEach(($correo)=>{
    //dividimos el dominio del correo
    $separado=$correo.split("@");
    //asignamos la primera parte del correo a una variable
    $primeraParte = $separado[0].split("");
    //console.log(primeraParte);
    //iteramos la primer parte del correo
    $primeraParte.forEach(($first)=>{
        if($first != "."){
            //Eliminanos los puntos de la primer parte
            $segundaParte= $segundaParte + $first;
        }
    });
    //Se vuelve a rearmar el correo del usuario ya sin puntos
    $segundaParte=$segundaParte+"@"+$separado[1];
    //console.log(segundaParte);
    //Se itera y compara el correo del usuario con los almacenados
    $correosRegistrados.forEach(($correo)=>{
        if($correo === $segundaParte){
            //Utilizamos una bandera
             $registrado="Registrado"
        }
        //console.log("arreglo: "+correo+" Insercion "+segundaParte+"validacion ");
    });
    
    if($registrado==="Registrado"){
        alert("Ya estas Registrado");
    }else{
        alert("Bienvenido");
    }
    //Si ya esta registrado escribimos en el dom
    document.write($registrado);
});
}


    