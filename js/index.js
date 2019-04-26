$( function(){
                   

   var owl = $('.owl-carousel');
owl.owlCarousel({
    items:4,
    loop:false,
    margin:15,
    autoplay:true,
    autoplayTimeout:1500,
    autoplayHoverPause:true
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})



$('.iner-slider').slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll:5
});
	



$('.slidrslick').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});
    
});

