let hasPrato = false;
let hasBebida = false;
let hasDessert = false;

let pratoEscolhido = "a";
let bebidaEscolhida = "b";
let dessertEscolhida = "c";
let valorP = 0;
let valorB = 0;
let valorD = 0;
let valorTotal;

function selecionarPrato(prato) {
    const botaoSelecionado = document.querySelector(".selected");

    if (botaoSelecionado !== null) {
        botaoSelecionado.classList.toggle("selected")
    }
    prato.classList.add("selected");
    hasPrato = true;
    activateButton();

    pratoEscolhido = prato.getElementsByTagName("h3")[0].textContent;
    let value = prato.getElementsByTagName("h5")[0].textContent;
    valorP = parseFloat(value.replace(/[^\d\.]*/g, ""));
}

function selecionarBebida(bebida) {
    const botaoSelecionado = document.querySelector(".bebidas").querySelector(".selected");
    if (botaoSelecionado !== null) {
        botaoSelecionado.classList.toggle("selected");
    }
    bebida.classList.add("selected");
    hasBebida = true;
    activateButton();

    bebidaEscolhida = bebida.getElementsByTagName("h3")[0].textContent;
    let value = bebida.getElementsByTagName("h5")[0].textContent;
    valorB = parseFloat(value.replace(/[^\d\.]*/g, ""));
}

function selecionarDessert(dessert) {
    const botaoSelecionado = document.querySelector(".dessert").querySelector(".selected");


    if (botaoSelecionado !== null) {
        botaoSelecionado.classList.toggle("selected")
    }
    dessert.classList.add("selected");
    hasDessert = true;
    activateButton();

    dessertEscolhida = dessert.getElementsByTagName("h3")[0].textContent;
    let value = dessert.getElementsByTagName("h5")[0].textContent;
    valorD = parseFloat(value.replace(/[^\d\.]*/g, ""));
}

function activateButton() {
    if (hasPrato && hasBebida && hasDessert) {
        const buttonStatus = document.querySelector(".butao");
        buttonStatus.classList.add("ativo");
        buttonStatus.innerHTML = "Fechar Pedido";
    }
}



function finalizarPedido() {
    valorTotal = valorB + valorD + valorP;
    console.log(valorTotal);
    let params = encodeURIComponent(
        `Olá, gostaria de fazer o pedido:
        - Prato: ${pratoEscolhido}
        - Bebida: ${bebidaEscolhida}
        - Sobremesa: ${dessertEscolhida}
     Total: R$ ${valorTotal.toFixed(2)}`);

    const buttonStatus = document.querySelector(".ativo");

    if (buttonStatus !== null) {
        window.open("https://wa.me/5585997154567?text=" + params);
    }
}


