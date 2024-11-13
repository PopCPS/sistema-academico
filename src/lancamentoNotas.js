const lancarNotas = ( n1, n2 ) => {

    if (n1 < 0 || n1 > 10) {
        throw new Error('Erro: "Nota de 1UP inválida"')
    }

    if (n1.toString().split('.')[1].length === 1) {
        throw new Error('Erro: "Nota de 1UP inválida"')
    }

    if (n2 < 0 || n2 > 10) {
        throw new Error('Erro: "Nota de 2UP inválida"')
    }

    if (n2.toString().split('.')[1].length === 1) {
        throw new Error('Erro: "Nota de 2UP inválida"')
    }

    if (typeof(n1) !== 'number' || typeof(n2) !== 'number') {
        throw new Error('Erro: "Entradas devem ser numéricas"')
    }

    return "Notas salvas com sucesso"
}

module.exports= { lancarNotas }