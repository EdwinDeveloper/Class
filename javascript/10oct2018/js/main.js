var numeroDeDivs=prompt("Cuantos Divs crearas",0);
var body=document.getElementById('mainbody');
var divEvento=document.getElementsByTagName("div");
while(isNaN(numeroDeDivs)){
    numeroDeDivs=prompt("Un numero entero porfavor",0);
}

for(var i=0;i<numeroDeDivs;i++){
     var div=document.createElement('div');
        body.appendChild(div);
        div.addEventListener('click',cambiar);
        div.setAttribute('id','divs');
}
function remover(){
    for(var i=0;i<numeroDeDivs;i++){    
        divEvento[i].classList.remove('extra');
         console.log(divEvento[i]);
    }
}
function cambiar(){
    remover();
    this.classList.add("extra");
}