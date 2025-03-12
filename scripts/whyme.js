document.addEventListener("DOMContentLoaded", function () {
    const hobbies = document.querySelectorAll(".hobby");

    hobbies.forEach(hobby => {
        let randomDelay = (Math.random() * 1.5 + 0.5).toFixed(2) + "s"; // Between 0.5s and 2s
        hobby.style.setProperty("--fade-delay", randomDelay);
    });
});
setTimeout(()=>{
    document.getElementById('preloader').style.display = 'none';
},1500);
document.getElementById('open-menu').addEventListener('click',()=>{
    document.getElementById('burger-menu').style.top = '0px';
});
document.getElementById('close-menu').addEventListener('click',()=>{
    document.getElementById('burger-menu').style.top = '-1000px';
});
document.addEventListener("DOMContentLoaded", function () {
    const achievements = document.querySelectorAll('.achievement');
  
    // Function to check if an element is in the viewport
    function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return rect.top >= 0 && rect.bottom <= window.innerHeight;
    }
  
    // Function to handle scroll event
    function handleScroll() {
      achievements.forEach((achievement) => {
        if (isInViewport(achievement)) {
          achievement.classList.add('visible');
        }
      });
    }
  
    // Initial check for visibility on page load
    handleScroll();
  
    // Listen for scroll events
    window.addEventListener('scroll', handleScroll);
  });

  document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector('.achievements-container');
    
    // Function to check if the container is in the viewport
    function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return rect.top >= 0 && rect.bottom <= window.innerHeight;
    }
  
    // Function to handle scroll event
    function handleScroll() {
      if (isInViewport(container)) {
        container.classList.add('visible');
      }
    }
  
    // Initial check for visibility on page load
    handleScroll();
  
    // Listen for scroll events
    window.addEventListener('scroll', handleScroll);
  });
  