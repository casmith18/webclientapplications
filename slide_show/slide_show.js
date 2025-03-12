"use strict";

const $ = selector => document.querySelector(selector);

const imageCache = [];
let imageCounter = 0;
let timer = null;
let image = null;

const mainImage = $("#main_image");   
const caption = $("#caption");        

const runSlideShow = function() {
    imageCounter = (imageCounter + 1) % imageCache.length;
    image = imageCache[imageCounter];
    mainImage.src = image.src;
    mainImage.alt = image.alt;
    caption.textContent = image.alt;
};

document.addEventListener("DOMContentLoaded", () => {
    const links = $("#image_list").querySelectorAll("a");

   
    for (let link of links) {
        image = new Image();
        image.src = link.href;
        image.alt = link.title;
        imageCache.push(image);
    }

 
    $("#start").addEventListener("click", () => {
        runSlideShow(); 
        timer = setInterval(runSlideShow, 2000); 

       
        $("#start").disabled = true;
        $("#pause").disabled = false;
    });

 
    $("#pause").addEventListener("click", () => {
        clearInterval(timer); 

      
        $("#start").disabled = false;
        $("#pause").disabled = true;
    });
});