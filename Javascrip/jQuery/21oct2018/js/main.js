// $(document).ready(()=>{
//     $('.caja-nuemero').draggable();
//     $('.caja-nuemero').resizable();

//     //$('.lista-selecionable').selectable();
//     $('.lista-selecionable').sortable({
//         update: (event,ui)=>{
//             console.log("Cambio posicion "+event+" "+ui);
//         }
//     });
//     $('.cuadro-chico').draggable();
//     $('.cuadro-grande').droppable({
//         drop: ()=>{
//             console.log("Colocaron un objeto dentro");
//         }
//     });
// });

var studentsList = localStorage.getItem("studentsList")
//console.log(studentsList)

$(document).ready(function(){
    updateTable();
})

// $( "#student-birthdate" ).datepicker({
//      dayNamesMin: [ "Di", "Lu", "Ma", "Me", "Je", "Ve", "Sa" ]
// });

if (!studentsList) {
    var alumnos = [{
        "Nombre": "Edwin",
        "Edad": 20,
        "Ciudad": "Puerto Vallarta",
        "FechaNacimiento":"N/A"
    }, {
        "Nombre": "Kevin",
        "Edad": 28,
        "Ciudad": "Puerto Vallarta",
        "FechaNacimiento":"N/A"
    }, {
        "Nombre": "Edgar",
        "Edad": 28,
        "Ciudad": "Coahuila",
        "FechaNacimiento":"N/A"
    }, {
        "Nombre": "Alfredo",
        "Edad": 21,
        "Ciudad": "CDMX",
        "FechaNacimiento":"N/A"
    }];
} else {
	var alumnos = JSON.parse(studentsList);
}

/*función para eliminar un usuario*/
const deleteStudent = (e) => {
    let selectedRow = $(e.target).closest("tr").index();
    alumnos.splice(selectedRow,1);
    $(e.target).closest("tr").remove();
    localStorage.setItem("studentsList", JSON.stringify(alumnos));
}
const viewStudent = (e)=>{
    let selectedRow = $(e.target).closest('tr').index();
    let nombreUser = alumnos[selectedRow].Nombre;
    let EdadUser = alumnos[selectedRow].Edad;
    let nombreCiudad = alumnos[selectedRow].Ciudad;
    let nombreFecha = alumnos[selectedRow].FechaNacimiento;

    let selector = $('#tarjeta');
    selector.html("");
    selector.append(`<img src="img/${nombreUser}.jpg" alt=""><br>`);
    selector.append(`Nombre Usuario :${nombreUser} <br> `);
    selector.append(`Edad del Usuario : ${EdadUser} <br>`);
    selector.append(`Ciudad del Usuario : ${nombreCiudad} <br>`);
    selector.append(`Fecha de Nacimiento : ${nombreFecha} <br>`);
    // let textNode = document.createElement(nombreUser);
    // selector.appendChild(textNode);
    

}

const updateTable = () => {
    $("#alumnos-table").empty();
    /*llena la tabla con los registros actuales*/
    $.each(alumnos, (index, value) => {
        $("#alumnos-table").append(`
            <tr>
                <td>${value.Nombre}</td>
                <td>${value.Edad}</td>
                <td>${value.Ciudad}</td>
                <td>${value.FechaNacimiento}</td>
                <td><div class="btn btn-delete">Eliminar</div>
                <td><div class="btn btn-show">Mostrar</div>
                <td><div class="btn btn-save">Guardar</div>
                <td><div class="btn btn-update">Actualizar</div>
            </tr>`);
    });
    $(".btn-delete").on("click", (e) => {
        deleteStudent(e);

    })
    $(".btn-show").on("click", (e) => {
        viewStudent(e);
        
    })
}

$(".nav-button").on("click", function(e) {
    let selectedButton = e.target;
    let currentSection = $(e.target).data("controls"); /*obtenemos la sección a mostrar*/
    /*oculta las secciones*/
    $("section").hide();
    /*muestra la sección seleccionada*/
    $(currentSection).show();
    switch (currentSection) {
        case '#alumnos':
            updateTable()
            break;
        default:
            break;
    }
});

/*(crear funcion que se ejecute al dar click en el boton y que extraiga los datos del formulario)
 */

$("#add-student").on("click", function(e) {
    let studentName = $("#student-name").val(),
        studentAge = $("#student-age").val(),
        studentCity = $("#student-city").val(),
        studentBirthdate = $("#student-birthdate").val();
    let newStudent = {
        "Nombre": studentName,
        "Edad": studentAge,
        "Ciudad": studentCity,
        "FechaNacimiento": studentBirthdate
    };
    alumnos.push(newStudent);
    $("input").val("");
    updateTable();
    localStorage.setItem("studentsList", JSON.stringify(alumnos));
})

//$(".btn-delete").closest("tr")
//$("table").children("tr")/*selecciona todos los tr que son descendientes inmediatos de table*/
//$("table").find("tr")/*selecciona todos los tr que son descendietnes de table*/
//$("td").siblings("")

