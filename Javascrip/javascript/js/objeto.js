// var tennisOBJ=new object();
//     tennisOBJ.colorPrincipal="blue";
//     tennisOBJ.size= [//En los arreglos cada valor esta separado por comas
//         {
//             pais:"MX",
//             valor:"27",
//             unidad:"cm"
//         },
//         {
//             pais:"COL",
//             valor:"24",
//             1:"cm"
//         }
//     ];
    // {
    //     size:"24",
    //     color:"blue",
    //     tipo:"cerrado"
    // }

    // size[1].valor;
    // size[1]['valor'];

    // size.push({
    //         pais:"MX",
    //         valor:"28",
    //         unidad:"cm"
    // });
    // size[2].valor;

    //PARA ACCEDER A UN VALOR
    //nombredelobjeto[posicion].nombredelvalor;

// for(var i in arreglo){
//     console.log(i, " ", array[i]/*aqui imprime la llave*/);
// }

// var carro= [{
//         color:"azul",
//         modelo:"2018",
//         precio:"2000"
//     },
//     {
//         color:"rojo",
//         modelo:"2019",
//         precio:"4000"
//     },
//     {
//         color:"naranja",
//         modelo:"2008",
//         precio:"1000"
//     }
//     ];
     
//     carro.forEach(function(carroOBJ,index){
//     console.log("posicion del objeto",index);
//     for(var i in carroOBJ){
//         console.log(i,";",carroOBJ[i]);
//     }
//     });
///////////////////////////////////////////////    
// var objectArray = [{
//     color: 'rojo',
//     marca: 'Sonic',
//     modelo: '2018'
// },
// {
//     color: 'azul',
//     marca: 'Aveo',
//     modelo: '2018'
// },
// {
//     color: 'verde',
//     marca: 'S300',
//     modelo: '2018'
// }
// ]

// function showPropertiesInArray(param) {
// var property = "",
//     position = 0;

// // iteración dentro del parámetro de la función
// param.forEach((item, index) => {
//     property = property + 'Objeto ' + index + '\n';
    
//     // Iterar dentro del objeto
//     for (const i in item) {
//         property = property + i + ' : ' + item[i] + '\n';
//     }

// });

// return property;

// }