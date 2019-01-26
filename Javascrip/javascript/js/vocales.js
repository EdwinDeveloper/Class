function vocales (palabra){
    var ultimaposicion=palabra.length-1;
    var verificar=palabra.charAt(ultimaposicion);
    var confirmacion="";
    if(verificar === "a" || verificar === "e" || verificar === "i" || verificar === "o" || verificar === "u"){
        confirmacion="Termina en vocal minuscula";
    }else if(verificar === "A" || verificar === "E" || verificar === "I" || verificar === "O" || verificar === "U"){
        confirmacion="Termina en vocal MAYUSCULA";
    }else{
        confirmacion="No termina en vocal";
    }
    return confirmacion;
}
console.log(vocales("contaE"));

