const contentArea = document.querySelector(".content-area");
const sideBar = document.querySelector(".side-bar");

window.onresize = ()=> controlSideBarFloating();
window.onload = ()=> controlSideBarFloating();
window.onscroll = ()=> controlSideBarFloating();

// let define some variables
var leftBlock = contentArea;
var rightBlock = sideBar;
var topSpace = 10;
var breakpoint = 992;
var stickyClass = 'sticky-sidebar';
var bottomFixedClass = "bottom-fixed-sidebar";





function controlSideBarFloating(){
	var rectL = leftBlock.getBoundingClientRect();
	var rectR = rightBlock.getBoundingClientRect();
	if (window.innerWidth >= breakpoint) {
		if (rectL.top-topSpace + (rectL.height - rectR.height) >= 0 && rectL.top-topSpace <= 0) {
			// rightBlock.style.top = 

			rightBlock.classList.add(stickyClass);
			rightBlock.classList.remove(bottomFixedClass)
		}else if(rectL.top-topSpace + (rectL.height - rectR.height) <= 0){
			rightBlock.classList.remove(stickyClass);
			rightBlock.classList.add(bottomFixedClass);
		}else{
			rightBlock.classList.remove(stickyClass);
			rightBlock.classList.remove(bottomFixedClass);
		}
	}else{
		rightBlock.classList.remove(stickyClass);
		rightBlock.classList.remove(bottomFixedClass);
	}
}

controlSideBarFloating();