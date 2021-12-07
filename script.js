let squares = null
let container = document.querySelector('#grid')
let setting = 'normal';

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
        square.brightness = 1;
        square.addEventListener('mouseenter', () => {
            switch (setting) {
                case 'normal':
                    square.style.backgroundColor = "rgb(85, 76, 63)";
                    break
                case 'rainbow':
                    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
                    square.style.backgroundColor = "#" + randomColor;
                    break
                case 'darker':
                    console.log('brightness', square.brightness)
                    square.brightness -= 0.1;
                    square.style.filter = `brightness(${square.brightness})`
                    break
                case 'lighten':
                    console.log('brightness', square.brightness)
                    square.brightness += 0.1;
                    square.style.filter = `brightness(${square.brightness})`
                    break
            }
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

function handleClick(myRadio) {
    setting = myRadio.value;
    // alert('New value: ' + myRadio.value);
}

addSquares(16);
setListeners();