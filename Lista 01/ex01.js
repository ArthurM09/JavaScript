function fatorial(n) {
    if (n < 0) {
        print('O número deve ser maior ou igual a zero!')
    }
    if (n==0 || n==1){
        return 1
    } 
    let res = 1
    for (let i=2; i<=n; i++) {
        res *= i
    }
    return res
}
