 function getWindowsInformacion(){
    var height = window.innerHeight;
    var width = window.innerWidth;
    var heightscree = screen.height;
    var widthscreen = screen.width;
    var datos =  "Altura : "+height+" Ancho : "+width;
    var datosscreen =  "Altura : "+heightscree+" Ancho : "+widthscreen;
    var location = window.location.href;
    console.log(location);
    return datos+" : \n"+datosscreen + "\n "+location;
}
function redirect(url){
    window.location.href=url;
}
function openWindows(url){
    window.open(url,"","height=400,width=300")
}
console.log(getWindowsInformacion());

