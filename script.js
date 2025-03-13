document.addEventListener("DOMContentLoaded", function () {
  let lastScrollTop = 0;
  const body = document.body;

  window.addEventListener("scroll", function () {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > 50) {
      // When scrolled past the header
      body.classList.add("scrolled");
    } else {
      // When scrolling back up
      body.classList.remove("scrolled");
    }
    lastScrollTop = scrollTop;
  });
});



  
  document.addEventListener("DOMContentLoaded", function() {
    const redirectButton = document.getElementById("redirectButton");

    redirectButton.addEventListener("click", function() {
        window.location.href = "2.html";
    });
});




let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 2500);
  }