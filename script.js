document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-item a');
    navLinks.forEach(link => {
      link.addEventListener('click', event => {
        event.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  
    // Change navbar background color on scroll
    const navbar = document.querySelector('.navbar');
    const originalBackgroundColor = getComputedStyle(navbar).backgroundColor;
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  
    // Pop-up for contact buttons
    const chatButtons = document.querySelectorAll('.chat-button');
    chatButtons.forEach(button => {
      button.addEventListener('click', () => {
        alert('Thank you for reaching out! Our team will get back to you shortly.');
      });
    });
  });
  