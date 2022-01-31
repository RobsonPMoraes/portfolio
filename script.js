$(document).ready(function(){
    $(window).scroll(function(){
        if (this.scrollY > 20){
            $('.navbar').addClass("sticky");

            // nestas linhas de comando, se o scroll bar tiver uma altura superior a 20px aparecerá o background no menu nav
        }else{
            $('.navbar').removeClass("sticky");
        }if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

            $('.scroll-up-btn').click(function(){
                $('html').animate({scrollTop:0});
            });

    var typed = new Typed(".typing",{
        strings:["YouTuber", "Desenvolvedor Web", "Designer", "Freelancer"],
        typeSpeed:100,
        backSpeed:60,
        loop:true
    });

    var typed = new Typed(".typing-2",{
        strings:["Desenvolvedor Web", "Freelancer", "Designer", "YouTuber"],
        typeSpeed:150,
        backSpeed:60,
        loop:true
    });

    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    $('.carousel').owlCarousel({
        margin:20,
        loop:true,
        autoplayTimeOut:2000,
        autoplayHoverPauser:true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:false
            }
        }

    });





});