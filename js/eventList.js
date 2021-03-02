window.onload= function () {
const videos = document.querySelectorAll('video')
const buttons = document.querySelectorAll('.vid-btn')
for (let i = 0; i < videos.length; i++) {
    videos[i].addEventListener('mouseover', function() {
      console.log('play')
      videos[i].play()
    })
    videos[i].addEventListener('mouseout', function() {
      console.log('pause')
      videos[i].pause()
      videos[i].currentTime = 0;
    })
   
  }
    
};