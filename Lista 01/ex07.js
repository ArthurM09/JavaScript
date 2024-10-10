function verificaSequencia(sequencia) {
    const pilha = []
    const pares = {
      '(': ')',
      '[': ']',
    }
  
    for (let i = 0; i < sequencia.length; i++) {
        const char = sequencia[i]
  
        if (char === '(' || char === '[') {
            pilha.push(char)
        } 
        else if (char === ')' || char === ']') {
            if (pilha.length === 0 || pares[pilha.pop()] !== char) {
                return false
            }
        }
    }
    return pilha.length === 0
  }
  console.log(verificaSequencia("(([]))"));
  console.log(verificaSequencia("((])])")) 
  console.log(verificaSequencia(""))
  