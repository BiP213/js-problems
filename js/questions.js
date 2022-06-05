function MAIOR_MENOR (a, b, c, d, e) {
    a = document.getElementById("a").value;
    b = document.getElementById("b").value;
    c = document.getElementById("c").value;
    d = document.getElementById("d").value;
    e = document.getElementById("e").value;

    var nMaior = Math.max(a,b,c,d,e);
    var nMenor = Math.min(a,b,c,d,e);

    document.getElementById("nMaior").innerHTML = "Maior número = "+nMaior+".";
    document.getElementById("nMenor").innerHTML = "Menor número = "+nMenor+".";
} // Primeira questão.

function VOGAL (v) {
    v = document.getElementById("v").value;

    if (v == "a" || v == "e" || v == "i" || v == "o" || v == "u") {
        window.alert("1");
    } else {
        window.alert("0");
    }
} // Segunda.

function LIMITES (li, ls) {
    li = document.getElementById("li").value;
    ls = document.getElementById("ls").value;

    for (var i = li; i < ls; i++) {
        if (i % 2 == 0) {
            console.log(i);
        }
    }

} // Terceira. [Incompleta]

function ORDEM (a4, b4, c4) {
    a4 = document.getElementById("a4").value;
    b4 = document.getElementById("b4").value;
    c4 = document.getElementById("c4").value;

    var arey = [a4, b4, c4];
    ordena(arey);
    window.alert("Ordem crescente: ["+arey+"].");
} // Quarta.

function ordena (arey) {
    arey.sort( ordenCrescen ); // Deve passar parâmetros para ordenar números, senão 
                                // o ".sort" ordena tudo como se fossem strings. Causando o número 10
                                // vir primeiro que o 2.
}

function ordenCrescen (x, y) {
//    return parseInt( x ) - parseInt( y ); // "parseInt" para verificar se os números são inteiros.
    return ( x ) - ( y );                                  // Podemos calcular sem verificar também.
} // Quarta - Complemento. Funções para ordernar os números.

function POSITIVO_NEGATIVO (z) {
    z = document.getElementById("z").value;

    document.getElementById("zz").innerHTML = Boolean(z == 0 || z > 0);
} // Quinta.

function PAR_IMPAR (k) {
    k = document.getElementById("k").value;

    document.getElementById("kk").innerHTML = Boolean(k % 2 == 0); // Operação de módulo. True = Par.
} // Sexta.