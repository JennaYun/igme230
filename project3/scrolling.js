$('#return_button').click(function () {
    let target = $(this.hash);
    $('html, body').animate({
        scrollTop: target.offset().top
    }, 600);
});