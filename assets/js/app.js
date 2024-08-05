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