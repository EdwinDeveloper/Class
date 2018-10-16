// var stop=document.getElementById('stop');
// var start=document.getElementById('start');
// var time;
// function timer(){
//      time = setInterval(function(){
//             console.log("Hola amigo mio");
//         },100);
// }
// timer();

// stop.addEventListener('click',function(){
//     clearInterval(time);
    
// });
// start.addEventListener('click',function(){
//     timer();
// });
// window.onload= function(){
//     si();   
// }
//     //var nombre=document.getElementById('nombre');
//     //var nombre = document.getElementById('nombre');
//     var nombre = document.getElementById('nombre');
//     // var apellidos = document.getElementById('apellidos').value;
//     // var edad = document.getElementById('edad').value;
// function si(){
    
//     document.getElementById('mainform').addEventListener('submit',function(e){
//     e.preventDefault();
//     console.log(nombre.value);
// });
// }

var botonreal= document.getElementById('realbutton');

botonreal.addEventListener('click',function(){
    this.style.border="solid 2px red";
    console.log(this);
});
