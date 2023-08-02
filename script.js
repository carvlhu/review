//Criar variáveis

/* let nome = "Rafael Carvalho" */
let idade = 16
let idadeEsposa = "17"
const anoNascimento = 2007    //Const = Variável constante


//Decisão
if (idade == idadeEsposa) {
    alert("otários...")
} else {
    alert ("Não encehe o saco")
}


//Lendo informações do HTML
const titulo = document.getElementById("titulo")
const nome = document.getElementById("nome")
const email = document.getElementById("email")
const resultado = document.getElementById("resultado")

titulo.textContent = "Titulo alterado"
titulo.style.color = "blue"

function mostrarResultado() {
    resultado.textContent = nome.value + " " + email.value
}