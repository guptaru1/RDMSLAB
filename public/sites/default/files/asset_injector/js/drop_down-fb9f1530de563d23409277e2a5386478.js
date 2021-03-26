function dropDown() {
  var buttonclicked = document.activeElement.getAttribute('value');
  var x;
  var button;
  if (buttonclicked == "1"){
    x = document.getElementById("myDIV");
    button = document.getElementById("myButton1");
  }
   if (buttonclicked == "2"){
    x = document.getElementById("vds");
    button = document.getElementById("myButton2");
  }
  if (buttonclicked == "3"){
    x = document.getElementById("tds");
    button = document.getElementById("myButton3");
  }
  if (buttonclicked == "4"){
    x = document.getElementById("seir");
    button = document.getElementById("myButton4");
  }
  if (buttonclicked == "5"){
    x = document.getElementById("textdata");
    button = document.getElementById("myButton5");
  }
  if (buttonclicked == "6"){
    x = document.getElementById("ml");
    button = document.getElementById("myButton6");
  }
  
  
  if (x.style.display === "none") {
    x.style.display = "block";
    
    button.innerHTML ="-";
    x.classList.toggle('fade');
  } else {
  
    x.style.display = "none";
    
    button.innerHTML ="+";
    
  }
} 


var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 5000); // Change image every 2 seconds
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");

  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  
} 

