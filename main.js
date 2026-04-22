/* =============================================
   DitzLoveMoney — main.js
   ============================================= */

function toggleQris() {
  const panel = document.getElementById('qris-panel');
  const btn   = document.querySelector('.qris-btn');
  const open  = panel.classList.contains('open');
  panel.classList.toggle('open', !open);
  btn.classList.toggle('is-open', !open);
}

function toggleBlur() {
  document.body.classList.toggle('blur-on');
}
