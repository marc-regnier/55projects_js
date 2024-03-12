const btn = document.querySelectorAll('button');
let soundAnimal;

for (let i = 0; i < btn.length ; i++) {
    btn[i].addEventListener('click', animal);
}

function animal(e){
    let sound = e.target.innerText;
    console.log(sound);
    soundAnimal = new Audio(`sound/${sound}.mp3`);
    soundAnimal.play();
}