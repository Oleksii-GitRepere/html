var carousel_wrapper = document.getElementById("img_carousel_div");
/*
var slide_2 = document.getElementById("slide_2");
var slide_3 = document.getElementById("slide_3");
var slide_4 = document.getElementById("slide_4");
var slide_5 = document.getElementById("slide_5");
*/

var carousel_slides = [`<div style="height: 320px; width: 100%"><img style="height: 100%; width: 100%" src="../img/desserts/Turkey/bal kaymak.jpg" alt=""></img></div>`,
                    `<div style="height: 320px; width: 100%"><img style="height: 100%; width: 100%" src="../img/desserts/Turkey/asure.jpg" alt=""></img></div>`,
                    `<div style="height: 320px; width: 100%"><img style="height: 100%; width: 100%" src="../img/desserts/Turkey/tulumba.jpg" alt=""></img></div>`,
                    `<div style="height: 320px; width: 100%"><img style="height: 100%; width: 100%" src="../img/desserts/Turkey/sobiyet.jpg" alt=""></img></div>`];

/*
    slide_2.innerHTML += `<img style="height: 100%; width: 100%" src="../img/desserts/Turkey/bal kaymak.jpg" alt=""></img>`;
    slide_3.innerHTML += `<img style="height: 100%; width: 100%" src="../img/desserts/Turkey/asure.jpg" alt=""></img>`;
    slide_4.innerHTML += `<img style="height: 100%; width: 100%" src="../img/desserts/Turkey/tulumba.jpg" alt=""></img>`;
    slide_5.innerHTML += `<img style="height: 100%; width: 100%" src="../img/desserts/Turkey/sobiyet.jpg" alt=""></img>`;
*/

carousel_wrapper.innerHTML += `<button id="img_carousel_prev_btn" style="height: 30px; width: 60px">prev</button>`;

function change_img()
{
    let num=0;
    num = num>carousel_slides.length-1 ? 0 : num++;
    carousel_wrapper.innerHTML +=  carousel_slides[num]; //+carousel_slides[1];
}
carousel_wrapper.innerHTML += `<button id="img_carousel_next_btn" style="height: 30px; width: 60px">next</button>`;

document.getElementById("img_carousel_next_btn").addEventListener('click', change_img(0));