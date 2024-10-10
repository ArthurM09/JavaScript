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

function ordenar(lista, atributo) {
    return lista.slice().sort((a, b) => {
        if (a[atributo] < b[atributo]) return -1;
        if (a[atributo] > b[atributo]) return 1;
        return 0;
    });
}

const pessoas = listaPessoas(5);
console.log("Lista de pessoas original:", pessoas);

const pessoasOrdenadasPorNome = ordenar(pessoas, "nome");
console.log("Lista ordenada por nome:", pessoasOrdenadasPorNome);

const pessoasOrdenadasPorIdade = ordenar(pessoas, "idade");
console.log("Lista ordenada por idade:", pessoasOrdenadasPorIdade);
