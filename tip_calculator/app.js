const input = document.querySelector('input');
const btn = document.querySelector('button');
const output = document.querySelector('.output');

btn.addEventListener('click', () => {
    console.log(input.value);
    if(isNaN(input.value)){
        output.innerHTML = "It's not a number";
    } else {
        let tips = (input.value * 0.15).toFixed(2);
        output.innerHTML = `You should tip $${tips} on $${input.value}`;
    }
});
