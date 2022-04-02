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
let nome;
let adress;

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
    const botaoSelecionado = document.querySelector(".selected2");

    if (botaoSelecionado !== null) {
        botaoSelecionado.classList.remove("selected2");
    }
    bebida.classList.add("selected2");
    hasBebida = true;
    activateButton();

    bebidaEscolhida = bebida.getElementsByTagName("h3")[0].textContent;
    let value = bebida.getElementsByTagName("h5")[0].textContent;
    valorB = parseFloat(value.replace(/[^\d\.]*/g, ""));
}

function selecionarDessert(dessert) {
    const botaoSelecionado = document.querySelector(".selected3");

    if (botaoSelecionado !== null) {
        botaoSelecionado.classList.remove("selected3")
    }
    dessert.classList.add("selected3");
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

function telaDeConfirmacao() {
    const ativar = document.querySelector(".caixaInativa");
    const ativarModal = document.querySelector(".modal");

    ativar.classList.add("confirmarPedido");
    ativarModal.classList.add("overlay");

    const pedido1 = document.querySelector(".nota");
    const pedido2 = document.querySelector(".n2");
    const pedido3 = document.querySelector(".n3");
    const resumo = document.querySelector(".n4");

    console.log(pedido1.childNodes[0].textContent)
    console.log(pedido1.childNodes[1].textContent)

    pedido1.childNodes[1].textContent = `${pratoEscolhido}`;
    pedido1.childNodes[3].textContent += `${valorP.toFixed(2)}`;
    pedido2.childNodes[1].textContent = `${bebidaEscolhida}`;
    pedido2.childNodes[3].textContent += `${valorB.toFixed(2)}`;
    pedido3.childNodes[1].textContent = `${dessertEscolhida}`;
    pedido3.childNodes[3].textContent += `${valorD.toFixed(2)}`;

    valorTotal = valorB + valorD + valorP;

    resumo.childNodes[3].textContent += `${valorTotal.toFixed(2)}`;

    nome = prompt("Qual o seu nome?");
    adress = prompt("Informe o endereço");
}
function finalizarPedido() {

    let params = encodeURIComponent(
        `Olá, gostaria de fazer o pedido:
        - Prato: ${pratoEscolhido}
        - Bebida: ${bebidaEscolhida}
        - Sobremesa: ${dessertEscolhida}
    Total: R$ ${valorTotal.toFixed(2)}
       
    Nome: ${nome}
    Endereço: ${adress}`);

    const buttonStatus = document.querySelector(".ativo");

    if (buttonStatus !== null) {
        window.open("https://wa.me/5585997154567?text=" + params);
    }
}



