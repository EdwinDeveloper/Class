document.getElementById('formulario').addEventListener('submit',function(e){
    e.preventDefault();
    var nombre= document.getElementById('nombre').value;
    var pelicula= document.getElementById('pelicula').value;
    var objeto={
        "nombre":nombre,
        "pelicula":pelicula
    }
    localStorage.setItem(objeto.nombre,JSON.stringify(objeto));
    console.log(objeto);
   
});
for(var i in localStorage){
    if(typeof localStorage[i] ==='string'){
        var valorstorage = JSON.parse(localStorage[i]);
        var textNode=document.createTextNode(valorstorage.nombre);
        var p=document.createElement('p');
        p.appendChild(textNode);
        var principal= document.getElementsByClassName('principal')[0];
        principal.appendChild(p);
    }  
}