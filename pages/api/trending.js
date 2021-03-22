

const { KEY_API, BASE_URL } = process.env

export default async (req, res) => {
  const response = await fetch(`${BASE_URL}/trending/movie/week?api_key=${KEY_API}&language=pt-BR`)

  const json = await response.json();

  res.status(200).json({
    list: json.results
  });

}
