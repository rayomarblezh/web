document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('topBtn');
  if (btn) {
    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});
