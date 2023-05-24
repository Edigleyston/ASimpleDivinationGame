//variables
let xAttempts = 1
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")

const btnTry = document.querySelector('#btnTry')
const btnReset = document.querySelector('#btnReset')
        
//callback function
function handleClick(event){
    event.preventDefault()

    const inputNumber = document.querySelector("#inputNumber")

    
    if(inputNumber.value == randomNumber){
        screen1.classList.add("hide")
        screen2.classList.remove("hide")
        
        document.querySelector(".screen2 h2").innerText = `Parabéns, voce acertou em ${xAttempts} tentativas`
        
    }
    xAttempts++
    inputNumber.value= ""
}


//events
btnTry.addEventListener('click', handleClick)
btnReset.addEventListener('click', function(){
    xAttempts = 1
    screen1.classList.remove('hide')
    screen2.classList.add('hide')

})
