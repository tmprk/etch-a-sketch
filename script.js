let columnAndRow = 16
let container = document.querySelector('.grid')
let value = document.querySelector('#value')
let range = document.querySelector('#myRange')

for (let row = 0; row < 16; row++) {
    for (let col = 0; col < 16; col++) {
    let newElement = document.createElement('div')
        newElement.classList.add('square')
        container.appendChild(newElement)
    }
}

let squares = document.querySelectorAll('.square')
let btn = document.querySelector('.btn')
let drawn = document.querySelectorAll('.drawn')

btn.addEventListener('click', () => {
    squares.forEach((item) => {
        item.classList.remove('drawn')
        console.log('hi')
    });
})

squares.forEach((square) => {
    square.addEventListener('mouseenter', () => {
        console.log(square.classList)
        square.classList.add('drawn')
    });
});