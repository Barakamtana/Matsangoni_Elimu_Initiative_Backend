// Select leadership slides and navigation buttons
var leadershipSlides = document.querySelectorAll('.leader');
var navigationButtons = document.querySelectorAll('.btn2');

let currentLeaderSlide = 0; // Track the current slide for leadership
const leadershipInterval = 20000; // 10 seconds interval for auto-sliding

// Function to show the specific leadership slide
var showLeadershipSlide = function (index) {
  leadershipSlides.forEach((slide) => slide.classList.remove('active')); // Remove active class from all slides
  navigationButtons.forEach((btn) => btn.classList.remove('active')); // Remove active class from all buttons

  leadershipSlides[index].classList.add('active'); // Activate the target slide
  navigationButtons[index].classList.add('active'); // Activate the target button

  currentLeaderSlide = index; // Update the current slide index
};

// Add click event listeners to leadership navigation buttons
navigationButtons.forEach((btn, i) => {
  btn.addEventListener('click', () => {
    showLeadershipSlide(i);
    resetLeadershipAutoSlide(); // Reset the timer
  });
});

// Automatic slider for leadership section
const autoLeadershipSlide = () => {
  let nextSlide = (currentLeaderSlide + 1) % leadershipSlides.length; // Calculate the next slide index
  showLeadershipSlide(nextSlide); // Show the next slide
};

// Start automatic sliding for leadership section
let leadershipSlideTimer = setInterval(autoLeadershipSlide, leadershipInterval);

// Reset the interval timer when manually navigating
const resetLeadershipAutoSlide = () => {
  clearInterval(leadershipSlideTimer); // Clear the current interval
  leadershipSlideTimer = setInterval(autoLeadershipSlide, leadershipInterval); // Restart the interval
};