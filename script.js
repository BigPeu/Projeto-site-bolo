function alterarQtd(botao, mudanca) {
    // 1. Acha o input de número que está perto do botão clicado
    const seletor = botao.parentElement;
    const input = seletor.querySelector('.input-qtd');
    
    let valorAtual = parseInt(input.value);
    
    // 2. Altera o valor e não deixa ser menor que zero
    valorAtual += mudanca;
    if (valorAtual < 0) valorAtual = 0;
    
    input.value = valorAtual;

    // 3. ATUALIZAÇÃO AUTOMÁTICA: Chama a soma do total na hora!
    atualizarTotal();
}

function atualizarTotal() {
    let totalGeral = 0;
    let totalItens = 0;

    // Seleciona todos os cards de produto na tela
    const cards = document.querySelectorAll('.produto-card');

    cards.forEach(card => {
        // Pega a quantidade do input desse card específico
        const qtd = parseInt(card.querySelector('.input-qtd').value);
        
        // Pega o preço (removendo o "R$" e a vírgula para o JS entender)
        const precoTexto = card.querySelector('.preco').innerText;
        const precoEfetivo = parseFloat(precoTexto.replace("R$", "").replace(",", "."));

        if (qtd > 0) {
            totalGeral += (qtd * precoEfetivo);
            totalItens += qtd;
        }
    });

    // Atualiza os textos lá no rodapé preto da sua imagem
    document.querySelector('.info-carrinho span').innerText = `Itens: ${totalItens}`;
    document.querySelector('.info-carrinho strong').innerText = `Total: R$ ${totalGeral.toFixed(2).replace(".", ",")}`;
}
