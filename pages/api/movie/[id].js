const { KEY_API, BASE_URL } = process.env


// aqui tenho que receber o id que vem na url
export default async (req, res) => {
    // para saber onde está variável id na url:
    // console.log('params', req.params);
    // console.log('query', req.query)
    // na url de busca foi 'injetado' a variável 'q' que será extraído seguir
    const { id } = req.query;


    //modelo busca do filme: 
    const response = await fetch(`${BASE_URL}/movie/${id}?api_key=${KEY_API}&language=pt-BR`)

    const json = await response.json();

    //console.log(json.results) // este console opera em back end

    res.status(200).json({
        info: json
    });

}