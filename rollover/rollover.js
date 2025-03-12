"use strict";

const $ = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
    var image1 = $("#image1");
    var image2 = $("#image2");

 
    var links = $("#image_list").querySelectorAll("a");
    var images = [];

    for (let link of links) {
        let img = new Image();
        img.src = link.href;
        images.push(img);
    }

    
    image1.addEventListener("mouseover", () => {
        image1.src = "images/release.jpg";
    });
    image1.addEventListener("mouseout", () => {
        image1.src = "images/hero.jpg";
    });

    image2.addEventListener("mouseover", () => {
        image2.src = "images/deer.jpg";
    });
    image2.addEventListener("mouseout", () => {
        image2.src = "images/bison.jpg";
    });
});