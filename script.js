$(document).ready(function(){
$(window).scroll(function(){
if(this.scrollY > 20){
$('.navbar').addClass("sticky");
}
else{
$('.navbar').removeClass("sticky");
}
if(this.scroll > 500){
	$('.scroll-up-btn').addClass("show");
}
else{
	$('.scroll-up-btn').removeClass("show");
}
});
$('.scroll-up-btn').click(function(){
$('html').animate({scrolltop:0});	
});
$('.menu-btn').click(function(){
	$('.navbar .menu').toggleClass("active");
	$('.menu-btn i').toggleClass("active");
});
});