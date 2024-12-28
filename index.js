//Nav Toggle

document.getElementById('menu-icon').addEventListener('click', function () {
  const nav = document.getElementById('navbar'); // Target the <nav> element
  nav.classList.toggle('active'); // Toggle the 'active' class
});

// //Slider Inicial

document.addEventListener("DOMContentLoaded", function() {

    let iAm = ["Data Scientist", "AI Researcher", "Educator", "Machine Learning Engineer", "Programmer", "Zigling", "Psychologist"];
    const spacer = "✦";
    const slider = document.querySelector('.slider');
  
    if (!slider) {
      console.error('Slider element not found');
      return;
    }
  
    function shuffleArrayInPlace(array) {
      // Fisher-Yates (Knuth) Shuffle (O(n))
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }

    function populateSlider() {
      shuffleArrayInPlace(iAm);
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
