// var elementos=document.getElementsByTagName('div');
// function colorear(){
//     for(var i=0;i<elementos.length;i++){
//         elementos[i].classList.add("extraclass");
//     }
// }
// colorear();

var divs= document.getElementsByTagName("div");
function colorearPeru(){
    var clase="";
    for(var elemento=0; elemento<divs.length;elemento++){
         
         if(divs[elemento].classList.contains("car-per")){
            divs[elemento].classList.add("extra");
            console.log(divs[elemento]);
         }
    }
}
colorearPeru();

// var div= document.getElementsByTagName('div');

// for(var i=0;i<div.length;i++){
//         console.log(div[i]);  
// }

// var v = [1,2,5,3,4]
// var x= [1,2,3,4]

// for(var i=0;i<x.length;i++){
//     // if(v[i]===x[i]){
//     //     console.log("valor x: "+x[i]+"\n valor v"+v[i]);
//     // }else{

//     //     console.log("La posicion "+i+"No es igual");
//     //     console.log("el valor es el arreglo v en la posicion "+i)
//     // 
//      var posicion=v.length-1;

//     if(v.length>x.length){
//         console.log(v[posicion]);
//     }
// }

