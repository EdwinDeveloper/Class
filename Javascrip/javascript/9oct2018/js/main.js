//var x = 'alert(\'hola'\)';

function cambiarTexto(){
    document.getElementById("ejemplo").innerHTML = "Nuevo Texto";
}
function regresarTexto(){
    document.getElementsByClassName("ejemplo")[0].innerHTML = "Hola amigos";
}
function cambiar(argumento){
    argumento.innerHTML = "Segunda Opcion";
}
function regresar(argumento){
    argumento.innerHTML = "Hola amigos";
}
var posicion=0;
// var elemento=document//primer parametro es el evento, el segundo es la funciona, tercero es la propagacion 
//     .getElementsByTagName('div')[2]
//     .addEventListener('click',function(){
//         console.log("eventListener");
//     });
    document.getElementById('uno')
    .addEventListener('click',function(e){
        this.style.backgroundColor="orange";
        console.log('div uno abuelo',e)
    },false);
    document.getElementById('dos')
    .addEventListener('click',function(e){
        e.stopPropagation();
        this.style.backgroundColor="brown";
        console.log('div dos padre',e)
    },false);
    // document.getElementById('tres')
    // .addEventListener('click',function(e){
    //     console.log('div tres hijo',e)
    // },true);
function posicionando(){
    var color = ["red","blue"];
    var opcionDeColor="";
    posicion=posicion+1;

    return posicion;
}