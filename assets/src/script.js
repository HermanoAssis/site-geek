let itemActionOne = {
     imagem:"./assets/img/actions/animewoman.jpg",
     nome:"Asuka Langley Soryuu",
     valor:"$29.99"
 }
 let itemActionTwo = {
     imagem:"./assets/img/actions/dragonballpersonagem.jpg",
     nome:"Goku Dragon Ball",
     valor:"$30.99"
 }
 let itemActionThree = {
     imagem:"./assets/img/actions/starwarspersonagem.jpg",
     nome:"Grogu",
     valor:"$25.99"
 }
 let itemPaintingOne = {
     imagem:"./assets/img/painting/clock.jpg",
     nome:"Relógio",
     valor:"$35.99"
 }
 let itemPaintingTwo = {
     imagem:"./assets/img/painting/gamepad.jpg",
     nome:"Controle",
     valor:"$32.00"
 }
 let itemPaintingThree = {
     imagem:"./assets/img/painting/personagem.jpg",
     nome:"Personagem",
     valor:"$36.99"
 }
let listFigure = [];
let listPainting = [];
function createActionItem(objeto){
    listFigure.push(objeto)
};
createActionItem(itemActionOne)
createActionItem(itemActionTwo)
createActionItem(itemActionThree)
function createPaintingItem(objeto){
    listPainting.push(objeto)
}
createPaintingItem(itemPaintingOne)
createPaintingItem(itemPaintingTwo)
createPaintingItem(itemPaintingThree)
let listaDePinturas = document.querySelector(".listPainting")
let listaDeFigures = document.querySelector(".listActionFigure")
function criarLiPainting(){
    for(let i = 0; i < listPainting.length; i++){
        let elementoLista = document.createElement("li");
        let nome = document.createElement("span");
        nome.innerText = `${listPainting[i].nome}`;
        let imgTag = document.createElement("img");
        imgTag.src = listPainting[i].imagem;
        imgTag.alt = listPainting[i].nome;
        let priceTag = document.createElement("p");
        priceTag.innerText = `${listPainting[i].valor}`;
        elementoLista.appendChild(imgTag);
        elementoLista.appendChild(nome);
        elementoLista.appendChild(priceTag);
        listaDePinturas.appendChild(elementoLista);
    }
}
criarLiPainting();
function criarLiFigure(){
    for(let i = 0; i < listFigure.length; i++){
        let elementoLista = document.createElement("li");
        let nome = document.createElement("span");
        nome.innerText = `${listFigure[i].nome}`;
        let imgTag = document.createElement("img");
        imgTag.src = listFigure[i].imagem;
        imgTag.alt = listFigure[i].nome;
        let priceTag = document.createElement("p");
        priceTag.innerText = `${listFigure[i].valor}`;
        elementoLista.appendChild(imgTag);
        elementoLista.appendChild(nome);
        elementoLista.appendChild(priceTag);
        listaDeFigures.appendChild(elementoLista);
    }
}
criarLiFigure();