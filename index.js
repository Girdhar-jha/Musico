console.log("welcome to spotify");
// initialise the variables
let songIndex=0;
let masterPlay = document.getElementById("masterPlay");
let progressBar=document.getElementById("progressBar");
let gif = document.getElementById("gif");
let title1 = document.getElementById("bottom-title");
let audio= new Audio('songs/1.mp3');
let songItem = Array.from(document.getElementsByClassName('songItem'));
let songs=[
  {
    songName:"warriyo",filePath:"songs/1.mp3",coverPath:"covers/1.jpg"
  },
  {
    songName:"cielo",filePath:"songs/2.mp3",coverPath:"covers/2.jpg"
  },
  {
    songName:"def kev",filePath:"songs/3.mp3",coverPath:"covers/3.jpg"
  },
  {
    songName:"different heaven",filePath:"songs/4.mp3",coverPath:"covers/4.jpg"
  },
  {
    songName:"me esa kyu hu",filePath:"songs/5.mp3",coverPath:"covers/5.jpg"
  },
  {
    songName:"me esa kyu hu",filePath:"songs/6.mp3",coverPath:"covers/6.jpg"
  }
]

songItem.forEach((element, i)=>
{
  console.log(element,i);
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByTagName("span")[0].innerText = songs[i].songName;
  // let audio1 = new Audio('songs[i].filePath');
  // console.log(audio1.duration);
});
//listen to events
// handle pause/play

masterPlay.addEventListener("click",function(){
  if(audio.paused|| audio.currentTime<=0)
  {
    audio.play();
    masterPlay.classList.remove("fa-play");
    masterPlay.classList.add("fa-pause");
    gif.style.opacity=1;
  }
  else
  {
    audio.pause();
    masterPlay.classList.remove("fa-pause");
    masterPlay.classList.add("fa-play");
    gif.style.opacity=0;
  }
});
audio.addEventListener("timeupdate",function(){
  console.log('timeupdate');
  progress = parseInt((audio.currentTime/audio.duration)*100);
  console.log(progress);
  progressBar.value = progress;
});
progressBar.addEventListener('change',()=>{
  audio.currentTime = progressBar.value*audio.duration/100;
});
const makeAllPlays = ()=>{
  Array.from(document.getElementsByClassName("ok")).forEach(function(element){
    element.classList.remove("fa-pause");
    element.classList.add("fa-play");
  });
};
Array.from(document.getElementsByClassName("ok")).forEach(function(element){
  element.addEventListener('click',function(e){
    makeAllPlays();
    songIndex = e.target.id;
    title1.innerText = songs[songIndex].songName;
    e.target.classList.remove("fa-play");
    e.target.classList.add("fa-pause");
    audio.src = 'songs/'+songIndex+'.mp3';//'songs/${index}.mp3';
    audio.currentTime=0;
    audio.play();
    masterPlay.classList.remove("fa-play");
    masterPlay.classList.add("fa-pause");
  });
});
document.getElementById("next").addEventListener('click',function(){

  if(songIndex>=6)
  {
    songIndex=1;
  }
  else
  songIndex+=1;

  audio.src = 'songs/'+songIndex+'.mp3';//'songs/${index}.mp3';
  audio.currentTime=0;
  audio.play();
  title1.innerText=songs[songIndex].songName;
  masterPlay.classList.remove("fa-play");
  masterPlay.classList.add("fa-pause");
});
document.getElementById("previous").addEventListener('click',function(){
  if(songIndex<=0)
  {
    songIndex=1;
      // title1.innerText = songs[songIndex].songName;
  }
  else
  songIndex-=1;
  // console.log('title');
  audio.src = 'songs/'+songIndex+'.mp3';//'songs/${index}.mp3';
  audio.currentTime=0;
  audio.play();
  title1.innerText = songs[songIndex].songName;
  masterPlay.classList.remove("fa-play");
  masterPlay.classList.add("fa-pause");
});
