var carousel_wrapper = document.getElementById("img_carousel_div");
var modal_pict = document.getElementById("modal_pict");
/*
var slide_2 = document.getElementById("slide_2");
var slide_3 = document.getElementById("slide_3");
var slide_4 = document.getElementById("slide_4");
var slide_5 = document.getElementById("slide_5");
*/

const carousel_slides = [`<div><img style="height: 100%; width: 100%" src="img/desserts/Turkey/bal kaymak.jpg" alt=""></img></div>`,
    `<div><img style="height: 100%; width: 100%" src="img/desserts/Turkey/asure.jpg" alt=""></img></div>`,
    `<div><img style="height: 100%; width: 100%" src="img/desserts/Turkey/tulumba.jpg" alt=""></img></div>`,
    `<div><img style="height: 100%; width: 100%" src="img/desserts/Turkey/sobiyet.jpg" alt=""></img></div>`];

const modal_picts = [
    '<img src="img/desserts/Turkey/dondurma.jpg" " alt="">',
    '<img src="img/desserts/Turkey/ekmek_kadayıfı.jpg" alt="">',
    '<img src="img/desserts/Turkey/fırın_sutlac.jpg" alt="">',
    '<img src="img/desserts/Turkey/gaziantep_baklavası.jpg" alt="">',
    '<img src="img/desserts/Turkey/gullac.jpg" alt="">',
    '<img src="img/desserts/Turkey/irmik_helvası.jpg" alt="">',
    '<img src="img/desserts/Turkey/kabak_tatlısı.jpg" alt="">',
    '<img src="img/desserts/Turkey/kazandibi.jpg" alt="">',
    '<img src="img/desserts/Turkey/keskul.jpg" alt="">',
    '<img src="img/desserts/Turkey/kunefe.jpg" alt="">',
    '<img src="img/desserts/Turkey/lokma.jpg" alt="">',
    '<img src="img/desserts/Turkey/lokum.jpg" alt="">',
    '<img src="img/desserts/Turkey/mehalabiya.jpg" alt="">',
    '<img src="img/desserts/Turkey/sekerpare.jpg" alt="">',
    '<img src="img/desserts/Turkey/sobiyet.jpg" alt="">',
    '<img src="img/desserts/Turkey/tavuk_gogsu.jpg" alt="">',
    '<img src="img/desserts/Turkey/tulumba.jpg" alt="">',
    '<img src="img/desserts/Turkey/asure.jpg" alt="">',
    '<img src="img/desserts/Turkey/ayva_tatlısı.jpg" alt="">',
    '<img src="img/desserts/Turkey/baklava.jpg" alt="">',
    '<img src="img/desserts/Turkey/bal kaymak.jpg" alt="">',
    '<img src="img/desserts/Turkey/cezerye.jpg" alt="">'

]; 

/*
    slide_2.innerHTML += `<img style="height: 100%; width: 100%" src="../img/desserts/Turkey/bal kaymak.jpg" alt=""></img>`;
    slide_3.innerHTML += `<img style="height: 100%; width: 100%" src="../img/desserts/Turkey/asure.jpg" alt=""></img>`;
    slide_4.innerHTML += `<img style="height: 100%; width: 100%" src="../img/desserts/Turkey/tulumba.jpg" alt=""></img>`;
    slide_5.innerHTML += `<img style="height: 100%; width: 100%" src="../img/desserts/Turkey/sobiyet.jpg" alt=""></img>`;
*/

// carousel_wrapper.innerHTML += `<button id="img_carousel_prev_btn" style="height: 30px; width: 60px">prev</button>`;
// carousel_wrapper.innerHTML += `<button id="img_carousel_next_btn" style="height: 30px; width: 60px">next</button>`;

var num = 0;
document.getElementById("img_carousel_next_btn").addEventListener("click", () => {
    num++;
    num = num > carousel_slides.length - 1 ? 0 : num;
});
document.getElementById("img_carousel_prev_btn").addEventListener("click", () => {
    num--;
    num = num < 0 ? carousel_slides.length - 1 : num;
});


setInterval(() => {
    if (window.screen.availWidth < 450) {
        document.getElementById("useful_p").innerHTML = window.screen.availWidth;
        carousel_wrapper.innerHTML = carousel_slides[num]; //+carousel_slides[1];
    } else if (window.screen.availWidth < 790) {
        document.getElementById("useful_p").innerHTML = window.screen.availWidth;
        carousel_wrapper.innerHTML = (num + 1 > carousel_slides.length - 1) ? (carousel_slides[num] + carousel_slides[0]) : (carousel_slides[num] + carousel_slides[num + 1]); //+carousel_slides[1];
    } else if (window.screen.availWidth > 950) {
        let num1 = num;
        let wrap = "";

        document.getElementById("useful_p").innerHTML = num;
        for (let i = 0; i < carousel_slides.length - 1; i++) {
            wrap += carousel_slides[num1++];
            num1 = num1 < carousel_slides.length ? num1 : 0;
        }
        carousel_wrapper.innerHTML = wrap;
    }
}
    , 300);


const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const openModalBtn = document.querySelector(".btn-open");
const closeModalBtn = document.querySelector(".btn-close");


document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('slide_1');

    console.log(btn);

    btn.addEventListener('click', () => {
        alert('You clicked the button');
    });
});


const openModal = function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
};


openModalBtn.addEventListener("click", openModal);

const closeModal = function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
};

closeModalBtn.addEventListener("click", closeModal);


overlay.addEventListener("click", closeModal);

document.addEventListener("keydown");

document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
        modalClose();
    }
});

function clickEvnt(dataId)
{
    
    modal_pict.innerHTML += modal_picts[parseInt(dataId)];
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
    console.log("s_1 clicked.");
}