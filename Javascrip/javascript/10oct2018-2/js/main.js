var tbody= document.getElementById('tbody');
var kodemiaArray = [
    {
      'name': 'Memo',
      'age': '26'
    },
    {
      'name': 'Dani',
      'age': '23'
    },
    {
      'name': 'D',
      'age': '24'
    },
    {
      'name': 'Raquel',
      'age': '16'
    },
    {
      'name': 'Misa',
      'age': '25'
    },
    {
        'name':'Edwin',
        'age': '24'
    },
    {
      'name': 'Alfredo',
      'age': '20'
    },
    {
        'name':'Adan',
        'age': '23'
    }
  ]
  kodemiaArray.forEach(function(valor){
      var keys=Object.keys(valor);
      keys.forEach(function(){
          
      });
      var tr=document.createElement('tr');
      tbody.appendChild(tr);
       var td= document.createElement('td');
       var td2= document.createElement('td');
      tr.appendChild(td);
      tr.appendChild(td2);
      var textNode= document.createTextNode(valor.name);
      var textNode2=document.createTextNode(valor.age);
      td.appendChild(textNode);
      td2.appendChild(textNode2);
        //var td=document.createElement('td');
        //tbody.appendChild(td);
        //var tr=document.createElement('tr');
         //var textNode= document.createTextNode('texto');
        // td.appendChild(textNode);
  });


  // var xhttp=new XMLHttpRequest();//OBJETO DE CONFIGURACION AL SERVIDOR
  //     xhttp.onreadystatechange=function(){
  //         //Verificamos que el estado cambie
  //         //estados d elas peticiones
  //         //0.-peticion no inicializada , 1.- Conexion establecida con el server
  //         //2.- Ya se recibio la peticion EN EL SERVIDOR , 3.- Se esta procesando la peticion
  //         //4.- La peticion esta finalizada y devuelve el response 
  //         console.log('state: '+this.readyState, 'status'+this.status);
  //     }
  //     xhttp.open('GET' /*metodo*/, /*url*/,/*asyc  FALSE SINCRONO TRUE ASYNCRONO*/);
  //     xhttp.send();
  
  