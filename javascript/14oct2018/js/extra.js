window.onload = function() {
    addListeners();
  }
function addListeners() {
    // event submit form
    document.getElementById('form-data').addEventListener('submit',function(e) {
      e.preventDefault();
      var $userText  = getUserText();
      var $buenFormato=JSON.stringify($userText);
      fetchData($buenFormato)
    });
  }
  function getUserText($valor) {
    var $descripcion = document.getElementsByName('input-descripcion')[0].value;
    var $fb = document.getElementsByName('input-fb')[0].value;
    var $NombreCompleto = document.getElementsByName('input-FullName')[0].value;
    //console.log ($descripcion, $fb, $NombreCompleto);
    var $obj ={
    'descripcion': $descripcion,
    'fb': $fb,
    'nombrecompleto' : $NombreCompleto
    }
    return $obj;
    
  }
  function fetchData($userText) {
    console.log($userText);  
    var xhttp=new XMLHttpRequest();
        xhttp.onreadystatechange=function(){
            if(this.readyState===4 && this.status==200){
                
            }
        }
        xhttp.open('POST','https://example2-189b5.firebaseio.com/kodemia/0/koders.json',true);
        xhttp.send($userText);  
  }
  