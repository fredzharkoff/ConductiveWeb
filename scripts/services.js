var microphone = document.getElementById('microphone');

function adTransition(element) {

	var distanceToTop = window.scrollY + element.getBoundingClientRect().top;
	var scrollTop = document.documentElement.scrollTop;
	
	if (scrollTop < distanceToTop) {
		element.style.transform = "translateX(-3em)";
        element.style.transitionDuration= "1s";
	}
}

function scrollHandler() {
	adTransition(microphone);
}


window.addEventListener('scroll', scrollHandler);