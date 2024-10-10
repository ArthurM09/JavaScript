function operacao(n1, n2, op) {
    let res=0
    if (op.toUpperCase() == 'ADIÇÃO') {
        res = n1 + n2
    }
    else if (op.toUpperCase() == 'SUBTRAÇÃO') {
        res = n1 - n2
    }
    else if (op.toUpperCase() == 'MULTIPLICAÇÃO') {
        res = n1 * n2
    }   
    else if (op.toUpperCase() == 'DIVISÃO') {
        if (n2==0) {
            console.log('Impossível realizar divisão por ZERO');
        }
        else {
            res = n1 / n2
        }
    }
    return res
}
