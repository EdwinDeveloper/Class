window.onload = function(){//espera a que carge toda la pagina (el navegador)
    addListeners();
 } //como onreadystatechange pero verifica los cambios de la pagina
 function addListeners(e){
        document.getElementById('form-word').addEventListener('submit',function(e){
                e.preventDefault();
                var $description=document.getElementById('descripcion').value;
               // var $descriptionobj='"'+$description+'"'; 
                var $facebook=document.getElementById('facebook').value;
                var $nombre=document.getElementById('nombre').value;
                //var $objeto='{'+"'descripcion'"+":"+"'"+$description+"'"+","+"'facebook'"+":"+"'"+$facebook+"'"+","+"'nombreCompleto'"+":"+"'"+$nombre+"'"+"}";
                var obj={
                    'descripcion':$description,
                    'fb':$facebook,
                    'nombreCompleto':$nombre
                }
                var buenObj=JSON.stringify(obj);
                fetchData(buenObj);
        })
 }
function fetchData($objeto){
    var $xhttp =new XMLHttpRequest();
    $xhttp.onreadystatechange=function(){
        if(this.readyState===4 /*estado*/ && this.status===200 /*estatus*/){
                //var $respuesta= JSON.parse(this.response)[0].koders;
                //console.log($respuesta);
                console.log($objeto);
                
        }
    }
    $xhttp.open('POST','https://example2-189b5.firebaseio.com/kodemia/0/koders.json',true);
    $xhttp.send($objeto);
}