var maindiv=document.getElementsByClassName('peliculas')[0];
var peliculas = [{
    "nombre":"El despertar",
    "year":"1992",
    "genero":"Para todos"
},
{
    "nombre":"Titanic",
    "year":"1990",
    "genero":"Hola" 
}
]

for(var i in peliculas){
    var texto = peliculas[i].nombre;
   //console.log(texto);
    var TextNode=document.createTextNode(texto);
    var newp=document.createElement('p');
    maindiv.appendChild(newp);
    newp.appendChild(TextNode);
}
if(typeof(Storage) !== 'undefined'){
    //console.log('Local Storage Disponible');
   
}else{
    console.log('Local Storage Utilizado');
}
localStorage.setItem("cursos","Developer");
localStorage.setItem('objeto',JSON.stringify(peliculas));

console.log(localStorage.getItem("objeto"));

localStorage.getItem('cursos');


