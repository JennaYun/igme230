/* Don't use <script> tags in a linked js file! */
let content = ("content1.txt")  /* sets default verse element*/
$("#choose-content").val(content); /*changes menu option to default*/ 
$("#content").load(content);   /*retrieves only default element*/ 

$("#choose-content").change(function() {
content = $(this).val();
$("#content").load(content); 
});

/*Jquery*/
$(".menubox").click(function() {  /*Whenever you click the menubox class*/
    $(this).find(".submenu").toggle(); /*find is searching a child*/
});/*whichever menu you click, it will show or hide*/

