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

document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("theme-toggle");
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark-theme");
    document.body.classList.remove("light-theme");
  } else if (savedTheme === "light") {
    document.body.classList.add("light-theme");
    document.body.classList.remove("dark-theme");
  }
  toggleButton.addEventListener("click", function () {
    if (document.body.classList.contains("dark-theme")) {
      document.body.classList.remove("dark-theme");
      document.body.classList.add("light-theme");
      localStorage.setItem("theme", "light");
    } else {
      document.body.classList.remove("light-theme");
      document.body.classList.add("dark-theme");
      localStorage.setItem("theme", "dark");
    }
  });
});

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
