// Variáveis para armazenar o nome e a quantidade de XP do herói
let nome = "Felipe"; // Você pode alterar o nome conforme desejar
let experiencia = 8500; // Você pode alterar a quantidade de XP conforme desejar

// Variável para armazenar o nível do herói
let nivel;

// Estrutura de decisão para classificar o herói com base na experiência
if (experiencia < 1000) {
    nivel = "Ferro";
} else if (experiencia >= 1001 && experiencia <= 2000) {
    nivel = "Bronze";
} else if (experiencia >= 2001 && experiencia <= 5000) {
    nivel = "Prata";
} else if (experiencia >= 5001 && experiencia <= 7000) {
    nivel = "Ouro";
} else if (experiencia >= 7001 && experiencia <= 8000) {
    nivel = "Platina";
} else if (experiencia >= 8001 && experiencia <= 9000) {
    nivel = "Ascendente";
} else if (experiencia >= 9001 && experiencia <= 10000) {
    nivel = "Imortal";
} else {
    nivel = "Radiante";
}

// Saída da mensagem final
console.log("O Herói de nome", nome, "está no nível de", nivel);