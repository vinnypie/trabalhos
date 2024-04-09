import prompt from 'prompt-sync'
let ler = prompt () 

const Resultado = 'resultado'
console.log ('adicione um número')
let numero =Number (ler ())
console.log ('adicione outro número')
let numerodois =Number (ler ())
let dobro = numero + numerodois
console.log (dobro)