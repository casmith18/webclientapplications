"use strict";
$(document).ready( () => {
    let nextSlide = $("#slides img:first-child");
        
    setInterval( () => {   
        $("#caption").hide(1000);
        $("#slide").slideUp(2000,
            () => {
                if (nextSlide.next().length == 0) {
                    nextSlide = $("#slides img:first-child");
                }
                else {
                    nextSlide = nextSlide.next();
                }
                const nextSlideSource = nextSlide.attr("src");
                const nextCaption = nextSlide.attr("alt");
                $("#slide").attr("src", nextSlideSource).slideDown(2000);                    
                $("#caption").text(nextCaption).show(1000);
            });    
    },
    5000);         
});