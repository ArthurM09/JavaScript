function listaPessoas(num) {
    const nomes = ["Alice", "Bernardo", "Carolina", "Daniel", "Elisa", "Fernando", "Gabriela", "Heitor", "Isabela", "João"]
    const pessoas = []
  
    for (let i = 0; i < num; i++) {
        const id = i + 1
        const nome = nomes[Math.floor(Math.random() * nomes.length)]
        const idade = Math.floor(Math.random() * (90 - 18 + 1)) + 18
    
        pessoas.push({ id, nome, idade })
    }
    return pessoas
}
  
function mediaIdades(pessoas) {
    if (pessoas.length === 0) {
        return 0
    }
    const somaIdades = pessoas.reduce((soma, pessoa) => soma + pessoa.idade, 0);
    return somaIdades / pessoas.length
}
  
const pessoas = listaPessoas(10)
console.log("Lista de pessoas:", pessoas)

const media = mediaIdades(pessoas)
console.log("Média de idades:", media)
