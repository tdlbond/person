var mySwiper=new Swiper(".swiper-container",{
	pagination:".swiper-pagination",
	paginationClickable:true,
	direction:"vertical",
	mousewheelControl:true,
	onInit:function(swiper){
		swiperAnimateCache(swiper);  
		swiperAnimate(swiper); 
	},
	onSlideChangeEnd:function(swiper){
		swiperAnimate(swiper); 
		if(swiper.activeIndex==3){
			$(".expirence-middle").css("animation","moveLine 3s linear 0.7s forwards");
		}else{
			$(".expirence-middle").css("animation","none");
		}
	}
	
});

$(function(){
	var i = 1;
	$(".music").click(function(){
		if(i%2 != 0 ){
			$(".music").css("animation","paused");
		}else{
			$(".music").css("animation","rotateMusic 5s linear infinite");
		}
		i++;	
	});
})
