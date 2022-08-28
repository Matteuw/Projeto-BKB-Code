
const listaProdutos = document.querySelector(".lista_produtos")
const listaCarrinho = document.querySelector(".listacarrinho")



function criarProduto(produto) {

    const tagLi = document.createElement("li")

    tagLi.classList.add("caixa_produtos")

    tagLi.innerHTML = `
        <button id="${produto.id}" class="caixinha" >
            <img class="button2" src="${produto.imagem}" alt="${produto.nome}"id="${produto.id}">
            <h3 class="button2" id="${produto.id}"> ${produto.nome}</h3>
            <p class="button2" id="${produto.id}">R$: ${produto.preco.toFixed(2)}</p>              
        </button>
        `
   listaProdutos.appendChild(tagLi)
}


function mostrarProdutos(lista) {
    
    for (let i = 0; i < lista.length; i++) {

        const produto = lista[i]

        criarProduto(produto)
    }
}
mostrarProdutos(produtos)
let carrinho = [];

listaProdutos.addEventListener ("click", adicionaritem)
    function adicionaritem (event) {
        
        const botaoad = event.target;
       
        if (botaoad.classList == "button2"){
            
            const idProduto = botaoad.id
            
            const veriProdutos = produtos.find((produtos) => produtos.id == idProduto)
        
            carrinho.push(veriProdutos)
                
               
            listacarrinho()
            atualizarTotal()
       
                
    } 
}          

function listacarrinho (){

    listaCarrinho.innerHTML = ""

    for (let i = 0; i < carrinho.length; i++ ){
        const produto = carrinho[i]
        
        const tagLi = document.createElement ("li")
        tagLi.classList.add ("cardproduto")
        tagLi.innerHTML = `
            <div class="infocarrinho">
                <img src="${produto.imagem}" alt="${produto.nome}">
                <p>${produto.nome}</p>
            </div>
            <div class="resumopreco">
                <p>R$ ${produto.preco.toFixed(2)}</p>
                <button type="button" class="botao3"  id="${produto.id}"  >
                        <img src="src/imagens/lixo.png" class="botao3" alt="Lixeira" id="${produto.id}" >
                </button>
            </div>
            `
        listaCarrinho.appendChild(tagLi)
        
        
    }
}
function atualizarTotal (){
    const infoPreco = document.querySelector(".infopreco")
   
    let total = 0
    for( let i = 0; i <carrinho.length; i++){
        const produto = carrinho[i]
        total += produto.preco
        console.log(total);
    }
    infoPreco.innerText = `Total: R$${total.toFixed(2)}`
    
}
const listaCarrinhoEx = document.querySelector(".listacarrinho")
listaCarrinhoEx.addEventListener ("click", removerproduto)

    function removerproduto(event){

        const botaoexcluir = event.target;  

        if (botaoexcluir.classList == "botao3"){

            botaoexcluir.closest("li").remove()

            const idCarrinho = botaoexcluir.id
           
            const veriCarrinho = produtos.find((produto) => produto.id == idCarrinho)
            
            carrinho.indexOf(veriCarrinho,[])

            carrinho.splice(listaCarrinhoEx, 1)
            
            
            atualizarTotal()
          
       

          
       
        }
       
    }



