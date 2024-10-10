function contaVogal(msg) {
    let vogal = 0
    for (let i=0; i<=msg.length ; i++) {
        if (msg[i]=='a' || msg[i]=='e' || msg[i]=='i' || msg[i]=='o' || msg[i]=='u') {
            vogal += 1
        }
    }
    return vogal
}
console.log(contaVogal('hoje foi um bom dia'));
