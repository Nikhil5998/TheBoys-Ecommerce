document.addEventListener('DOMContentLoaded', function() {
    var slides = document.querySelectorAll('.slide');
    var currentSlide = 0;
  
    setInterval(function() {
      // Hide the current slide
      slides[currentSlide].classList.remove('active');
  
      // Move to the next slide
      currentSlide = (currentSlide + 1) % slides.length;
  
      // Show the next slide
      slides[currentSlide].classList.add('active');
    }, 2000); // Change slide every 2 seconds
  });
  const sliders = document.querySelectorAll('.slider');
        let currentSlider = 0;

        function showSlider(n) {
            sliders[currentSlider].classList.remove('active');
            currentSlider = (n + sliders.length) % sliders.length;
            sliders[currentSlider].classList.add('active');
        }

        function startSlideshow() {
            setInterval(() => {
                showSlider(currentSlider + 1);
            }, 3000); // Adjust the time (in milliseconds) between each slide transition
        }

        startSlideshow();
        // Toggle the visibility of the dropdown menu
function toggleDropdown() {
  var dropdown = document.querySelector('.dropdown');
  dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}

// Attach event listener to the parent list item
var dropdownParent = document.querySelector('.menu > li:nth-child(2)');
dropdownParent.addEventListener('click', toggleDropdown);

//js for responsive mode of about us page
var sliderImages = document.querySelectorAll('.slider img');
var currentSlide = 0;

function showSlide(slideIndex) {
  for (var i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = 'none';
  }
  sliderImages[slideIndex].style.display = 'block';
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % sliderImages.length;
  showSlide(currentSlide);
}

function startSlideshow() {
  setInterval(nextSlide, 3000);
}

showSlide(currentSlide);
startSlideshow();
//js for product gallery
