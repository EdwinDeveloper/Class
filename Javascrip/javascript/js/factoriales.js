var _arrayFactorial = [1,2,3,4,5,6];

var nuevoarreglo=_arrayFactorial.map(function(item){
    var sumatoria=1;
    for(var i=item;i>=1;i--){
        sumatoria=i*sumatoria;
    }
    return sumatoria;
});
console.log(nuevoarreglo);