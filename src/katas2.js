// comece a criar a sua função add na linha abaixo
function soma (primeiroValor, segundoValor){
    return (primeiroValor + segundoValor)
}

// descomente a linha seguinte para testar sua função
console.assert(soma(3, 5) === 8, 'A função soma não está funcionando como esperado');


// comece a criar a sua função multiply na linha abaixo
function multiplicacao(_multiplicador, multiplicando) {
    let produto = 0
    for (let qtdVezes = 0; qtdVezes < multiplicando; qtdVezes ++){
        produto = soma(produto, _multiplicador)
    }
    return produto;
}

// descomente a linha seguinte para testar sua função
console.assert(multiplicacao(4, 6) === 24, 'A função multiplicacao não está funcionando como esperado');


// comece a criar a sua função power na linha abaixo
function exponenciacao(base, potencia){
    let potenciacao = 1
    for(let numPotencia = 0; numPotencia < potencia; numPotencia++){
        potenciacao = multiplicacao(potenciacao,base)
    } 
    return potenciacao
}

// descomente a linha seguinte para testar sua função
console.assert(exponenciacao(3, 4) === 81, 'A função exponenciacao não está funcionando como esperado');


// comece a criar a sua função fatorial na linha abaixo
function fatorial(_numFatorial){
    let fatorinelson = _numFatorial ;
    for(let contador = 1; contador < _numFatorial; contador++){
        fatorinelson = multiplicacao(fatorinelson, contador )
    }
    return fatorinelson;
    
} 

// descomente a linha seguinte para testar sua função
console.assert(fatorial(5) === 120, 'A função fatorial não está funcionando como esperado');


/**
 * BONUS (aviso: o grau de dificuldade é bem maior !!!)
 */

// crie a função fibonacci


// descomente a linha seguinte para testar sua função
// console.assert(fibonacci(8) === 13, 'A função fibonacci não está funcionando como esperado');