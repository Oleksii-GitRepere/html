var carousel_wrapper = document.getElementById("img_carousel_div");
/*
var slide_2 = document.getElementById("slide_2");
var slide_3 = document.getElementById("slide_3");
var slide_4 = document.getElementById("slide_4");
var slide_5 = document.getElementById("slide_5");
*/

var carousel_slides = [`<div class="btn-open1 btnopen"><img style="height: 100%; width: 100%" src="img/desserts/Turkey/bal kaymak.jpg" alt=""></img></div>`,
                    `<div class="btn-open1 btnopen"><img style="height: 100%; width: 100%" src="img/desserts/Turkey/asure.jpg" alt=""></img></div>`,
                    `<div class="btn-open1 btnopen"><img style="height: 100%; width: 100%" src="img/desserts/Turkey/tulumba.jpg" alt=""></img></div>`,
                    `<div class="btn-open1 btnopen"><img style="height: 100%; width: 100%" src="img/desserts/Turkey/sobiyet.jpg" alt=""></img></div>`];

/*
    slide_2.innerHTML += `<img style="height: 100%; width: 100%" src="../img/desserts/Turkey/bal kaymak.jpg" alt=""></img>`;
    slide_3.innerHTML += `<img style="height: 100%; width: 100%" src="../img/desserts/Turkey/asure.jpg" alt=""></img>`;
    slide_4.innerHTML += `<img style="height: 100%; width: 100%" src="../img/desserts/Turkey/tulumba.jpg" alt=""></img>`;
    slide_5.innerHTML += `<img style="height: 100%; width: 100%" src="../img/desserts/Turkey/sobiyet.jpg" alt=""></img>`;
*/

// carousel_wrapper.innerHTML += `<button id="img_carousel_prev_btn" style="height: 30px; width: 60px">prev</button>`;
// carousel_wrapper.innerHTML += `<button id="img_carousel_next_btn" style="height: 30px; width: 60px">next</button>`;

var num=0;
document.getElementById("img_carousel_next_btn").addEventListener("click",() =>
{
     num++;
     num = num>carousel_slides.length-1 ? 0 : num;
});
document.getElementById("img_carousel_prev_btn").addEventListener("click",() =>
{
     num--;
     num = num<0 ? carousel_slides.length-1 : num;
});


setInterval(()=>
{
    if(window.screen.availWidth < 450 )
    {            
        document.getElementById("useful_p").innerHTML = window.screen.availWidth;
        carousel_wrapper.innerHTML =  carousel_slides[num]; //+carousel_slides[1];
    }else if(window.screen.availWidth < 790 )
    {
        document.getElementById("useful_p").innerHTML = window.screen.availWidth;
        carousel_wrapper.innerHTML =  (num+1 > carousel_slides.length-1) ? (carousel_slides[num] + carousel_slides[0]) : (carousel_slides[num] + carousel_slides[num+1]); //+carousel_slides[1];
    }else if(window.screen.availWidth > 950 )
    {
        let num1 = num;
        let wrap="";

        document.getElementById("useful_p").innerHTML = num;
        for(let i=0; i<carousel_slides.length-1; i++)
        {
            wrap += carousel_slides[num1++];
            num1 = num1<carousel_slides.length ? num1 : 0;
        }
        carousel_wrapper.innerHTML = wrap;
    }
} 
,300);


const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
// const openModalBtn = document.querySelector(".btn-open");
const closeModalBtn = document.querySelector(".btn-close");



document.getElementsByClassName('btn-open')
        .addEventListener('click', function (event) {
            alert('Hi!');
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