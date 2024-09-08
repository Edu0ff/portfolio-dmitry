//Slider Inicial

document.addEventListener("DOMContentLoaded", function() {

    const iAm = ["Data Scientist", "AI Researcher", "Born Communicator", "Data Analyst", "Machine Learning Enthusiast", "Programmer"];
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

      const clone = slider.cloneNode(true);
      if (clone) {
        slider.appendChild(clone);
      }
    }
  
    function adjustAnimationDuration() {
      const sliderWidth = slider.scrollWidth;
      const containerWidth = document.querySelector('.slider-container').offsetWidth;
      const animationDuration = sliderWidth / containerWidth * 10;
  
      slider.style.animationDuration = `${animationDuration}s`;
    }
  
    populateSlider();
    adjustAnimationDuration();
  
    window.addEventListener('resize', adjustAnimationDuration);
  });

//Dark-Light theme toggle

//Full section scrolling
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");

  const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5
  };

  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.scrollIntoView({ behavior: "smooth" });
          }
      });
  }, options);

  sections.forEach(section => {
      observer.observe(section);
  });
});
