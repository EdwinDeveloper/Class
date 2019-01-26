$(".nav-button").on("click",function(e){
    let selectedButton = e.target;
    let currentSection = $(e.target).data("controls");
    console.log(currentSection);
    $("section").hide();
    $(currentSection).show();
})
var alumnos = [
    {
        "Nombre":"Edwin",
        "Edad":20,
        "Ciudad":"Puerto Vallarta"
    },
    {
        "Nombre":"Kevin",
        "Edad":28,
        "Ciudad":"Puerto Vallarta"
    },
    {
        "Nombre":"Edgar",
        "Edad":28,
        "Ciudad":"Coahuila"
    },
    {
        "Nombre":"Alfredo",
        "Edad":21,
        "Ciudad":"CDMX"
    }
];
$('#alumnos').html('');
$.each(alumnos,(alumno,index)=>{
    
    $('#alumnos').append("<tr><td>"+index.Nombre+" "+index.Edad+"</td></tr>");
    
    console.log(alumno.Nombre);
   
});