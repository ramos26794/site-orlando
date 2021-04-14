$(document).ready(function () {
    $("#logotipo").on("mouseover", function () {

        $("#banner h1").addClass("efeito");

    }).on("mouseout", function () {

        $("#banner h1").removeClass("efeito");

    });

    $("#input-search").on("focus", function(){

		$("li.search").addClass("ativo");

	}).on("blur", function(){

		$("li.search").removeClass("ativo");				

	});

    $(".thumbnails").owlCarousel({
     
        loop: true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:5,
                nav:true,
                loop:false
            }
        }
        
    });

    /*var owl = $(".thumbnails").data('owlCarousel');

  	('#btn-news-prev').on("click", function(){

  		owl.prev();

  	});

  	$('#btn-news-next').on("click", function(){

  		owl.next();

  	});*/

    $("#page-up").on("click", function(event){

        $("html,body").animate({
            scrollTop:0
        },1000);

        event.preventDefault();
    });

    $("#btn-bars").on("click", function(){

        $("header").toggleClass("open-menu");
    });

    $("#menu-mobile-mask, .btn-close").on("click", function(){
        $("header").removeClass("open-menu");
    });

    $("#btn-search").on("click", function(){

    });

    $("#btn-search").on("click", function(){
        $("header").toggleClass("open-search");
        $("#input-search-mobile").focus();
    });

});