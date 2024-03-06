const input = document.querySelector('input');
const btn = document.querySelector('button');
const output = document.querySelector('.output');
const h1 = document.createElement('h1');
output.append(h1)

btn.addEventListener('click', () => {
    let name = input.value.charAt(0).toUpperCase() + input.value.slice(1);
    h1.innerHTML = `Hello Welcome, ${name}`;

});