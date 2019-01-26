window.onload = function(){//espera a que carge toda la pagina (el navegador)
   addListeners();
} //como onreadystatechange pero verifica los cambios de la pagina

function addListeners(){
    //event submit form
    document.getElementById('form-word').addEventListener('submit',function(e){
        e.preventDefault();
        // console.log('Evento submit');
        var $userText = getUserText();
        // console.log($userText);
        fetchData($userText);
    })
}
function getUserText(){
    return document.getElementsByName('input-word')[0].value;
}
function fetchData($userText){
    var $xhttp =new XMLHttpRequest();
    $xhttp.onreadystatechange=function(){
        if(this.readyState===4 /*estado*/ && this.status===200 /*estatus*/){
            buildGif(JSON.parse(this.response).data[0].images.original.webp);
            //console.log(JSON.parse(this.response));//parse es un metodo
        }
    }
    $xhttp.open('GET','https://api.giphy.com/v1/gifs/search?api_key=U6dImpWpwKtEAL2CwZzxNfyR1AulrLW1&q='+$userText+'&limit=1&offset=0&rating=G&lang=es',true);
    $xhttp.send();
}
function buildGif($urlGift){
    console.log($urlGift);
    var $gif = document.createElement('img');
        $gif.src=$urlGift;
        document.getElementById('cont-img').appendChild($gif);
}