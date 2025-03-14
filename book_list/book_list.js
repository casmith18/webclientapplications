"use strict";

    $(document).ready(function() {
        $("#categories h2").click(function() {
            const h2 = $(this);

            
            h2.toggleClass("minus");

          
            h2.next("div").slideToggle();

           
            $("#image").attr("src", "");
        });

        $("#web_images a, #language_images a, #database_images a").each(function() {
            var imageURL = $(this).attr("href");

    
            var bookImage = new Image();
            bookImage.src = imageURL;

            $(this).click(function(evt) {
                $("#image").attr("src", imageURL);
                evt.preventDefault(); 
            });
        });
    });