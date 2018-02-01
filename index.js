window.addEventListener('scroll', function(){
  var winTop = window.pageYOffset;
  if (winTop >= 30) {
    document.body.classList.add('sticky-header');
  } else {
    document.body.classList.remove('sticky-header');
  }
});


var modal = document.getElementById('modal');
var close = document.getElementsByClassName("close")[0];
close.addEventListener('click', function(){
	modal.style.display = 'none';
});
setTimeout(function(){
	modal.style.display = 'block';
}, 2000)


/*
var close = document.getElementsByClassName("close")[0];
//var nope = document.getElementsByClassName("nope")[0];
var modal = document.getElementById('modal');
modal.addEventListener('click', function(){
	(function(close){
	modal.style.display = '.modal.hidden';
})

var modal = document.getElementById('modal');
var button = document.getElementById("submit");

function modalDelay(){
	modal.style.display= 'block';
}
setTimeout(function(){
	modalDelay();
}, 3000);

button.addEventListener('click', function(){
	modal.style.display= 'hidden'
})
*/

//modal.addEventListener('click', function(){

//})

