/*
-----Jogo de Advinhação-----
Apresente a mensagem ao usuário:
"Advinhe o número que estou pensando. Está entre 0 e 10"

Crie uma lógica para gerar um número aleatório
e verificar se o número digitado é o mesmo que o aleatório gerado
pelo sistema.

Enquanto o usuário não adivinhar o número, mostrar a mensagem:
"Erro, tente novamente: "

Caso o usuário acerte o número, apresentar a mensagem:
"Parabéns! Você advinhou o número em x tentativas""

Substitua o "x" da mensagem, pelo número de tentativas.
*/

let result = prompt("Advinhe o número que estou pensando. Está entre 0 e 10")
/*
•Math é um conjunto de funcionalidades matemáticas
•Math.random gera um número aleatório entre 0 e 1, 
não incluso o 1 nem o 0
•Para arredondar para o numero mais próximo usa funcionalidade
.round
*/
const randomNumber = Math.round(Math.random() * 10)//irá imprimir um numero inteiro
const match = Number(result) == randomNumber

//numero de tentativas
let xAttempts = 1

while(Number(result) != randomNumber){
    if(xAttempts == 1){
        result = prompt("Errou, tente novamente: ")
       }else{
        result = prompt("Errou denovo, tente novamente: ")
    }
        xAttempts++ //sempre q repetir, adiciona 1
}
alert(`Parabéns! Você advinhou o número em ${xAttempts} tentativas`)