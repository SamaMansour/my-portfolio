var currentIndex = 1 ;
var duration = 3000;

var images = [
	'./assets/Images/portal.png',
	'./assets/Images/portfolio.png',
	'./assets/Images/foodi.png'
];

var imageCount = 
[
	'1/3',
	'2/3',
	'3/3'
];

window.addEventListener('scroll', function () {
	var nav = document.querySelector('nav');
	nav.classList.toggle('sticky', window.scrollY > 0);
});
  
// toggle to the correct section
function toggleMenu() {
	var menuToggle = document.querySelector('.toggle');
	var menu = document.querySelector('.menu');
	menuToggle.classList.toggle('active');
	menu.classList.toggle('active');
}

// ReadMore Button
function loadMore() {
	var dots = document.getElementById('dots');
	var moreText = document.getElementById('more');
	var btnText = document.getElementById('myBtn');

	if (dots.style.display === 'none') {
		dots.style.display = 'inline';
		btnText.innerHTML = 'Read more';
		moreText.style.display = 'none';
	} else {
		dots.style.display = 'none';
		btnText.innerHTML = 'Read less';
		moreText.style.display = 'inline';
	}
}

  
function plusSlides(n) {
	if (currentIndex< images.length -1){
		slideShow(currentIndex += n);
	}
}
function slideShow (){
	document.getElementById('slide-img').src = images[currentIndex];
	document.getElementById('img-count').innerHTML = imageCount[currentIndex];
	currentIndex++;

	if (currentIndex == images.length){
		currentIndex= 0;
	}
	setTimeout(slideShow, duration);

}

window.addEventListener('load', (event) => {
	slideShow(); 
});

function clearForm(){
	var form = document.getElementById('contact-us');
	form.reset();
	

}


function checkEmailDomain(){
	let domain = '.*\.com$';
	var email = document.getElementById('email').value;
	if(!email.match(domain)){
		alert('E-mail must end with .com');
	}
	window.location.href = 'mailto:s.jamansour@gmail.com';
	clearForm();
	
}

