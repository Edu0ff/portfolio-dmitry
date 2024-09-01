//Slider Inicial

document.addEventListener("DOMContentLoaded", function() {

    const iAm = ["Data Scientist", "AI Researcher", "Instructor", "Professor", "Machine Learning Enthusiast"];
    const spacer = "✦";
    const slider = document.querySelector('.slider');
  
    if (!slider) {
      console.error('Slider element not found');
      return;
    }
  
    function populateSlider() {
      iAm.forEach(text => {
        const span = document.createElement('span');
        if (span) {
          span.textContent = text + " " + spacer;
          slider.appendChild(span);
        }
      });
  
      // Clone the elements to make the slider infinite
      const clone = slider.cloneNode(true);
      if (clone) {
        slider.appendChild(clone);
      }
    }
  
    // Function to adjust the animation duration based on content width
    function adjustAnimationDuration() {
      const sliderWidth = slider.scrollWidth;
      const containerWidth = document.querySelector('.slider-container').offsetWidth;
      const animationDuration = sliderWidth / containerWidth * 10; // Adjust speed by changing the multiplier
  
      slider.style.animationDuration = `${animationDuration}s`;
    }
  
    // Initialize the slider
    populateSlider();
    adjustAnimationDuration();
  
    // Adjust the animation duration if the window is resized
    window.addEventListener('resize', adjustAnimationDuration);
  });
