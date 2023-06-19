const pianoKeys = document.querySelectorAll('.key');



function playSound(newUrl) {
     const keySound = new Audio(newUrl)
     keySound.play();
} 
pianoKeys.forEach((pianoKeys, i) => {
    const newUrl = '24/key'+(i+1)+'.mp3';
    pianoKeys.addEventListener("click", ()=> playSound(newUrl))
})