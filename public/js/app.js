(function() {
  'use strict';

  var song = null;

  var audioLoader = document.getElementById('audio-loader');
  audioLoader.addEventListener('change', handleAudio, false);

  var play = document.getElementsByClassName('pp')[0];
  var stop = document.getElementsByClassName('stp')[0];
  var toggle_play = true;


  function handleAudio(event) {
    var reader = new FileReader();

    reader.onload = function(event) {
      song = new Audio(event.target.result);
      //play_song();
    }

    reader.readAsDataURL(event.target.files[0]);
  }

  play.addEventListener('click', function(event) {
    event.preventDefault();

    if (toggle_play) {
      play.setAttribute('src', 'public/icons/pause.svg');
      toggle_play = false;
      play_song();
    } else {
      play.setAttribute('src', 'public/icons/play.svg');
      toggle_play = true;
      pause_song();
    }
  });

  stop.addEventListener('click', function(event) {
    event.preventDefault();
    stop_song();
  });

  function play_song() {
    toggle_play = false;
    play.setAttribute('src', 'public/icons/pause.svg');

    song.play();
  }

  function pause_song() {
    song.pause();
  }

  function stop_song() {
    toggle_play = true;
    play.setAttribute('src', 'public/icons/play.svg');

    song.pause();
    song.currentTime = 0;
  }

})();
