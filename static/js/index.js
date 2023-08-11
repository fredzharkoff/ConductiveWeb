var electric = document.getElementsByClassName("serviceElem")

function fadeOutOnScroll(element) {

	
	var distanceToTop = window.scrollY + element.getBoundingClientRect().top;
	var elementHeight = element.offsetHeight;
	var scrollTop = document.documentElement.scrollTop;
	
	var opacity = 1;
	
	if (scrollTop > distanceToTop) {
		opacity = 1 - ((distanceToTop - scrollTop) / elementHeight);
	}

	if (opacity >= 0) {
		element.style.opacity = opacity;
	}
}

function scrollHandler() {
	fadeOutOnScroll(electric);
}

window.addEventListener('scroll', scrollHandler);
