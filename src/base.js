// Keyboard Functionality
window.addEventListener('keydown',function(e){
  var audio = document.querySelector('audio[key="' + e.keyCode + '"]');
  var key = document.querySelector('div[key="' + e.keyCode + '"]');


  if(!audio) return;
  
  audio.currentTime = 0; // rewind to start
  audio.play();

  key.classList.add('playing');
});

var keys = document.querySelectorAll('div[key]');

keys.forEach(function(key){
  key.addEventListener('transitionend', function(e){
    if(e.propertyName !== 'transform') return; 

    // console.log(this); find what this is

    this.classList.remove('playing');
  })

  // Click Functionality
  key.addEventListener('click', function(e){
    var el = this.getAttribute('key');

    var certain_audio = document.querySelector('audio[key="' + el + '"]');

    certain_audio.currentTime = 0;
    certain_audio.play();
    this.classList.add('playing');
  });
});
