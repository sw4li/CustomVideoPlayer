let playBtn = document.getElementById('play-btn')
let video =  document.querySelector('.video')
let progressBar = document.querySelector('.progress-bar')
let progressRange = document.getElementsByClassName('progress-range')
let fullscreen = document.getElementsByClassName('fullscreen')
let volume = document.getElementById('volume-icon')  

// globals
let videoplaying =false;
let audiomuted=false;


// events
document.addEventListener('keydown',(e)=>{
    if(e.code == 'Space'){
       playPause();
    }
})

document.addEventListener('keydown',(e)=>{
    if(e.code == 'ArrowRight'){
        let move=(video.currentTime*1.8)
        video.currentTime=move
    }
})
document.addEventListener('keydown',(e)=>{
    if(e.code == 'ArrowLeft'){
        let move=(video.currentTime*.8)
        video.currentTime=move
    }
})

playBtn.addEventListener('click',playPause);
video.addEventListener('click',playPause);
video.addEventListener('timeupdate',updateProgressBar)
progressRange[0].addEventListener('click',seekProgressBar)
// fullscreen
fullscreen[0].addEventListener('click',()=>{
    video.requestFullscreen();
})
// volume
volume.addEventListener('click',()=>{
   if(audiomuted == false){
       video.muted = true;
       audiomuted=true;
       volume.classList.replace('fa-volume-up','fa-volume-xmark')
   }
   else{
    video.muted=false;
    audiomuted=false;
    volume.classList.replace('fa-volume-xmark','fa-volume-up')
   }

})


// functions

function playPause(){
    if(!videoplaying){  // if(videoplaying == false)    
        video.play();
        videoplaying=true;
        playBtn.classList.replace('fa-play','fa-pause')
    }
    else{
        video.pause();
        videoplaying=false;
        playBtn.classList.replace('fa-pause','fa-play')
    }
}

function updateProgressBar(e){
let currentTime = e.target.currentTime;
let duration = e.target.duration;
progressBar.style.cssText = `width:${(currentTime/duration*100)}%`
}

function seekProgressBar(e){
let clickedWidth= e.offsetX;
let totalWidth = this.clientWidth;
// video.duration    for video length
currentRange = (clickedWidth/totalWidth)*video.duration;
// inbuilt video start position
video.currentTime=currentRange;     
}

