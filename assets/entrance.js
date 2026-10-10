/* Arm the entrance before CSS paints, then remove it after the one-time cue. */
(function () {
  if (!matchMedia('(prefers-reduced-motion: no-preference)').matches) return;

  var root = document.documentElement;
  root.classList.add('entrance-once');

  function finish() {
    root.classList.remove('entrance-once');
  }

  document.addEventListener('DOMContentLoaded', function () {
    setTimeout(finish, 2250);
  }, { once: true });
  addEventListener('pagehide', finish, { once: true });
})();
