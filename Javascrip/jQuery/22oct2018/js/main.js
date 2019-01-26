$(document).ready(function(){
    Edwin();
});
const Edwin = () =>{
    $('.nav-buttons').on('click',(e)=>{
        let colector = $(e.target).data('controls');
        let ruta="views/"+colector+".html";
        console.log(ruta);
        $('#content-wrapper').load(ruta,()=>{
            
        });
    })
}