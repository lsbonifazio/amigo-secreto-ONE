let amigos = [];

function adicionarAmigo() {
  //captura nome
  let nomeAmigo = document.getElementById('nome').value.trim();

  //valida se não está vazio
  if (nomeAmigo === '') {
    alert('Por favor, insira um nome.');
    return;
  }

  //adiciona ao array Amigos
  amigos.push(nomeAmigo);

  //limpa campo entrada
  document.getElementById('nome').value = '';

  //exibe lista Amigos
  exibirAmigos();
}

function exibirAmigos() {
  //obtém o elemento da lista
  const lista = document.getElementById('listaAmigos');

  //evita duplicações
  lista.innerHTML = '';

  //percorre o array Amigos
  for (let i = 0; i < amigos.length; i++) {
    //cria um novo elemento <li>
    const item = document.createElement('li');

    //define <li> com o nome do amigo
    item.textContent = amigos[i];

    //adiciona <li> à lista
    lista.appendChild(item);
  }
}

function sortearAmigo() {
  //verifica se o array não está vazio
  if (amigos.length === 0) {
    alert('A lista de amigos está vazia.');
    return;
  }

  //gera um índice aleatório
  const indiceAleatorio = Math.floor(Math.random() * amigos.length);

  //obtém o nome correspondente ao índice
  const amigoSorteado = amigos[indiceAleatorio];

  //atualiza o conteúdo do elemento de resultado
  document.getElementById(
    'resultadoSorteio'
  ).innerHTML = `Amigo sorteado: <strong>${amigoSorteado}</strong>`;
}

function reiniciar() {
  //limpa o array de amigos
  amigos = [];

  //limpa a lista exibida
  document.getElementById('listaAmigos').innerHTML = '';

  //limpa o campo de entrada
  document.getElementById('nome').value = '';

  //limpa o resultado do sorteio
  document.getElementById('resultadoSorteio').innerHTML = '';
}
