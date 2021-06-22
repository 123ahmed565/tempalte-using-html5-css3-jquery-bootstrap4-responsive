// Start Sliderusing js

// let upper=document.querySelector('.upper-bar'),
//  nav=document.querySelector('.navbar'),
//  slider =document.querySelector('.slider'),
//  winh=window.innerHeight,
//  geth=(winh-(upper.offsetHeight+nav.offsetHeight));
//  slider.style.height='${geth}px';


// Start Slider using jquery
$(function(){
'use strict';
var winh=$(window).height(),
upperh=$('.upper-bar').innerHeight(),
navh=$('.navbar').innerHeight();
$('.slider , .carousel-item').height(winh-(upperh+navh));
});



//start shuffle work using jquery

$('.featured-work ul li').on('click',function(){
$(this).addClass('active').siblings().removeClass('active');
if($(this).data('class')==='all'){
    $('.shuffle-images .col-md-3').css('opacity',1);
}
else{
    $('.shuffle-images .col-md-3').css('opacity','.5');
    $($(this).data('class')).parent().css('opacity',1);
}
});

