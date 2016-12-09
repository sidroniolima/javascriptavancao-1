class NegociacaoController 
{

	constructor()
	{

		let $ = document.querySelector.bind(document);

		this._inputData = $('#data');
		this._inputQuantidade = $('#quantidade');
		this._inputValor = $('#valor');
	}

	criaNegociacao()
	{
		return new Negociacao(
			new Date(...
				this._inputData.value
					.split('/')
					.reverse()
					.map((item, indice) => indice % 2 == 0 ? item : item = item -1)
				),
			this._inputQuantidade.value,
			this._inputValor.value
		);
	}

	adiciona(event)
	{
		event.preventDefault();

		let negociacao = this.criaNegociacao();

		console.log(negociacao.data 
			+ ', ' + negociacao.quantidade
			+ ', ' +  negociacao.valor
			+ ', ' +  negociacao.volume);

		this.limpaFormulario();
	}

	limpaFormulario()
	{
		this._inputData.value = '';
		this._inputValor.value = 0;
		this._inputQuantidade.value = 1;

		this._inputData.focus();
	}
}