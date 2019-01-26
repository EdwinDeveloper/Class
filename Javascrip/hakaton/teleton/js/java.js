
//ligar base de Datos en Firebase
var database = firebase.database();
//referencia al nodo users
var referenciaFinanzasTeleton;
var totalEgresos = 0;
var currentEgresos = 0;

 var finanzasTeleton =firebase.database().ref('/institutos');

 var egresosReference = firebase.database().ref('/egresos');

 


 console.log(finanzasTeleton);
 function getDataReference(){
     var referenciaDeDonacion = $('#donacion-referencia').val();
     //console.log(referenciaDeDonacion);
    //  firebase.database().ref('/references/'+referenciaDeDonacion).on('value',function(snapshot){
    //      //console.log(snapshot.val());
    //      referenciaFinanzasTeleton = snapshot.val(); //RT0001//
    //      //console.log(referenciaFinanzasTeleton);
    //      firebase.database().ref('/institutos/'+referenciaFinanzasTeleton.institutos).on('value',function(snapshot){
    //          console.log(snapshot.val());
    //          var critObject=snapshot.val()
    //          $("body").append(`<h1>${critObject.DESCRIPCIÓN}</h1>`)
    //      });
    //  })
    firebase.database().ref('/references/'+referenciaDeDonacion).on('value',function(snapshot){
        //console.log(snapshot.val());
        referenciaFinanzasTeleton=snapshot.val();
        console.log(referenciaFinanzasTeleton)//Instito asociado a la referencia//
        egresosReference.on("value",function(snapshot){
          var egresos = snapshot.val();
          var egresosArray = [];
          $.each(egresos,function(key,value){
            totalEgresos += 1;
              egresosArray.push(value)
          })
        
          let matchEgresos = egresosArray.filter(egreso => egreso.FL_PACIENTE == referenciaFinanzasTeleton);
          console.log(matchEgresos)
          currentEgresos = matchEgresos.length;
          console.log(currentEgresos)
          
        })
        firebase.database().ref('/institutos/'+referenciaFinanzasTeleton).on('value',function(snapshot){
          console.log(snapshot.val());           
        });
    });
 }
// function getCollectinData() {
// 	$("#show-information").empty();
//     $.each(coleccionDeFinanzas, function(key, value) {
//         console.log(value.capacidadDeNinos)
//         console.log(value.descripcion)
//         console.log(value.ingresosComprimetidos)
//         console.log(value.ingresosEsperados)
//         console.log(value.numeroDeNinosPorCubrir)

//         $("#show-information").append(`
//             <tr class="main-table">
//                 <td id="capacidad">${value.capacidadDeNinos}</td>
//                 <td id="descripcion">${value.descripcion}</td>
//                 <td id="ingresosComprometidos">${value.ingresosComprimetidos}</td>
//                 <td id="ingresosEsperados">${value.ingresosEsperados}</td>
//                 <td id="numeroDeNinosPorCubrir">${value.numeroDeNinosPorCubrir}</td>
//                 <td><button id="Edit" class="btn btn-warning" >Editar</button></td>
//                 <td><button id="del" class="btn btn-danger">Borrar</button></td>
//             </tr>
//         `)
//     });
// }

// $("#submit-button").on("click",function(e){
//     getUserData();
//     alert("Se ha guardado correctamente el usuario")

// })
// $("#btnLimpiar").click(function(e) {
//     $("#form")[0].reset();
// });
// function delUserData(){
//     alert("funcionando")
// }

// $("#del").on("click",function(e){

// 	delUserData();

// });
// $("#add").click(function(evento){
//     alert( "Este boton tendría que Ocultar y mostrar el Formulario para agregar nuevos usuarios" );

// })
// $("#del").click(function(){
//     alert( "Funciona" );
// }

// var options = {
//   width: 400,
//   height: 240,
//   title: 'Toppings I Like On My Pizza',
//   colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6']
// };

// fisrtGraph.draw(data, options);

$(document).ready(function(){
    $("#add").click(function () {
       $("#form").each(function() {
         displaying = $(this).css("display");
         if(displaying == "block") {
           $(this).fadeOut('slow',function() {
            $(this).css("display","none");
           });
         } else {
           $(this).fadeIn('slow',function() {
             $(this).css("display","block");
           });
         }
       });
     });
   });



   //var institutoOBJ=snapshot.val();
            // $("body").append(`<h1 class="">Ubicacion del Crid :  ${institutoOBJ.descripcion}</h1>
            //                   <h2 class="">Capacidad de usuarios :  ${institutoOBJ.capacidad}</h2>
            //                   <h3 class="">Recursos por recaudar :  ${institutoOBJ.recRecaudar}</h3>
            // `);