var currentIndex = 0;
var duration = 3000;
var images = [
    "../assets/Images/portal.png",
    "../assets/Images/django.png"
]

window.addEventListener("scroll", function () {
	var nav = document.querySelector("nav");
	nav.classList.toggle("sticky", window.scrollY > 0);
  });
  
// toggle to the correct section
function toggleMenu() {
	var menuToggle = document.querySelector(".toggle");
	var menu = document.querySelector(".menu");
	menuToggle.classList.toggle("active");
	menu.classList.toggle("active");
  }

  // ReadMore Button
  function loadMore() {
		var dots = document.getElementById("dots");
		var moreText = document.getElementById("more");
		var btnText = document.getElementById("myBtn");

		if (dots.style.display === "none") {
			dots.style.display = "inline";
			btnText.innerHTML = "Read more";
			moreText.style.display = "none";
		} else {
			dots.style.display = "none";
			btnText.innerHTML = "Read less";
			moreText.style.display = "inline";
		}
  }

 // projects slideshow
 slideShow();

 function slideShow (){
	let slide= document.getElementById('slide-img').src = images[currentIndex];

	currentIndex++;

	if (currentIndex == images.length){
			currentIndex=0;
	}
	setTimeout(slideShow, duration);

 }

 