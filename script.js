console.clear();

var elementoNome = document.getElementById("nomeFilme");
var elementoImagem = document.getElementById("imagemFilme");
var elementoResposta = document.getElementById("resposta");
var elementoExibicao = document.getElementById("exibicao");

var listaFilmes = [];

function adicionarFilme(nomeFilme, imagemFilme) {
	if (nomeFilme == "" || imagemFilme == "") {
		elementoResposta.innerHTML =
			"Você precisa preencher com o nome e a capa do filme!";
		return;
	}
	for (var i = 0; i < listaFilmes.length; i++) {
		if (nomeFilme == listaFilmes[i]) {
			elementoResposta.innerHTML = nomeFilme + " já foi adicionado a sua lista!";
			return;
		}
		if (imagemFilme == listaFilmes[i]) {
			elementoResposta.innerHTML = "Essa capa já foi adicionada a sua lista!";
			return;
		}
	}

	listaFilmes.push(imagemFilme);
	listaFilmes.push(nomeFilme);
	elementoResposta.innerHTML = nomeFilme + " adicionado!";
	elementoNome.value = "";
	elementoImagem.value = "";
}

function exibirLista() {
	elementoResposta.innerHTML = "";
	elementoExibicao.innerHTML = "";
	for (var i = 0; i < listaFilmes.length; i++) {
		if (~i & 1) {
			elementoExibicao.insertAdjacentHTML(
				"beforeend",
				"<br><img src=" + listaFilmes[i] + "><br>"
			);
		} else {
			elementoExibicao.insertAdjacentHTML("beforeend", listaFilmes[i]);
		}
	}
}
