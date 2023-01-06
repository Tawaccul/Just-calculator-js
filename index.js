const inputOne = document.querySelector('.js-a');
const inputTwo = document.querySelector('.js-b');
const btn = document.querySelector('.js-btn');
const output = document.querySelector('.js-out');
const select = document.querySelector('.js-sel');

btn.addEventListener('click', function(){
    const a = Number(inputOne.value);
    const b = Number(inputTwo.value);
    const opera = select.value;
    const result = calculate({
        a,
        b,
        opera
    });
    output.innerHTML = result;
})
