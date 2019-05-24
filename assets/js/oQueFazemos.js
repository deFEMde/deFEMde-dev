$(document).ready(function() {
    // Scroll lento 
    $("#scroll-next").click(function() {
         $('html, body').animate({
             scrollTop: $("#advocacy").offset().top
         }, 1500);
    });

    $(document).on("click", ".tituloSecundario", function(){
        $div = $(this);
        $content = $div.next();
        $content.slideToggle(500, function () {
        });
    });
});