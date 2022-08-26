 
 let mMenuOpener = document.querySelector(".m-menu-opener button");
 let mobileMenu = document.querySelector(".mobile-menu");
 let mMenuClose = document.querySelector(".m-menu-close button");
 let body = document.querySelector("body");

 mMenuOpener.addEventListener("click", function(){
 	mobileMenu.style.opacity = "1";
 	mobileMenu.style.pointerEvents = "auto";
 },true)

  mobileMenu.addEventListener("click", function(){
 	mobileMenu.style.opacity = "1";
 	mobileMenu.style.pointerEvents = "auto";
 },true)


 mMenuClose.addEventListener("click", function(){
 	mobileMenu.style.opacity = "0";
 	mobileMenu.style.pointerEvents = "none";
 },true)



 body.addEventListener("click", function(){
 	mobileMenu.style.opacity = "0";
 	mobileMenu.style.pointerEvents = "none";
 },true)






 

 // LG SCREEN DROP DOWN
 let myDropdown = document.querySelector(".lang-drop-open");
 let dropdownMenu = document.querySelector(".mydrop");

myDropdown.addEventListener("click", function(){
	dropdownMenu.classList.toggle("block");
})

dropdownMenu.addEventListener("click", function(){
	dropdownMenu.classList.add("block");
})


body.addEventListener("click", function(){
	dropdownMenu.classList.remove("block");
},true)


 // Mobile SCREEN DROP DOWN
 let mMDrop_open = document.querySelector(".mDrop-open");
 let mM_Mdrop = document.querySelector(".m-Mdrop");

mMDrop_open.addEventListener("click", function(){
	mM_Mdrop.classList.toggle("block");
})

dropdownMenu.addEventListener("click", function(){
	dropdownMenu.classList.add("block");
})


body.addEventListener("click", function(){
	dropdownMenu.classList.remove("block");
},true)






// LINK POPUP
 let descPop = document.querySelectorAll(".popup-open");
 let descPopup_close = document.querySelectorAll(".desc-popup button");
 let descPopup = document.querySelectorAll(".desc-popup");

 descPop.forEach((e)=>{
 	e.onclick = function(){
 		e.nextElementSibling.style.display = "block"
 	}
 })


 descPopup_close.forEach((e)=>{
 	e.onclick = function(){
 		e.parentElement.style.display = "none"
 	}
 })
descPopup.forEach((e)=>{
	body.addEventListener("click", function(){
		e.style.display = "none";
	},true)

	e.addEventListener("click", function(){
		e.style.display = "block";

	},true)
})






