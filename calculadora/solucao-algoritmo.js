let notas = [];

function adicionarNotas () {

}

function atualizarListaNotas () {

}


// 1. Criar uma calculadora
// 2. Permitir  ler cada uma das notas {5,6,10}
// 3. Calcular a média das notas = 5+6+10 = 21 * 3 = 7
// 4. Se a média for > 6 = a pessoa estudante está aprovada
// 5. Se a média for < = 6 a pessoa estudante está reprovada

//funcionalidade = FUCTION calcularMedia
//SE = IF - ELSE
//LOOP = FOR = PARA

function calcularMedia () {
    let somatorioNotas = 0;
    let media = 0;

    for (let index = 0; index < notas.length; index +=1) {
        somatorioNotas = somatorioNotas + notas 
        [index];
    }

    media = somatorioNotas / notas.length;

    if (media > 6) {
        document.getElementById ('resultado').textContent ='Média: ${media} - Pessoa estudante está APROVADA';
    } else{
        document.getElementById ('resultado').textContent = 'Média: ${media} - Pessoa estudante  está REPROVADA';
    }
}