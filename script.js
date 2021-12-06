let squares = null
let container = document.querySelector('#grid')

function addSquares(dimension) {
    container.innerHTML = ''
    for (let row = 0; row < dimension; row++) {
        for (let col = 0; col < dimension; col++) {
            let newElement = document.createElement('div')
            newElement.classList.add('square')
            container.appendChild(newElement)
        }
    }
}

function setListeners() {
    squares = document.querySelectorAll('.square')
    squares.forEach((square) => {
        square.addEventListener('mouseenter', () => {
            console.log(square.classList)
            square.classList.add('drawn')
        });
    });
}

let btn = document.querySelector('.btn')
let drawn = document.querySelectorAll('.drawn')

btn.addEventListener('click', () => {
    let input = prompt("Select a new number of squares per side.")
    if (input === null) {
        return
    }

    squares.forEach((item) => {
        item.classList.remove('drawn')
    });
    
    document.getElementById("grid").style.gridTemplateColumns = `repeat(${input}, 1fr)`;
    document.getElementById("grid").style.gridTemplateRows = `repeat(${input}, 1fr)`;
    
    addSquares(input);
    setListeners();
})

addSquares(16);
setListeners();