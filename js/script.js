var btn_no = document.querySelector("#btn_no");
var btn_yes = document.querySelector("#btn_yes");

btn_no.addEventListener("mouseover", btn_no_run);
btn_no.addEventListener("click", btn_no_run);
btn_yes.addEventListener("click", btn_yes_func);

function btn_no_run()
{
    let window_width  = window.innerWidth;
    let window_height = window.innerHeight;
    
    let max_X = window_width  - btn_no.offsetWidth;
    let max_Y = window_height - btn_no.offsetHeight;

    let randomX = Math.floor(Math.random() * max_X);
    let randomY = Math.floor(Math.random() * max_Y);

    btn_no.style.left = randomX + "px";
    btn_no.style.top  = randomY + "px";
}



function btn_yes_func()
{
    let music = document.querySelector("#cute-music");
    let image = document.querySelector("#cute-gif");
    let title = document.querySelector("#title");
    let text = document.querySelector("#text");
    
    title.innerHTML = "Bem... Parece que vou <br> ficar do teu ladinho por <br> toda a minha vida &#128149"
    
    text.style.visibility = "hidden"
    btn_no.style.visibility = "hidden";
    btn_yes.style.visibility = "hidden";
    
    image.style.display = "none";
    music.style.visibility = "visible";
    music.play();
}