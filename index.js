window.addEventListener('scroll', function(){
  var winTop = window.pageYOffset;
  if (winTop >= 30) {
    document.body.classList.add('sticky-header');
  } else {
    document.body.classList.remove('sticky-header');
  }
});