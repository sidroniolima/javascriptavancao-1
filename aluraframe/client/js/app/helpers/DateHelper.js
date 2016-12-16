class DateHelper
{
	
	constructor()
	{
		throw new Error("A classe é estática, portanto não pode ser instanciada.");
	}

	static textoParaData(texto)
	{
		if (!/^\d{4}-\d{2}-\d{2}$/.test(texto))
		{
			throw new Error('O formato da data é inválido. Deve ser dd/mm/yyyy.');
		}

		return new Date(...
			texto.split('-')
				.map((item, indice) => item - indice % 2)
			);
	}

	static dataParaTexto(data)
	{
		return `${data.getDate()}/${data.getMonth()+1}/${data.getYear()}`;
	}

}