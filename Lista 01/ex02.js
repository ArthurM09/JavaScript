function mensagem(n, txt) {
    let msg = ''
    for (let i=0; i<n; i++) {
        msg += txt + ' | '
    }
    return msg
}
