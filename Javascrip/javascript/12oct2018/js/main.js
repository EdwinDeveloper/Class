document.getElementById("botonsubmit").addEventListener('click',verImage);
var $textoUsuario=document.getElementById("textoDelUsuario");
var $figure= document.getElementsByTagName('figure')[0];
var img= document.getElementsByTagName('img');
function verImage(e){
    e.preventDefault();
     var $xhttp=new XMLHttpRequest();
     $xhttp.onreadystatechange = function (){
         if(this.readyState===4 && this.status===200){
            //console.log('Estado : '+this.readyState+" Status : "+this.status);
             //console.log(JSON.parse(this.response));
             var $url=JSON.parse(this.response);
             //console.log($url);
            var $urlImage = $url.data[0].images.preview_webp.url;
             console.log($urlImage);
            img.innerHTML=`<img src=${$urlImage}>`;
             //img.setAttibute.src=$urlImage;
        
            // var img= document.createElement('img');
            // $figure.appendChild(img);
            // img.setAttribute.src=$urlImage;

         }
     }
     $xhttp.open('GET','https://api.giphy.com/v1/gifs/search?api_key=yfMOf7chF8MMUNR0t8F1GX49uo83obe6&q='+$textoUsuario.value+'&limit=1&offset=0&rating=G&lang=es',true);
     $xhttp.send();
}