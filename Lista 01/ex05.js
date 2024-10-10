function inverte(n) {
    return parseInt(n.toString().split('').reverse().join(''), 10)
}
console.log(inverte(125));
