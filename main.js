// Vite entry point intentionally minimal for static landing page.

// Make div.project-card[data-href] clickable like an <a> tag,
// but allow inner links (demo, etc.) to navigate independently.
document.querySelectorAll('.project-card[data-href]').forEach(card => {
  card.addEventListener('click', e => {
    if (e.target.closest('a')) return;
    window.open(card.dataset.href, '_blank', 'noreferrer');
  });
});

// Initialize intersection observer for terminal animations
document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target); // Only play once when scrolled into view
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('.terminal-container').forEach(terminal => {
    observer.observe(terminal);
  });
});
