const produto1 = {
    id:1,
    nomeArquivo:'../img/calabresa.png',
    sabor:'Calabresa',
    descricao: 'Molho de tomate, mussarela, calabresa, cebola e orégano',
    valor:35
    
};
const produto2 = {
    id:2,
    nomeArquivo:'../img/mussarela.jpg',
    sabor:'Mussarela',
    descricao: 'Molho de tomate, mussarela, azeitona e orégano',
    valor:30
}
const produto3 = {
    id:3,
    nomeArquivo:'../img/Catupiresa.png',
    sabor:'Catupiresa',
    descricao:'Molho de tomate, mussarela, calabresa, catupiry original, cebola e orégano',
    valor:47
}
const catalogo = [produto1,produto2,produto3];

for (const produtoCatalogo of catalogo){
    const cartaoProduto =  `<div id="card-produto-${produtoCatalogo.id}">
    <img src=${produtoCatalogo.nomeArquivo} >
    <h2>${produtoCatalogo.sabor}</h2>
    <p>${produtoCatalogo.descricao}</p>
    <h2>R$ ${produtoCatalogo.valor} </h2>
    <button class="Adicionar">Adicionar</button>
</div>`;

document.getElementById("Pizzas-Salgadas").innerHTML += cartaoProduto;
}