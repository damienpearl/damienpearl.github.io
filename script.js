// Toggle the contact form visibility
document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('toggleFormBtn');
    const formWrapper = document.getElementById('contactForm');
  
    if (toggleBtn && formWrapper) {
      toggleBtn.addEventListener('click', () => {
        const isHidden = formWrapper.style.display === 'none' || formWrapper.style.display === '';
        formWrapper.style.display = isHidden ? 'block' : 'none';
        toggleBtn.textContent = isHidden ? 'Hide Form' : 'Get in Touch';
      });
    }
  });




