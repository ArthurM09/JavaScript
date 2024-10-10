function tabuada(n) {
    let tab = []
    for (let i=0; i<11; i++) {
        tab[i] = n * i
    }
    return tab
}
console.log(tabuada(5));
