$(".navbar-nav > li a").click(function(){
    $(this).css("background","none");
    $(this).css("color","#fff");
});
$(window).load(function(){
    var w=$(window).width();
    if(w<768){
        $(".img_main").css("margin-top","100px");
        $(".navbar-header").css("background","#000");
        $(".navbar-header").css("height","100");
        $("#bs-example-navbar-collapse-1").css("margin-top","0");
        $("#carousel-example-generic").css("display","none");
        $(".img_show").css("display","block");
        $("#footer .col-xs-12:not(:nth-child(3))").css("text-align","center");
        $("#animation_all").css("display","none");
        $("ul#menu").css("display","none");
        $(".con_right").css("display","none");
        $("#map_img").css("display","block");
        $("#wrapper").css("display","none");
        $("#scoll_img").css("display","block");
        $("#scoll_img").css("margin-top","50px");
    }
    else{$(".img_main").css("margin-top","0");
        $("#bs-example-navbar-collapse-1").css("margin-top","28px");
        $(".navbar-header").css("background","none");
        $("#carousel-example-generic").css("display","block");
        $(".img_show").css("display","none");
        $("#footer .col-xs-12:not(:nth-child(3))").css("text-align","left");
        $("#animation_all").css("display","block");
        $("ul#menu").css("display","block");
        $(".con_right").css("display","block");
        $("#map_img").css("display","none");
        $("#wrapper").css("display","block");
        $("#scoll_img").css("display","none");
        $("#scoll_img").css("margin-top","0");
    }
})
$(window).resize(function(){
    var w=$(window).width();
    if(w<768){
        $(".img_main").css("margin-top","100px");
        $(".navbar-header").css("background","#000");
        $(".navbar-header").css("height","100");
        $("#bs-example-navbar-collapse-1").css("margin-top","0");
        $("#carousel-example-generic").css("display","none");
        $(".img_show").css("display","block");
        $("#footer .col-xs-12:not(:nth-child(3))").css("text-align","center");
        $("#animation_all").css("display","none");
        $("ul#menu").css("display","none");
        $(".con_right").css("display","none");
        $("#map_img").css("display","block");
        $("#wrapper").css("display","none");
        $("#scoll_img").css("display","block");
        $("#scoll_img").css("margin-top","50px");
    }
    else{$(".img_main").css("margin-top","0");
        $("#bs-example-navbar-collapse-1").css("margin-top","28px");
        $(".navbar-header").css("background","none");
        $("#carousel-example-generic").css("display","block");
        $(".img_show").css("display","none");
        $("#footer .col-xs-12:not(:nth-child(3))").css("text-align","left");
        $("#animation_all").css("display","block");
        $("ul#menu").css("display","block");
        $(".con_right").css("display","block");
        $("#map_img").css("display","none");
        $("#wrapper").css("display","block");
        $("#scoll_img").css("display","none");
        $("#scoll_img").css("margin-top","0");
    }
});
$('.we_title').on("click","div",(function(){
    "use strict";
    $(this).addClass("active1").siblings().removeClass("active1");

}));
$('.final_foot').on("mouseenter","img",function(){
    "use strict";
    $(this).addClass("active2").parent().siblings().children("img").removeClass("active2");
});
$(".zzc,.zzc1").mouseenter(function(){$(this).find("p").animate({
   top:"56%"
},500)});
$(".zzc,.zzc1").mouseleave(function(){
    $(this).find("p").animate({
        top:"100%"
    }),500
});
$("ul.dropdown-menu").mouseleave(function(){
    "use strict";
    $("li.dropdown").removeClass("open");
})


// 要的js
$('#small_nav').on('click','a',function(e){
    e.preventDefault();
    $(this).addClass('red').parent().siblings().children('.red').removeClass('red');
    var c=$(this).attr('href');
    $(c).addClass('active animated fadeInRight').siblings('.active').removeClass('active animated fadeInRight');
});

$('#section1').on('mouseenter','img',function(){
    $(this).addClass('animated rubberBand')
});
$('#section1').on('mouseleave','img',function(){
    $(this).removeClass('animated rubberBand')
});



