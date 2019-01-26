	
		function funcionvallarta(visitame) {
		    var i;
		    var x = document.getElementsByClassName("enlaceV");
		    for (i = 0; i < x.length; i++) {
		       x[i].style.display = "none";  
		    }
		    document.getElementById(visitame).style.display = "-webkit-inline-box";  
		}