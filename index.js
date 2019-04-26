var item1 = {
    nome: 'geladeira',
    price: 5.50
}

var item2 = {
    nome: 'livro',
    price: 150.90
}

var item3 = {
    nome: 'carro',
    price: 0.50
}

var listinhaMarota = [item1, item2, item3]

for (var i = listinhaMarota.length - 1; i >= 0; i--) {
    console.log(listinhaMarota[i])
}
