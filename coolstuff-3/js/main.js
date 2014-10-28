$(document).ready(function() {
  // SVG Path Animation Shiz
  var $path = $('.path'),
      length;

  $path.each(function() {
      length = this.getTotalLength();

      // clear previously set transitions
      this.style.transition = this.style.WebkitTransition = 'none';

      // starting positions
      this.style.strokeDasharray = length + ' ' + length;
      this.style.strokeDashoffset = length;

      this.getBoundingClientRect();

      // declare transition
      this.style.transition = this.style.WebkitTransition = '1.5s linear stroke-dashoffset';
  });

  $path.css('stroke-dashoffset', '0');

  setTimeout(function() {
      $('.box').addClass('in');
  }, 1750);
});
