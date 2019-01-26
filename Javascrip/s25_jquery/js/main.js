$(document).ready(function() {
});
const borrarRegistro = () =>{
    $('.btn-delete').on('click',(e)=>{
        let position = $(e.target).closest('tr').index();
        let dataArray = [];
        var xhttp=new XMLHttpRequest();
        xhttp.onreadystatechange=function(){
            if(this.readyState===4 & this.status==200){
                let datos =JSON.parse(this.response);
                dataArray=datos;
                console.log(datos);
            }
        }
        xhttp.open('GET','https://example2-189b5.firebaseio.com/kodemia/0/XFORCE.json',true);
        xhttp.send();
    });
}
const updateTable = () => {
    $("#alumnos-table").empty();
    $.ajax({
        type:"GET",
        url: "https://example2-189b5.firebaseio.com/kodemia/0/XFORCE.json",
        success:(data)=>{
            mostrar(data);
            //Sconsole.log(data);
            $('#add-student').on('click',()=>{
                create();
            });
            borrarRegistro();
        },
        error: function(error){console.log(error)}
    });

const mostrar = (data) =>{
        $.each(data,(index,value)=>{
        $("#alumnos-table").append(`
        <tr>
            <td>${value.Nombre}</td>
            <td>${value.Edad}</td>
            <td>${value.Ciudad}</td>
            <td>${value.FechaNacimiento}</td>
            <td><div class="btn btn-delete">Eliminar</div>
            <td><div class="btn btn-success">Mostrar</div>
            <td><div class="btn btn-update">Actualizar</div>
        </tr>`);
        })
    }
}

$(".nav-button").on("click", function(e) {
    let target = $(e.target).data("view-url");
    $("#content-wrapper").load(target, function() {
        updateTable();
    });
});

const create = ()=>{
    let studenName=$('#student-name').val(),
        studentAge=$('#student-age').val(),
        studentCity=$('#student-city').val(),
        studentBirthday=$('#student-birthdate').val();
    let studentObjet = {
        "Nombre":studenName,
        "Edad":studentAge,
        "Ciudad":studentCity,
        "FechaNacimiento":studentBirthday
    }
    $.ajax({
        type:"POST",
        data: JSON.stringify(studentObjet),
        url:"https://example2-189b5.firebaseio.com/kodemia/0/XFORCE.json",
        success:()=>{
            alert("Usuario Creado");
            updateTable();
        },
        error:()=>{
            console.log("Usuario Creado");
        }
    });
    
    console.log(studentObjet);
}
