function listaPessoas(num) {
    const nomes = ["Alice", "Arthur", "Carolina", "Daniel", "Elisa", "Fernando", "Letícia", "Heitor", "Isabela", "Paulo"];
    const pessoas = [];
  
    for (let i = 0; i < num; i++) {
        const id = i + 1;
        const nome = nomes[Math.floor(Math.random() * nomes.length)];
        const idade = Math.floor(Math.random() * (90 - 18 + 1)) + 18;
    
        pessoas.push({ id, nome, idade });
    }
    return pessoas;
}
console.log(listaPessoas(3));
