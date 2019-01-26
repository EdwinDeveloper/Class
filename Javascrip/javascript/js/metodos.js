// var tennisOBJ ={
//     color: 'rojo',
//     precio: {
//         moneda:"MXN",
//         cantidad:1300
//     },
//     descuento: {
//         activo: false,
//         cantidad:0
//     },
//     marca:"Adidaa",
//     talla:"small",
//     nombre: "Stan Smith",
//     getTitulo: function (){
//         return this.nombre+" by "+this.marca;
//     }
// }
//////////////////////////////////////////////////////

function Pelicula(titulo,director,precio,descuento,anio){
    //funcion constructora
    this.titulo = titulo;
    this.director=director;
    this.precio=precio;
    this.descuento=descuento;
    this.anio=anio;
}


function filtrado(pelicula,anio){
    var arrayMovies=[];
    var venom=new Pelicula('Venom',"Fox",{moneda:"MXN",cantidad:500},{activo:false,cantidad:30},2018);
    var islaDePerros = new Pelicula('Isla de perros','Wes Anderson',{ moneda:'MXN', cantidad: 300 }, { activo: true, cantidad: 20 }, 2014);
    var LaCasaBlanca=new Pelicula('La casa Blanca',"EPN",{moneda:"USD",cantidad:90},{activo:true,cantidad:10},2016);
    var Avengers = new Pelicula('Avengers','Marvel',{ moneda:'COL', cantidad: 20 }, { activo: true, cantidad: 50 }, 2017);
    var Her=new Pelicula("Her","Scarlette",{moneda:"ARG",cantidad:50},{activo:false,cantidad:50},2010);
    arrayMovies.push(venom);
    arrayMovies.push(islaDePerros);
    arrayMovies.push(LaCasaBlanca);
    arrayMovies.push(Avengers);
    arrayMovies.push(Her);
    var nombre="";
    var anioPelicula=0;
    var precioFinal=0;
    for(var i =0;i<arrayMovies.length;i++){
        nombre=arrayMovies[i].titulo;
        anioPelicula=arrayMovies[i].anio;
        //console.log(nombre+";"+anioPelicula);
        if(arrayMovies[i].descuento.activo===true){
            precioFinal=arrayMovies[i].descuento.cantidad*(arrayMovies[i].precio.cantidad/100);
        }
        console.log(nombre);
        if(nombre==pelicula || anioPelicula==anio){
            console.log("Tu pelicula es : "+arrayMovies[i].titulo+" \n del año : "+arrayMovies[i].anio+"\n El precio total es: "+precioFinal);
    
        }else{
            console.log("No se encontro");
        }
    }
}
filtrado('',2018);