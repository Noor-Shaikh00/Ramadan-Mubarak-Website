document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation Toggle with Blur Effect
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');
  
    mobileMenu.addEventListener('click', () => {
      // Toggle the nav menu visibility
      navMenu.classList.toggle('active');
      // Toggle blur effect on the background
      document.body.classList.toggle('blur-background');
    });
  
    // Auto-close the mobile nav when a nav link is clicked
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        // Remove the active state from the nav menu
        navMenu.classList.remove('active');
        // Remove the blur effect
        document.body.classList.remove('blur-background');
      });
    });
  
    // Prayer Times Toggle (for Testimonials Page)
    const btnPrayerToggle = document.querySelector('.btn-prayer-toggle');
    const prayerTimesDiv = document.getElementById('prayerTimes');
  
    if (btnPrayerToggle) {
      btnPrayerToggle.addEventListener('click', () => {
        // If the prayer times are hidden or not set, show them
        if (!prayerTimesDiv.style.display || prayerTimesDiv.style.display === 'none') {
          prayerTimesDiv.style.display = 'block';
          prayerTimesDiv.classList.add('animate__animated', 'animate__fadeIn');
          btnPrayerToggle.textContent = 'Hide Prayer Times ⏰';
          prayerTimesDiv.addEventListener(
            'animationend',
            () => {
              prayerTimesDiv.classList.remove('animate__animated', 'animate__fadeIn');
            },
            { once: true }
          );
        } else {
          // Otherwise, hide them with a fade-out effect
          prayerTimesDiv.classList.add('animate__animated', 'animate__fadeOut');
          prayerTimesDiv.addEventListener(
            'animationend',
            () => {
              prayerTimesDiv.classList.remove('animate__animated', 'animate__fadeOut');
              prayerTimesDiv.style.display = 'none';
            },
            { once: true }
          );
          btnPrayerToggle.textContent = 'Show Prayer Times ⏰';
        }
      });
    }
  });
  