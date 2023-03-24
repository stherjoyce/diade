import {
	information
} from './informacoes.js';

class PopUp {
	constructor(ano) {
		Object.defineProperty(this, 'inf', {
			enumerable: true,
			get: function() {
				for (let i of information) {
					if (i.ano === ano) {
						return i;
					}
				}
			}
		});

		const div = document.querySelector("#popUp");
		const fundo = document.querySelector("#apagado");
		this.criaDiv(div, fundo);
		this.btn(div, fundo);
		this.criaNome();
		this.criaImg();
		this.criaP();
	}

	criaDiv(div, fundo) {
		div.classList.replace("invisible", "visible");
		fundo.classList.replace("invisibleBack", "visibleBack");
	}

	btn(div, fundo) {
		const button = document.querySelector("#fechar");
		button.addEventListener('click', () => {
			div.classList.replace("visible", "invisible")
			fundo.classList.replace("visibleBack", "invisibleBack")
		});
	}

	criaNome() {
		const h2 = document.querySelector("#nomePopUp");
		h2.innerHTML = this.inf.nome;
	}

	criaImg() {
		const img = document.querySelector("#imgPopUp");
		img.src = this.inf.img;
	}

	criaP() {
		const paragraph = document.querySelector("#pPopUp");
		paragraph.innerHTML = this.inf.texto;
	}
}

document.addEventListener('click', e => {
	const el = e.target;
	if (el.classList.contains('circulo')) {
		const popUp = new PopUp(el.innerHTML);
	}
});