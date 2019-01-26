//alert("hola");
var database=firebase.database();
var busquedaReferencia=document.getElementById("busquedaReferencia");
var botonReferencia=document.getElementById("submit-referencia");
var campoTextoReferencia=document.getElementById("idReferencia");

if(botonReferencia != null){
    botonReferencia.addEventListener("click",getReferenceData);
}
var userReference=database.ref("/usuarios-Teleton");
var donateDonate=database.ref("/Donativos");
var finanzasTeleton=database.ref("/finanzasTeleton");
var userCollection;
var ColeccionDeDonativos;
userReference.on('value',function(snapshot){
    userCollection=snapshot.val();
    getCollectionData();
});
donateDonate.on('value',function(snapReferencia){
    ColeccionDeDonativos=snapReferencia.val();
});
function getReferenceData(){
    $("#mainReferencia").empty();
    $.each(ColeccionDeDonativos,function(key,value){
        $("#mainReferencia").append( 
            `
            <tr>
                <th>Cantidad</th>
                <th>Fecha Fecha</th>
                <th>Institución</th>
                <th>Referencia</th>
                <th>Status</th>
            </tr>
            <tr class="datosUsuarios">
                <td id="Donativo-Cantidad">${value.donativoCantidad}</td>
                <td id="Donativo-fecha">${value.donativoFecha}</td>
                <td id="Donativo-Institucion">${value.donativoInstitucion}</td>
                <td id="Donativo-Referencia">${value.donativoReferencia}</td>
                <td id="Donativo-Status">${value.donativoStatus}</td>
            </tr>
            `
        );
    });
}
function getCollectionData(){
    $("#mainPortal").empty();
    $.each(userCollection, function (key,value){
        // console.log(value.Apellido_Usuario);
        // console.log(value.Nombre_Usuario);
        // console.log(value.Tipo_Usuario);
        // console.log(value.id_UsuarioTel);
        $("#mainPortal").append(`
            <tr class="datosUsuarios">
                <td id="Nombre-Usuario">${value.Nombre_Usuario}</td>
                <td id="Apellido-Usuario">${value.Apellido_Usuario}</td>
                <td id="Tipo-Usuario">${value.Tipo_Usuario}</td>
                <td><button id="Edit" class="btn btn-warning" >Editar</button></td>
                <td><button id="del" class="btn btn-danger">Borrar</button></td>
            </tr>
            `
        );
    });
}
function getDonateData(){
    console.log("Hola amigos");
    var DonateObject={};
    var donativo_cantidad=$("#donativo-cantidad").val();
    var donativo_fecha=$("#donativo-fecha").val();
    var donativo_referencia=$("#donativo-referencia").val();
    var donativo_institucion=$("#donativo-institucion").val();
    var donativo_status=$("#donativo-status").val();

    DonateObject.donativoCantidad=donativo_cantidad;
    DonateObject.donativoFecha=donativo_fecha;
    DonateObject.donativoReferencia=donativo_referencia;
    DonateObject.donativoInstitucion=donativo_institucion;
    DonateObject.donativoStatus=donativo_status;
    console.log(DonateObject);
    donateDonate.push(DonateObject);
}
$("#submit-button").on("click",function(e){
    getDonateData();
    alert("Se ha guardado correctamente el donativo")

})
$("#btnLimpiar").click(function(e) {
    $("#form")[0].reset();
});
function delUserData(){
    alert("funcionando")
}
