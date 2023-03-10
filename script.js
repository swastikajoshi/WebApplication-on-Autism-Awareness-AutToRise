// Select the "Get Started" button
const getStartedButton = document.querySelector('.btn');

// Add a click event listener to the button
getStartedButton.addEventListener('click', (event) => {  
  event.preventDefault();

  // Scroll to the services section when the button is clicked
  const servicesSection = document.getElementById('services');
  servicesSection.scrollIntoView({
    behavior: 'smooth'
  });

  // Add a class to the button to make it pulse
  getStartedButton.classList.add('pulse');

  // Remove the class after 1 second to stop the pulsing animation
  setTimeout(() => {
    getStartedButton.classList.remove('pulse');
  }, 1000);
});

// Select all the testimonials
const testimonials = document.querySelectorAll('.testimonial');

// Loop through the testimonials and add a hover effect
testimonials.forEach((testimonial) => {
  testimonial.addEventListener('mouseenter', () => {
    // Increase the font size and add a drop shadow on hover
    testimonial.style.fontSize = '1.2rem';
    testimonial.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.3)';
  });

  testimonial.addEventListener('mouseleave', () => {
    // Reset the font size and drop shadow on mouse leave
    testimonial.style.fontSize = '1.1rem';
    testimonial.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.2)';
  });
});
