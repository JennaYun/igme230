/* Don't use <script> tags in a linked js file! */

$(".menu").click(function() {
    $(this).next(".items").slideToggle();
});
