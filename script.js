let inputSection = document.querySelector('#inputArea')
let inputEquation = document.querySelector('#userInput')
let btnAC = document.querySelector('#ac')
let btnArrow = document.querySelector('#arrow')
let btnPercent = document.querySelector('#percentage')
let btnPlus = document.querySelector('#plus')
let btnMinus = document.querySelector('#minus')
let btnTimes = document.querySelector('#times')
let btnDivide = document.querySelector('#divide')
let btnComma = document.querySelector('#comma')
let btnEqual = document.querySelector('#equal')
let btnZero = document.querySelector('#zero')
let btnOne = document.querySelector('#one')
let btnTwo = document.querySelector('#two')
let btnThree = document.querySelector('#three')
let btnFour = document.querySelector('#four')
let btnFive = document.querySelector('#five')
let btnSix = document.querySelector('#six')
let btnSeven = document.querySelector('#seven')
let btnEight = document.querySelector('#eight')
let btnNine = document.querySelector('#nine')
let result
let history


btnOne.addEventListener('click', () => {
    inputEquation.value += 1
})

btnTwo.addEventListener('click', () => {
    inputEquation.value += 2
})

btnThree.addEventListener('click', () => {
    inputEquation.value += 3
})

btnFour.addEventListener('click', () => {
    inputEquation.value += 4
})

btnFive.addEventListener('click', () => {
    inputEquation.value += 5
})

btnSix.addEventListener('click', () => {
    inputEquation.value += 6
})

btnSeven.addEventListener('click', () => {
    inputEquation.value += 7
})

btnEight.addEventListener('click', () => {
    inputEquation.value += 8
})
btnNine.addEventListener('click', () => {
    inputEquation.value += 9
})

btnZero.addEventListener('click', () => {
    inputEquation.value += 0
})

btnPlus.addEventListener('click', () => {
    inputEquation.value += '+'
})

btnMinus.addEventListener('click', () => {
    inputEquation.value += '-'
})

btnTimes.addEventListener('click', () => {
    inputEquation.value += '*'
})

btnDivide.addEventListener('click', () => {
    inputEquation.value += '/'
})

btnComma.addEventListener('click', () => {
    inputEquation.value += '.'
})

btnAC.addEventListener('click', () => {
    inputEquation.value = ''
    history.remove()
})

btnArrow.addEventListener('click', () => {
    inputEquation.value = inputEquation.value.slice(0, -1)
})

btnPercent.addEventListener('click', () => {
    inputEquation.value += '%'
})

btnEqual.addEventListener('click', () => {
    calc()
})

function calc() {
    if (history) {
        history.remove()
    }

    printHistory()
    console.log(inputEquation.value)

    if (inputEquation.value[inputEquation.value.length-1] == '%') {
        result = inputEquation.value.replace(/%$/, '/100')
    } else {
        result = inputEquation.value.replace(/%/g, '/100*')
    }

    inputEquation.value = Number(eval(result))

}

function printHistory () {
    history = document.createElement('p')
    history.setAttribute('id', 'history-calc')

    history.innerText = inputEquation.value

    inputSection.appendChild(history)
}
