// Progressive enhancement: all verified records remain readable without JavaScript.
(() => {
  const select = document.getElementById('quote-scope');
  const verified = document.getElementById('verified-quotes');
  const missing = document.getElementById('missing-quotes');
  if (!select || !verified || !missing) return;
  document.querySelector('.snapshot-filter').hidden = false;
  const update = () => {
    verified.hidden = select.value !== 'US';
    missing.hidden = select.value === 'US';
  };
  select.addEventListener('change', update);
  update();
})();
