var slides = document.querySelectorAll('.home-content');
var btns = document.querySelectorAll('.btn');
var leftChevron = document.querySelector('.chevron.left');
var rightChevron = document.querySelector('.chevron.right');

let currentSlide = 0; // Track the current slide
const slideInterval = 15000; // 15 seconds interval for auto-sliding

// Function to show the specific slide
var showSlide = function (index) {
  slides.forEach((slide) => slide.classList.remove('active')); // Remove active class from all slides
  btns.forEach((btn) => btn.classList.remove('active')); // Remove active class from all buttons

  slides[index].classList.add('active'); // Activate the target slide
  btns[index].classList.add('active'); // Activate the target button

  currentSlide = index; // Update the current slide index
};

// Add event listeners to chevrons
leftChevron.addEventListener('click', () => {
  let previousSlide = (currentSlide - 1 + slides.length) % slides.length; // Loop back to the last slide if at the first
  showSlide(previousSlide);
  resetAutoSlide(); // Reset the timer
});

rightChevron.addEventListener('click', () => {
  let nextSlide = (currentSlide + 1) % slides.length; // Loop back to the first slide if at the last
  showSlide(nextSlide);
  resetAutoSlide(); // Reset the timer
});

// Add click event listeners to buttons
btns.forEach((btn, i) => {
  btn.addEventListener('click', () => {
    showSlide(i);
    resetAutoSlide(); // Reset the timer
  });
});

// Automatic slider
const autoSlide = () => {
  let nextSlide = (currentSlide + 1) % slides.length; // Calculate the next slide index
  showSlide(nextSlide); // Show the next slide
};

// Start automatic sliding
let slideTimer = setInterval(autoSlide, slideInterval);

// Reset the interval timer when manually navigating
const resetAutoSlide = () => {
  clearInterval(slideTimer); // Clear the current interval
  slideTimer = setInterval(autoSlide, slideInterval); // Restart the interval
};