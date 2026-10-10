/* scale factor for the measured 1546x1017 canvas */
(function(){var r=document.documentElement,raf=0;
function fit(){raf=0;var w=window.innerWidth,h=window.innerHeight;r.style.setProperty('--k',Math.min(w/1546,h/1017).toFixed(5))}
fit();addEventListener('resize',function(){if(!raf)raf=requestAnimationFrame(fit)},{passive:true});
addEventListener('orientationchange',fit);})();
/* mobile menu: open/close, Escape, outside tap, link tap, focus return */
(function(){var r=document.documentElement,b=document.getElementById('burger'),nav=document.getElementById('primary-nav');
if(!b||!nav)return;var mq=matchMedia('(max-width:699.98px)');
function set(open,focus){r.classList.toggle('menu-open',open);b.setAttribute('aria-expanded',open);b.setAttribute('aria-label',open?'Close menu':'Open menu');
  if(open&&focus!==false){var a=nav.querySelector('a');a&&a.focus({preventScroll:true});}}
b.addEventListener('click',function(){var o=!r.classList.contains('menu-open');set(o);if(!o)b.focus();});
nav.addEventListener('click',function(e){if(e.target.closest('a'))set(false);});
document.addEventListener('keydown',function(e){if(e.key==='Escape'&&r.classList.contains('menu-open')){set(false);b.focus();}});
document.addEventListener('click',function(e){if(r.classList.contains('menu-open')&&!nav.contains(e.target)&&!b.contains(e.target))set(false,false);});
(mq.addEventListener?mq.addEventListener('change',function(){set(false,false)}):mq.addListener(function(){set(false,false)}));})();
