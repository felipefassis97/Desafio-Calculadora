// Função para calcular o saldo e o nível do jogador
function calcularNivel(vitorias, derrotas) {
    const saldoVitorias = vitorias - derrotas;

    let nivel;
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    return { saldoVitorias, nivel }; // Retorna um objeto com saldo e nível
}

// Exemplo de uso da função
const vitorias = 75; // Exemplo de vitórias
const derrotas = 30; // Exemplo de derrotas

const resultado = calcularNivel(vitorias, derrotas);

// Saída da mensagem no console
console.log("O Herói tem de saldo de", resultado.saldoVitorias, "e está no nível de", resultado.nivel);