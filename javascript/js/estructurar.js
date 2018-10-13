var _varList = [1,2,3,"hola",true];
_varList.forEach(function(valorItem,posicion,array,){
    console.log(valorItem,posicion,Array);
});

var _varList2 = [1,2,3,4,5,6,,7,8,9,44];
_varList2.map(function(item){
    return item*2;
});

var _varList3 = ["hola","tu","te veo"];
_varList2.map(function(item){
    return "hola"+item;
});

var _varList4 = ["hola",98,5,true];
_varList3.filter(function(item){
    return item%2==0;
});

var _varList5 = ["hola",98,5,true];//solo acepta numeros y strings
_varList5.reduce(function(firstItem,Seconditem){
    return firstItem+Seconditem;
    console.log(firstItem,Seconditem);
});