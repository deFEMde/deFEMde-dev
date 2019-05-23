$(document).ready(function(){

    //nav fixa com transição da logo
    $(window).scroll(function(){
        if($(this).scrollTop()>100){
            $('#logoOriginal').removeClass('ativo');
            $('#logoReduzida').addClass('ativo');
            $('.nav').addClass('navSombra');
        } else {
            $('#logoReduzida').removeClass('ativo');
            $('#logoOriginal').addClass('ativo');
            $('.nav').removeClass('navSombra');
        }
    });

    // scroll suave para seções
    $('.navMenu--link').click(function(event){    
        if(this.hash !== ""){
            let hash = this.hash;
            $('html, body').animate({
                scrollTop:$(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    })

    //abre menu hamburguer
    $('.menuHamburguer').click(function(event){  
        $('.menuDropdown').slideToggle();     
    });

    // scroll suave para seções a partir do menu hamburguer
    $('.menuDropdown--link').click(function(event){  
        $('.menuDropdown').slideToggle();
        if(this.hash !== ""){
            let hash = this.hash;
            $('html, body').animate({
                scrollTop:$(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }        
    });

});