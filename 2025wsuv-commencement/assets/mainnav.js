document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('#main-nav a');
  const currentPath = window.location.pathname + window.location.hash;

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    
    // Normalize paths for comparison
    const linkPath = new URL(href, window.location.origin).pathname + new URL(href, window.location.origin).hash;

    if (currentPath === linkPath || currentPath.endsWith(href)) {
      link.classList.add('is-active');
    }

    // Smooth scroll for anchor links
    if (href.startsWith('#')) {
      link.addEventListener('click', event => {
        event.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }

        // Update active class on click
        navLinks.forEach(l => l.classList.remove('is-active'));
        link.classList.add('is-active');
      });
    }
  });
});
