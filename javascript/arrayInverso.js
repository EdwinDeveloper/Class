var arreglo = [1,2,3,4,5,6];//1.-Definimos el arreglo principal a iterar
function reverseArray(arreglo) {//creamos la funcion y le pandamos el parametro del arreglo
  var nuevoarrelo=[];//declaramos el nuevo arreglo donde guardaremos el arreglo pero de manera invertida
  var contador=arreglo.length;//declaramos un contador y le asignamos la misma longitud de nuestro primer arreglo para que se repita ese numero de veces
  for(var i in arreglo){//utilizamos un for in donde llamanos el arreglo principal [1,2,3,4,5,6]
      contador--;//el mismo contador le restamos uno a uno
      nuevoarrelo[i]=arreglo[contador];//vamos guardando en las posiciones invertidas al nuevo arreglo
  }//termina el ciclo xD
  return nuevoarrelo;// RETORNAMOS EL NUEVO ARREGLO
}
var elultimo= reverseArray(arreglo);//EL RETORNO LO GUARDAMOS EN OTRA VARIABLE
console.log(elultimo);//IMPRIMIMOS EL RESULTADO
