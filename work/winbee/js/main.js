$(document).ready(function(){function e(){window.matchMedia("(max-width: 767px)").matches?($(".header").find(".header-img ").insertAfter(".header-info .page-header"),$(".description-game__info-text").insertAfter(".description-game .list-advantages")):($(".header-info").find(".header-img").insertAfter(".header .header-info"),$(".description-game__info-text").insertAfter(".description-game__info .description-game__info-header"))}$(window).scroll(function(){150<$(window).scrollTop()?$(".header-img").addClass("header-img_fade"):$(".header-img").removeClass("header-img_fade")}),e(),window.addEventListener("resize",e);var i=$(".list-advantages"),d=$(".list-video");function a(e,i){$(window).on("load resize",function(){if(!(767<$(window).width()))return e.hasClass("slick-initialized")?void 0:e.slick(i);e.hasClass("slick-initialized")&&e.slick("unslick")})}a(i,{mobileFirst:!0,arrows:!1,dots:!0,infinite:!1,slidesToShow:1,slidesToScroll:1}),a(d,{mobileFirst:!0,arrows:!1,dots:!0,infinite:!1,slidesToShow:1,slidesToScroll:1,responsive:[{breakpoint:480,settings:{slidesToShow:1}}]}),$(function(){$(".list-video__youtube").each(function(){$(this).css("background-image","url(http://i.ytimg.com/vi/"+this.id+"/sddefault.jpg)"),$(this).append($("<div/>",{class:"play"})),$(document).delegate("#"+this.id,"click",function(){var e="https://www.youtube.com/embed/"+this.id+"?autoplay=1&autohide=1";$(this).data("params")&&(e+="&"+$(this).data("params"));var i=$("<iframe/>",{frameborder:"0",src:e,width:$(this).width(),height:$(this).height()});$(this).replaceWith(i)})})})}),$(window).on("load",function(){$preloader=$(".preloader"),$loader=$preloader.find(".preloader__img"),$loader.fadeOut(),$preloader.delay(350).fadeOut("slow"),$("body").removeClass("body_fixed")});