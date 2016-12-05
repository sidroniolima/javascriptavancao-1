class NegociacaoController 
{

	construct()
	{

		let $ = document.querySelector.bind(document);

		this.inputData = $('#data');
		this.inputQuantidade = $('#quantidade');
		this.inputValor = $('#valor');
	}

	adiciona(event)
	{
		event.preventDefault();


		alert('Chamada de ação no controller');
	}
}