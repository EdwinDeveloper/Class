var operacion = parseInt(prompt("Que operacion quieres realizar, 1.- Ingresar Efectivo, 2.-Consultar Saldo, 3.-Retirar Saldo"));
var saldoTotal=1000;
while(isNaN(operacion)){
    operacion = parseInt(prompt("INGRESA UNA DE LAS 3 OPCIONES, 1.- Ingresar Efectivo, 2.-Consultar Saldo, 3.-Retirar Saldo"));
}
if(operacion ==3){
    var cantidad=parseInt(prompt("Ingresa la cantidad en multiplos de 100",0));
    while(cantidad%100!=0){
        cantidad=parseInt(prompt("Debes ingresar la cantidad en multiplos de 100",0));
        cajero(operacion,cantidad)
    }
}else if(operacion==1){
    var ingresarEfectivo=parseInt(prompt("Cuanto Efectivo vas a Ingresar?",0));
    cajero(operacion,ingresarEfectivo)
}else if(operacion==2){
    console.log("Consultemos ese saldo");
    cajero(operacion)
}


function cajero(operacion,cantidad) {
    switch (operacion) {
        case 1:
            console.log("Elegiste Ingresar Efectivo");
            saldoTotal=cantidad+saldoTotal;
            console.log("Tu saldo actual es : "+saldoTotal);
            break;
        case 2:
            console.log("Elegiste  Consultar Saldo");
            console.log("Tu saldo actual es : "+saldoTotal);
            break;
        case 3:
             console.log("Elegiste Retirar Efectivo");
             saldoTotal=cantidad-saldoTotal;
             console.log("Tu saldo actual es : "+saldoTotal);
            break;
        default:
            break;
    }
}

