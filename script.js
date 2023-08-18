//Variables
let xAttempts = 1
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector('#btnTry')
const btnReset = document.querySelector('#btnReset')
let randomNumber = Math.round(Math.random() * 10)

//Callback Functions
function toggleScreen1(){
    screen1.classList.add('hide')
    screen2.classList.remove('hide')
}


function handleClick(event){
    event.preventDefault()
    const inputNumber = document.querySelector("#inputNumber")
    if(inputNumber.value == randomNumber){
        toggleScreen1()
        document.querySelector(".screen2 h2").innerText = `Parabéns, voce acertou em ${xAttempts} tentativas`
        setTimeout(function () {
            let randomNumber2 = Math.round(Math.random() * 10)
            randomNumber = randomNumber2
          }, "300");
    }
    xAttempts++
    inputNumber.value= ""
}

function toggleScreen2(){
    screen1.classList.remove('hide')
    screen2.classList.add('hide')
}

function handleClickReset(){
    xAttempts = 1
    toggleScreen2()
}
function pressEnter(e){
    if(e.key == 'Enter'){
        handleClickReset()
    }
}


//Events
btnTry.addEventListener('click', handleClick)
btnReset.addEventListener('click', handleClickReset)
document.addEventListener('keydown', pressEnter)
