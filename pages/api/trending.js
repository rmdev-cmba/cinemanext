import axios from 'axios'

const { KEY_API, BASE_URL } = process.env

export default async (req, res) => {
  const result = await fetch(`${BASE_URL}/trending/movie/week?api_key=${KEY_API}&language=pt-BR`)

  const jsonres = await result.json();

  res.status(200).json({
    list: jsonres.results
  });

}
