// Navigation section
let nav = document.querySelector('nav');

window.addEventListener('scroll', function(){
    let test = document.documentElement.scrollTop;

    if(test > 300){
        nav.classList.add('active');
    }else{
        nav.classList.remove('active');
    }
});


//Icons part
let search = document.querySelector(".search");
let bag = document.querySelector (".bag");
let search_box = document.querySelector(".search_box");
let cross = document.querySelector(".cross");
let input_box = document.querySelector(".input_box");



search.addEventListener('click', function(){

    search_box.classList.add("search_active");

    if(search_box.classList.contains("search_active")){
        input_box.classList.add("input_active");
    }else{
        input_box.classList.remove("input_active");
    }

});


cross.addEventListener('click',function(){

    input_box.classList.remove("input_active");
    search_box.classList.remove("search_active");
    
});

search_box.addEventListener('click', function(e){
    if(e.target.classList.contains("search_box")){
        search_box.classList.remove('search_active');
    }
});


const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


//first-banner section
$(function(){
    $('.parent-banner').slick({
        arrows: false,
        dots: true,
        dotsClass:'dots_container container',
       autoplay: true,
       autoplaySpeed: 5000
    });
});


$(".productSlicks").slick({
    slidesToShow: 4,
    prevArrow:"#newArivalProduct .arrows .leftArrow",
    nextArrow:"#newArivalProduct .arrows .rightArrow",
    responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
          }
        },

        {
            breakpoint: 767,
            settings: {
              slidesToShow: 2,
            }
          },

          {
            breakpoint: 575,
            settings: {
              slidesToShow: 1,
            }
          },
     
      ]
});



//second-banner section 
$(function(){
    $('.parent-banner2').slick({
       arrows: false,
       autoplay: true,
       autoplaySpeed: 5000
    });
});


$('.parentTimmer').slick({
    arrows: false,
    slidesToShow: 2,
    dots: true,
    dotsClass:'dots_Timmer container',
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
      }
    },

    {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        }
      },

      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
        }
      },
 
  ]
});

//latestNews section

$('.latestParentNews').slick({
  arrows: false,
  slidesToShow: 4,
  dots: true,
  dotsClass:'dots_latest container',
  autoplay: true,
  autoplaySpeed: 5000,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
      }
    },

    {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        }
      },

      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
        }
      },
 
  ]
});





//================================ABOUT PAGE STATR================================//

//teamLeaderParent section

$(".teamLeaderParent").slick({
  slidesToShow: 4,
  arrows: false,
  autoplay: true,
  prevArrow:"",
  nextArrow:"",
  autoplaySpeed: 5000,
  responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        }
      },

      {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
          }
        },

        {
          breakpoint: 575,
          settings: {
            slidesToShow: 1,
          }
        },
   
    ]
});


//shoesSliker section 
$(".shoesSlikerParent").slick({
  slidesToShow: 6,
  arrows: false,
  dots: true,
  dotsClass:'dots_shoes container',
  autoplay: true,
  autoplaySpeed: 7000,
  responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        }
      },

      {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
          }
        },

        {
          breakpoint: 575,
          settings: {
            slidesToShow: 1,
          }
        },
   
    ]
});

//================================ABOUT PAGE END================================//








//=============================Shop Page start==================================//




//============================SHOP-DETAILS PAGE ===============================//

$('.ParentTopBigSliker').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  autoplay: true,
  autoplaySpeed: 7000,
  asNavFor: '.ParentBottomSmallSliker'
});
$('.ParentBottomSmallSliker').slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: 0,
  autoplay: true,
  autoplaySpeed: 7000,
  prevArrow:`<span class="left"><i class="fa-solid fa-chevron-left"></i></span>`,
  nextArrow:`<span class="right"><i class="fa-solid fa-chevron-right"></i></span>`,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
      }
    },

    {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
        }
      },

      {
        breakpoint: 575,
        settings: {
          slidesToShow: 3,
        }
      },
 
  ]
});

let quantityPlus = document.querySelector('.quantityPlus');
let quantityMinus = document.querySelector('.quantityMinus');
let qtyInput = document.querySelector('.qtyInput');

let x = 1;
quantityPlus.addEventListener('click', function(){
  if (x === 10){
    prompt("Sorry You Cannot By!");
  }else{
    x++;
    qtyInput.innerHTML = x;
  }
});


quantityMinus.addEventListener('click', function(){
  if (x <= 1){
    prompt("Minimum Level");
  }else{
    x--;
    qtyInput.innerHTML = x;
  }
});


$(".relProductParent").slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 7000,
  prevArrow:`<span class="left"><i class="fa-solid fa-chevron-left"></i></span>`,
  nextArrow:`<span class="right"><i class="fa-solid fa-chevron-right"></i></span>`,
  responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        }
      },

      {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
          }
        },

        {
          breakpoint: 575,
          settings: {
            slidesToShow: 1,
          }
        },
   
    ]
});


