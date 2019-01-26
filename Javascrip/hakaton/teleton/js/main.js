//ligar base de Datos en Firebase
var database = firebase.database();
//referencia al nodo users
var usersReference = database.ref("/users"); 
var usersCollection;
usersReference.on('value',function(snapshot/*baja cada coleccion */){
debugger
    usersCollection = snapshot.val();
	getCollectionData();
})
// function getCollectionData() {
// 	$("#wrapper").empty();
//     $.each(usersCollection, function(key, value) {
//         console.log(value.name)
//         console.log(value.age)
//         console.log(value.email)
//         console.log(value.phone)
//         console.log(value.address)

//         $("#wrapper").append(`
//             <tr class="wrapper">
//                 <td id="name">${value.name}</td>
//                 <td id="age">${value.age}</td>
//                 <td id="email">${value.email}</td>
//                 <td id="phone">${value.phone}</td>
//                 <td id="address">${value.address}</td>
//                 <td><button id="Edit" class="btn btn-warning" >Editar</button></td>
//                 <td><button id="del" class="btn btn-danger">Borrar</button></td>
//             </tr>
//         `)
//     });
// }
function getCollectinData() {
	$("#show-information").empty();
    $.each(coleccionDeFinanzas, function(key, value) {
        console.log(value.capacidadDeNinos)
        console.log(value.descripcion)
        console.log(value.ingresosComprimetidos)
        console.log(value.ingresosEsperados)
        console.log(value.numeroDeNinosPorCubrir)

        $("#show-information").append(`
            <tr class="main-table">
                <td id="capacidad">${value.capacidadDeNinos}</td>
                <td id="descripcion">${value.descripcion}</td>
                <td id="ingresosComprometidos">${value.ingresosComprimetidos}</td>
                <td id="ingresosEsperados">${value.ingresosEsperados}</td>
                <td id="numeroDeNinosPorCubrir">${value.numeroDeNinosPorCubrir}</td>
                <td><button id="Edit" class="btn btn-warning" >Editar</button></td>
                <td><button id="del" class="btn btn-danger">Borrar</button></td>
            </tr>
        `)
    });
}

function getUserData(){
    var usersObject={};
	var usersName = $("#users-name").val();
	var usersAge = $("#users-age").val();
	var usersEmail = $("#users-email").val();
    var usersPhone = $("#users-phone").val();
	var usersAddress = $("#users-address").val();
    usersObject.name=usersName;
    usersObject.age=usersAge;
    usersObject.email=usersEmail;
    usersObject.phone=usersPhone;
    usersObject.address=usersAddress;
    console.log(usersObject)
    usersReference.push(usersObject)
}

$("#submit-button").on("click",function(e){
    getUserData();
    alert("Se ha guardado correctamente el usuario")

})
$("#btnLimpiar").click(function(e) {
    $("#form")[0].reset();
});
function delUserData(){
    alert("funcionando")
}

$("#del").on("click",function(e){

	delUserData();

});
// $("#add").click(function(evento){
//     alert( "Este boton tendría que Ocultar y mostrar el Formulario para agregar nuevos usuarios" );

// })
// $("#del").click(function(){
//     alert( "Funciona" );
// }
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