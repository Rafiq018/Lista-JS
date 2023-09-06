function array(){
let n = [3, 4, 5, 6, 2, 1,]
console.log("Esse console log mostra o array completo: " + n)
console.log(n)
console.log("Esse console log mostra o indice zero: " + n[0])
n[6]=7
console.log("Esse e o indice 6: " + n[6])
n.push(68)
n.push(70)
// push = empurrar
console.log("Novo array completo: ")
console.log(n)
n.pop()
console.log("Novo Log depois da atualização")
console.log(n)
//tira o ultimo  elemento do array


}
function produtos(){
    let carrinho_de_compras = []

    let produto = {
        nome_prod: "Arroz",
        preco_prod: 9.99,
        marca_prod:"Tio João",
    }
    

    carrinho_de_compras.push(produto)

    let produto2 = {
        nome_prod: "Feijão",
        preco_prod: 7.40,
        marca_prod:"Namorado",
    }
    carrinho_de_compras.push(produto2)
    console.log(carrinho_de_compras)


}

function produto(){
    let product = document.getElementById("frmProduto").value
    let li = document.createElement("li") 
    li.innerHTML=product
    document.getElementById("li1").appendChild(li)
    console.log(product)
}
function valor(){
    let Valor = document.getElementById("frmValor").value
    let li = document.createElement("li") 
    li.innerHTML=Valor
    document.getElementById("li2").appendChild(li)
    console.log(Valor)
}
function marca(){
    let marca = document.getElementById("frmMarca").value
    let li = document.createElement("li") 
    li.innerHTML=marca
    document.getElementById("li3").appendChild(li)
    console.log(marca)
}
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("botao").addEventListener("click", function(){
        produto();
        valor();
        marca();
    });
});


//Desafio - Criar uma função que adicione, em uma lista, o nome de um produto.

//Manipular o DOM
//Document Object Model