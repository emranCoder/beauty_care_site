$(document).ready(function() {

$(".menu-active").on("click",function() {

	$(".header-ul").addClass("header-ul-active");	

});
$(".close-menu").on("click",function() {

	$(".header-ul").removeClass("header-ul-active");

});


$(".tab-li").eq(0).click(function() {

	$(".service-box").eq(0).addClass("service-active");
	$(".service-box").eq(1).removeClass("service-active");
	$(".service-box").eq(2).removeClass("service-active");
	$(".service-box").eq(3).removeClass("service-active");
	$(".service-box").eq(4).removeClass("service-active");
	$(".service-box").eq(5).removeClass("service-active");
	$(".service-box").eq(6).removeClass("service-active");
	$(".tab-li").eq(0).addClass("tab-active");
	$(".tab-li").eq(1).removeClass("tab-active");
	$(".tab-li").eq(2).removeClass("tab-active");
	$(".tab-li").eq(3).removeClass("tab-active");
	$(".tab-li").eq(4).removeClass("tab-active");
	$(".tab-li").eq(5).removeClass("tab-active");
	$(".tab-li").eq(6).removeClass("tab-active");

});

$(".tab-li").eq(1).click(function() {

	$(".service-box").eq(1).addClass("service-active");
	$(".service-box").eq(0).removeClass("service-active");
	$(".service-box").eq(2).removeClass("service-active");
	$(".service-box").eq(3).removeClass("service-active");
	$(".service-box").eq(4).removeClass("service-active");
	$(".service-box").eq(5).removeClass("service-active");
	$(".service-box").eq(6).removeClass("service-active");
	$(".tab-li").eq(1).addClass("tab-active");
	$(".tab-li").eq(0).removeClass("tab-active");
	$(".tab-li").eq(2).removeClass("tab-active");
	$(".tab-li").eq(3).removeClass("tab-active");
	$(".tab-li").eq(4).removeClass("tab-active");
	$(".tab-li").eq(5).removeClass("tab-active");
	$(".tab-li").eq(6).removeClass("tab-active");

});

$(".tab-li").eq(2).click(function() {

	$(".service-box").eq(2).addClass("service-active");
	$(".service-box").eq(0).removeClass("service-active");
	$(".service-box").eq(1).removeClass("service-active");
	$(".service-box").eq(3).removeClass("service-active");
	$(".service-box").eq(4).removeClass("service-active");
	$(".service-box").eq(5).removeClass("service-active");
	$(".service-box").eq(6).removeClass("service-active");
	$(".tab-li").eq(2).addClass("tab-active");
	$(".tab-li").eq(0).removeClass("tab-active");
	$(".tab-li").eq(1).removeClass("tab-active");
	$(".tab-li").eq(3).removeClass("tab-active");
	$(".tab-li").eq(4).removeClass("tab-active");
	$(".tab-li").eq(5).removeClass("tab-active");
	$(".tab-li").eq(6).removeClass("tab-active");

});

$(".tab-li").eq(3).click(function() {

	$(".service-box").eq(3).addClass("service-active");
	$(".service-box").eq(0).removeClass("service-active");
	$(".service-box").eq(1).removeClass("service-active");
	$(".service-box").eq(2).removeClass("service-active");
	$(".service-box").eq(4).removeClass("service-active");
	$(".service-box").eq(5).removeClass("service-active");
	$(".service-box").eq(6).removeClass("service-active");
	$(".tab-li").eq(3).addClass("tab-active");
	$(".tab-li").eq(0).removeClass("tab-active");
	$(".tab-li").eq(1).removeClass("tab-active");
	$(".tab-li").eq(2).removeClass("tab-active");
	$(".tab-li").eq(4).removeClass("tab-active");
	$(".tab-li").eq(5).removeClass("tab-active");
	$(".tab-li").eq(6).removeClass("tab-active");

});

$(".tab-li").eq(4).click(function() {

	$(".service-box").eq(4).addClass("service-active");
	$(".service-box").eq(0).removeClass("service-active");
	$(".service-box").eq(1).removeClass("service-active");
	$(".service-box").eq(2).removeClass("service-active");
	$(".service-box").eq(3).removeClass("service-active");
	$(".service-box").eq(5).removeClass("service-active");
	$(".service-box").eq(6).removeClass("service-active");
	$(".tab-li").eq(4).addClass("tab-active");
	$(".tab-li").eq(0).removeClass("tab-active");
	$(".tab-li").eq(1).removeClass("tab-active");
	$(".tab-li").eq(2).removeClass("tab-active");
	$(".tab-li").eq(3).removeClass("tab-active");
	$(".tab-li").eq(5).removeClass("tab-active");
	$(".tab-li").eq(6).removeClass("tab-active");

});

$(".tab-li").eq(5).click(function() {

	$(".service-box").eq(5).addClass("service-active");
	$(".service-box").eq(0).removeClass("service-active");
	$(".service-box").eq(1).removeClass("service-active");
	$(".service-box").eq(2).removeClass("service-active");
	$(".service-box").eq(3).removeClass("service-active");
	$(".service-box").eq(4).removeClass("service-active");
	$(".service-box").eq(6).removeClass("service-active");
	$(".tab-li").eq(5).addClass("tab-active");
	$(".tab-li").eq(0).removeClass("tab-active");
	$(".tab-li").eq(1).removeClass("tab-active");
	$(".tab-li").eq(2).removeClass("tab-active");
	$(".tab-li").eq(3).removeClass("tab-active");
	$(".tab-li").eq(4).removeClass("tab-active");
	$(".tab-li").eq(6).removeClass("tab-active");

});


$(".tab-li").eq(6).click(function() {

	$(".service-box").eq(6).addClass("service-active");
	$(".service-box").eq(0).removeClass("service-active");
	$(".service-box").eq(1).removeClass("service-active");
	$(".service-box").eq(2).removeClass("service-active");
	$(".service-box").eq(3).removeClass("service-active");
	$(".service-box").eq(4).removeClass("service-active");
	$(".service-box").eq(5).removeClass("service-active");
	$(".tab-li").eq(6).addClass("tab-active");
	$(".tab-li").eq(0).removeClass("tab-active");
	$(".tab-li").eq(1).removeClass("tab-active");
	$(".tab-li").eq(2).removeClass("tab-active");
	$(".tab-li").eq(3).removeClass("tab-active");
	$(".tab-li").eq(4).removeClass("tab-active");
	$(".tab-li").eq(5).removeClass("tab-active");

});

$(".round").eq(1).on("click",function() {
	if ($(".round").eq(0).hasClass("expert-active")) {

	$(".round").eq(1).addClass("expert-active");
	$(".round").eq(0).removeClass("expert-active");
}
$(".experts-clone").addClass("experts-clone-active");
$(".experts-firts").addClass("experts-firts-dective");
$(".experts-clone").removeClass("experts-firts-dective");
$(".experts-firts").removeClass("experts-clone-active");

});

$(".round").eq(0).on("click",function() {
	if ($(".round").eq(1).hasClass("expert-active")) {

	$(".round").eq(0).addClass("expert-active");
	$(".round").eq(1).removeClass("expert-active");
}

$(".experts-clone").addClass("experts-firts-dective");
$(".experts-firts").removeClass("experts-firts-dective");
$(".experts-firts").addClass("experts-clone-active");
$(".experts-clone").removeClass("experts-clone-active");

});

setTimeout(function () {
	$(".preloder").fadeOut();
	$("body").css("visibility","visible");
	$("html").scrollTop($("body"),2000);

},1000);
































	
});