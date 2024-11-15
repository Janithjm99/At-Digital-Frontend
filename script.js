// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
  const faqHeaders = document.querySelectorAll('.what-is-webflow-and');

  faqHeaders.forEach((header) => {
    header.addEventListener('click', () => {
      const answer = header.nextElementSibling;
      const toggleIcon = header.querySelector('.toggle');

      if (answer.style.display === 'block') {
        answer.style.display = 'none';
        toggleIcon.textContent = '+';
      } else {
        answer.style.display = 'block';
        toggleIcon.textContent = '-';
      }
    });
  });

    // Initially hide all the answers
    const allAnswers = document.querySelectorAll(".FAQS p");
    allAnswers.forEach(answer => {
        answer.style.display = "none"; // Hide the answers on page load
    });
});
