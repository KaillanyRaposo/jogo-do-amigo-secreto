let amigos = [];

function adicionarAmigo() {
    let nomes = document.querySelector('input').value.trim();

    if (nomes === '') {
        alert("Por favor, insira um nome");
    } else {
        amigos.push(nomes);
        document.querySelector('input').value = '';
        atualizarAmigos(); 
    }
}

function atualizarAmigos() {
    let lista = document.querySelector("#listaAmigos");
    lista.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        let itemListaAmigos = document.createElement('li');
        itemListaAmigos.textContent = amigos[i];
        lista.appendChild(itemListaAmigos);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione pelo menos um amigo!");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    let resultado = document.querySelector('#resultado');
    resultado.innerHTML = ''; // limpa antes de mostrar

    let item = document.createElement('li');
    item.textContent = `🎉 O amigo sorteado foi: ${amigoSorteado}`;
    resultado.appendChild(item);
}