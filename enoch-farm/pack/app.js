/*$(function(){
    $('.home-slider').owlCarousel({
        margin:30,
        smartSpeed:100
    });
});*/
 
$('.home-slider').owlCarousel({
    center: true,
    items:2,
    loop:true,
    margin:10,
    dots:false,
    Type: Boolean,
    default:false,
    autoplay:true,
    autoplayTimeout:1700,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        }        
    }
});