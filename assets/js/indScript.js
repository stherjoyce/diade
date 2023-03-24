import {
	indications
} from './indicacoes.js';

class Indicacao {
	constructor(obj,linha) {
		Object.defineProperties(this, {
			'nome': {
				value: obj.nome
			},
			'text1': {
				value: obj.text1
			},
			'text2': {
				value: obj.text2
			},
			'cartaz': {
				value: obj.cartaz
			},
			'gif': {
				value: obj.gif
			}
		});

		this.sect = document.querySelector("#indic");
		this.sect.appendChild(this.criaDivPrincipal(this.nome, this.text1, this.cartaz, this.gif, this.text2,linha));
	}

	criaDivPrincipal(nome, text1, cartaz, gif, text2,linha) {
		const div = document.createElement('div');
		div.classList.add('indication');
		div.appendChild(this.criaAreaCartaz(nome, text1, cartaz));
		div.appendChild(this.criaAreaGif(gif));
		if (text2) {
			div.appendChild(this.criaAreaParagrafoFinal(text2));
		}
		if (linha) {
			const divLinha = document.createElement('div');
			divLinha.classList.add('linha');
			div.appendChild(divLinha);
		}
		return div;
	}

	criaAreaParagrafoFinal(text) {
		const div = document.createElement('div');
		div.setAttribute('id', 'paragrafoFinal');
		div.appendChild(this.criaParagrafo(false, text));
		return div;
	}

	criaAreaGif(gif) {
		const div = document.createElement('div');
		div.setAttribute('id', 'areaGif');
		div.appendChild(this.criaImg(gif));
		return div;
	}

	criaAreaCartaz(nome, text1, cartaz) {
		const div = document.createElement('div');
		div.setAttribute('id', 'areaCartaz');
		div.appendChild(this.criaParagrafo(true, text1, nome));
		div.appendChild(this.criaImg(cartaz));
		return div;
	}

	criaImg(endereco) {
		const img = document.createElement('img');
		img.src = endereco;
		return img;
	}

	criaParagrafo(verifica, text, nome) {
		const p = document.createElement('p');

		if (verifica) {
			p.innerHTML = `<span>${nome}</span><br><br> ${text}`;
			return p;
		}

		p.innerHTML = text;

		return p;
	}

}

for (let i = 0; i < indications.length; i++) {
	let valor = true;
	if (i === indications.length - 1) {
		valor = false;
	}
	const ind = new Indicacao(indications[i],valor);
}