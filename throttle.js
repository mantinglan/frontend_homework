let throttlePause = false;
 
function throttle (func, delay) {
  if (throttlePause) return;

  throttlePause = true;

  setTimeout(() => {
    func();
    throttlePause = false;
  }, delay);
};