const lancarNotas = ( n1, n2 ) => {

    if (n1 < 0 || n1 > 10) {
        throw new Error('Erro: "Nota de 1UP inválida"')
    }

    if (!(n1 % 1 !== 0 && Math.floor(n1 * 10) / 10 === n1)) {
        throw new Error('Erro: "Nota de 1UP inválida"')
    }

    if (n2 < 0 || n2 > 10) {
        throw new Error('Erro: "Nota de 2UP inválida"')
    }

    if (!(n2 % 1 !== 0 && Math.floor(n2 * 10) / 10 === n2)) {
        throw new Error('Erro: "Nota de 2UP inválida"')
    }

    if (typeof(n1) !== 'number' || typeof(n2) !== 'number') {
        throw new Error('Erro: "Entradas devem ser numéricas"')
    }

    return "Notas salvas com sucesso"
}

module.exports= { lancarNotas }