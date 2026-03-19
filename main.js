// Vite entry point intentionally minimal for static landing page.

// Make div.project-card[data-href] clickable like an <a> tag,
// but allow inner links (demo, etc.) to navigate independently.
document.querySelectorAll('.project-card[data-href]').forEach(card => {
  card.addEventListener('click', e => {
    if (e.target.closest('a')) return;
    window.open(card.dataset.href, '_blank', 'noreferrer');
  });
});
