var microphone = document.getElementById('megaphone');

function adTransition(element) {

	var distanceToTop = window.scrollY + element.getBoundingClientRect().top;
	var scrollTop = document.documentElement.scrollTop + 800;
	
	if (scrollTop > distanceToTop) {
		element.style.transform = "translateX(0em)";
        element.style.transitionDuration= "1s";
	}
}

function scrollHandler() {
	adTransition(megaphone);
}


window.addEventListener('scroll', scrollHandler);



var socialMedia = document.getElementById('socialMedia');

function fadeInOnScroll(element) {

	
	var distanceToTop = window.scrollY + element.getBoundingClientRect().top - 800;
	var elementHeight = element.offsetHeight;
	var scrollTop = document.documentElement.scrollTop;
	
	var opacity = 0;
	
	if (scrollTop > distanceToTop) {
		opacity = 0 + (scrollTop - distanceToTop) / elementHeight;
	}

	if (opacity >= 0) {
		element.style.opacity = opacity;
	}
}


function scrollHandler2() {
	fadeInOnScroll(socialMedia);
}

window.addEventListener('scroll', scrollHandler2);


var image = document.getElementById('bottomImage');
var image2 = document.getElementById('bottomImage2');
var image3 = document.getElementById('bottomImage3');

function imageTransition(element) {

	var distanceToTop = window.scrollY + element.getBoundingClientRect().top;
	var scrollTop = document.documentElement.scrollTop + 1000;
	
	if (scrollTop > distanceToTop) {
		element.style.transform = "translateY(-20em)";
        element.style.transitionDuration= "1s";
	}
}

function scrollHandler3() {
	imageTransition(image);
	scrollHandler4();
}

function scrollHandler4() {
		imageTransition(image2);
		scrollHandler5();
	}
	
function scrollHandler5() {
		imageTransition(image3);
	}

	window.addEventListener('scroll', scrollHandler3);


