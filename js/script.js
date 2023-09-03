var btnNo = document.querySelector(".btn-no");
var btnYes = document.querySelector(".btn-yes");

btnNo.addEventListener("mouseover", btnNoRun);
btnNo.addEventListener("click", btnNoRun);
btnYes.addEventListener("click", btnYesFunc);

function btnNoRun()
{
    let window_width  = window.innerWidth;
    let window_height = window.innerHeight;
    
    let max_X = window_width  - btnNo.offsetWidth;
    let max_Y = window_height - btnNo.offsetHeight;

    let randomX = Math.floor(Math.random() * max_X);
    let randomY = Math.floor(Math.random() * max_Y);
    
    btnNo.style.top  = randomY + "px";
    btnNo.style.left = randomX + "px";
}   

function btnYesFunc()
{
    const music = document.querySelector("#cute-music");
    const image = document.querySelector("#cute-gif");
    const title = document.querySelector("#title");
    const text = document.querySelector("#text");
    const videos = ["./midia/music.mp4", "./midia/music2.mp4", "./midia/music3.mp4", "./midia/music4.mp4", "./midia/music5.mp4"]

    const finalVideo = Math.floor(Math.random()*videos.length);


    title.innerHTML = "Bem... Parece que vou <br> ficar do teu ladinho por <br> toda a minha vida &#128149"
    
    

    text.style.display = "none";
    btnNo.style.display = "none";
    btnYes.style.display = "none";
    
    image.style.display = "none";
    music.src = videos[finalVideo];
    music.style.display = "block";
    music.play();
}