// VARIÁVEIS
let heroi = "Saladeiro" // Defina abaixo o nome do herói
let xp = 9200 // Defina abaixo quanto de XP o herói possuí
let dificuldade = 1 // Qual a dificuldade do jogo? 1: fácil - 1*XP | 2: médio - 2*XP | 3: difícil - 3*XP
let nivel

// __________________________
// Verificação da dificuldade
if(dificuldade >= 1 && dificuldade <=3){
    xp = xp * dificuldade
}else{
    dificuldade = 1
}

// SAÍDA - Definição da dificuldade escolhida
switch(dificuldade){
    case 1:
        console.log("Dificuldade escolhida: Fácil")
        break

    case 2:
        console.log("Dificuldade escolhida: Média")
        break

    case 3:
        console.log("Dificuldade escolhida: Difícil")
        break
}

// Analise do nível
if(xp <= 1000){
    nivel = "Ferro"
}else if(xp >= 1001 && xp <= 2000 ){
    nivel = "Bronze"
}else if(xp >= 2001 && xp <= 5000){
    nivel = "Prata"
}else if(xp >= 5001 && xp <= 7000){
    nivel = "Ouro"
}else if(xp >= 7001 && xp <= 8000){
    nivel = "Platina"
}else if(xp >= 8001 && xp <= 9000){
    nivel = "Ascedente"
}else if(xp >= 9001 && xp <= 10000){
    nivel = "Imortal"
}else{
    nivel = "Radiante"
}

// SAÍDA
console.log("O Heroí de nome " + heroi + " está no nível de " + nivel + "!")
console.log("XP total: " + xp + "!") // Verificação da pontuação total do XP