// var $xhttp= new XMLHttpRequest();//instanciamos un objeto que ya existe
// $xhttp.onreadystatechange= function(){//verifica los cambios del estado UNA PROPIEDAD
//     console.log("Estado : "+this.readyState,"Estatus : "+this.status);
//     if(this.readyState===4 && this.status === 200){
//         var $response= this.responseText;

//         document.getElementById('ajax-res').innerHTML = $response;
//         //document.getElementById('ajax-res').innerText = $response;
//     }else if(this.readyState===4 && this.status === 404){
//         alert('error 404');
//     }
// }//ES UN LISTENER(EVENTO) CAMBIO DE ESTADO
// $xhttp.open('GET'/*METODO HTTP*/,'ajax/ajax_uno.txt'/*URL a enlazar*/,true/*si es asyncrono o no*/);//metodo  true sincrono, false ascyncrono
// $xhttp.send();//Si colocamos algo dentro del send es POST
// //sincrono NO TE DEJO AVANZAR SI NO TERMINAS OTRO PROCESO
// //ASINCRONO PUEDES AVANZAR Y DEJAR EL PROCESO TRABAJANDO
// //GET LIMITA EL NUMERO DE CARACTERES , POST NO, EJEMPLO IMAGENES

function fetchData(url,cFunction,extraFunction){
    var $xhttp=new XMLHttpRequest();
        $xhttp.onreadystatechange = function(){
            console.log("Estado : "+this.readyState,"Estatus : "+this.status);
            if(this.readyState===4 && this.status===200){
                // var $response = this.responseText;
                // console.log($response);
                cFunction(this.response);
                extraFunction();
            }else if(this.readyState===4 && this.status === 404){
                     alert('error 404');
            }
        }
        $xhttp.open('GET',url,true);
        $xhttp.send();
}
function fetchBootcamp($respuesta){
    console.log(typeof($respuesta));
    console.log(typeof(JSON.parse($respuesta)));
    console.log(JSON.stringify($respuesta));
}
function extra(){
    console.log('esta es mi funcion extra');
}
fetchData('./ajax/kodemia_white.json',fetchBootcamp,extra);