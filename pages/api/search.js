

const { KEY_API, BASE_URL } = process.env

export default async (req, res) => {
    // para saber onde está variável q na url:
    // console.log('params', req.params);
    // console.log('query', req.query)
    // na url de busca foi 'injetado' a variável 'q' que será extraído seguir
    let q = req.query.q;
    

    //modelo busca do filme: 
    const result = await fetch(`${BASE_URL}/search/movie?api_key=${KEY_API}&language=pt-BR&query=${q}`)

    const jsonres = await result.json();

    //console.log(json.results) // este console opera em back end

    res.status(200).json({
        list: jsonres.results
    });

}

// modelo que será recebido aqui:
// site.com/api/search/q=titanic