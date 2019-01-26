var boton=document.querySelector('#mybutton');
var div=document.querySelector('#inputextra');
boton.addEventListener('click',function(){
    console.log('tentando a los dioses');
})
div.addEventListener('focus',function(){
    console.log('enfocado');
});
div.addEventListener('blur',function(){
    console.log('saliendo del blur');
});
div.addEventListener('keydown',function(event){
    console.log(String.fromCharCode(event.keyCode));
});
div.addEventListener('keypress',function(event){
    console.log(String.fromCharCode(event.keyCode));
});
div.addEventListener('keyup',function(event){
    console.log(String.fromCharCode(event.keyCode));
});
var contador=0;
function intervalo(){
    var inter=setInterval(function(){
        console.log('setInterval');
        contador++;
        setInterval(function(){
            console.log(contador);
        },1000);
    },1000);
}
intervalo();
function cambiarColor(){
    var bg=boton.style.background;
    if(bg==='red'){
        boton.style.background='green';
    }else if(bg === 'green'){
        boton.style.background='orange';
    }
    else{
        boton.style.background='red';
    }
}
function saludar(){
    console.log('hola doble click');    
}