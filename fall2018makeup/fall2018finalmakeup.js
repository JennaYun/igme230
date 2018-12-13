/*Jquery*/
$(".menu").click(function() {  /*Whenever you click the menubox class*/
    $(this).next(".submenu").slideToggle(); /*find is searching a child*/
});/*whichever menu you click, it will show or hide*/




$( "body" ).find( "#story" ).load("story0.txt");
 

/*
$(document).ready(function(){
    $(this).attr('id').click(function(){
        $( "#story" ).find( "p" ).load("story0.txt");
    });
  });
*/


$(document).ready(function(){
    $("#lightpink").click(function(){
        $("#source").css({"background-color": "lightpink"});
    });
  });


  $(document).ready(function(){
    $("#lightsalmon").click(function(){
        $("#source").css({"background-color": "lightsalmon"});
    });
  });



  var count = 0;
  $("#increment").click(function() {
      count++;
      $("#currentcount").html(count);
  });
  

  /*
  const storedColor = localStorage.getItem(colorKey);

  if (storedColor) {
    colorSelect.querySelector(`option[value='${storedColor}']`).selected = true;
}


nameField.onchange = e => { localStorage.setItem(nameKey, e.target.value); };
colorSelect.onchange = e => { 
    localStorage.setItem(colorKey, e.target.value); 
    document.body.style.backgroundColor = e.target.value;
};
*/

/*

  let content = ("story0.txt") 
  $("#stories").val(content); 
  $("#content").load(content);  
  
  $("#stories").change(function() {
  content = $(this).val();
  $("#content").load(content); 
  });


*/