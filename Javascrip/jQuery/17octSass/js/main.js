/*$('.form-group.radioButtons input').on('click',function(){
   var valor = $(this).val();
   $('#first-input').val(valor);
})*/



/*$('input[type="radio"]').on("click", (e)=>{
    let value = e.target.value;
    $("#first-input, #second-input").val(value);
    $(".my-class[value=''],.my-class[value='some value']")
})
*/
$('[type=radio]').on('click', (e)=> {
    var condicion = e.target.value;
    if(condicion==="text1"){

        $('.square').slideUp(2000,()=>{
            alert('up');
        });
    }else if(condicion==="text2"){
        $('.square').slideDown(2000,()=>{
            alert('down');
        });
    }else if(condicion==="text3"){
        $('.square').slideToggle("slow",()=>{
           $('.square').slideToggle("slow");
        });
    }
	//$('#first-input, #second-input').val($(e.target).val());
})