
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

$(function(){
    $('.parent-banner').slick({
        arrows: false,
        dots: true,
        dotsClass:'dots_container container',
        // autoplay: true,
        // autoplaySpeed: 3000,
    });
});