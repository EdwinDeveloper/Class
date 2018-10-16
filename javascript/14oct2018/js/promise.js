// var info=[];
// informacionfetch()
// .then(data => data.json())
// .then(datos => {
//     (info=datos);


//    return newobject();
// })
// .then(datos => console.log(datos));



// function informacionfetch(){
//    return fetch('https://reqres.in/api/unknown')
// }
// function newobject(){
//     var Edwin = {
//         "Nombre":"Edwin Giovanni Perez Robles",
//         "Direccion":"Mexico City near the independece angel",
//         "Hobbies":"Read and investigate"
//     }
//     return Edwin;
// }  
var promesa=new Promise((resolve,reject)=>{
    var Edwin = {
        "Nombre":"Edwin Giovanni Perez Robles",
        "Direccion":"Mexico City near the independece angel",
        "Hobbies":"Read and investigate"
    }
    if((1+1)===3){
        reject('failure, hi misa, this is not working');
    }
    resolve(Edwin);
});

promesa.then(data => {
    var array= data;

    console.log(typeof array.Nombre);
}).catch(error =>{
    console.log("we have a big problem");
});