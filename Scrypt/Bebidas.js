const produto1 = {
    id:1,
    nomeArquivo:'../img/RefrigeranteCocaCola.jpg',
    sabor:'Coca-Cola',
    descricao: '2 litros',
    valor:12
    
};
const produto2 = {
    id:2,
    nomeArquivo:'../img/RefrigeranteGuarana.jpg',
    sabor:'Guaraná Antartica',
    descricao: '2 litros',
    valor:10
}


const catalogo = [produto1,produto2];

for (const produtoCatalogo of catalogo){
    const cartaoProduto =  `<div id="card-produto-${produtoCatalogo.id}">
    <img src=${produtoCatalogo.nomeArquivo} >
    <h2>${produtoCatalogo.sabor}</h2>
    <p>${produtoCatalogo.descricao}</p>
    <h2>R$ ${produtoCatalogo.valor} </h2>
    <button class="Adicionar">Adicionar</button>
</div>`;

document.getElementById("Bebidas").innerHTML += cartaoProduto;
}