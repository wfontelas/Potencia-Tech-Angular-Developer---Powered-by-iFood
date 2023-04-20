function escreverMeuNome(nome, segundoNome, nomeDoMeio, ultimoNome){
    console.log('Meu nome é ' + nome);
    console.log('Meu segundo nome  é ' + segundoNome);
    console.log('Meu nome do meio é ' + nomeDoMeio);
    console.log('Meu ultimo nome  é ' + ultimoNome);
}   

escreverMeuNome('William', 'Roberto', 'Peres', 'Fontelas');



function verificarIdade(idade){
    if (idade >= 18) {
        console.log('Vc é de maior, e a sua idade é de ' + idade);
    }
    else{
       console.log('Vc é de menor, e a sua idade é de ' + idade);

    }
}

verificarIdade(40);
verificarIdade(17);

//Outro exemplo trazedno o nome como return e passando ele dentro de outra função

function escreverMeuNome2(nome){
    return 'Meu nome é ' + nome;
}

function verificarIdade2(idade){
    if(idade >= 18){
        console.log(escreverMeuNome2('William') + ' é sou de maior');
    }
    else{
        console.log(escreverMeuNome2('Alice') + ' é sou de Menor');
    }    
}

verificarIdade2(40);
verificarIdade2(7);








