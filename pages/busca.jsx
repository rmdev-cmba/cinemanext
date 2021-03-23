import Head from 'next/head'
import { useState } from 'react';
import styles from '../styles/Home.module.css'

//const LOCAL_URL = process.env

export default function BuscaPage() {
    const [searchText, setSearchText] = useState('');
    const [movieList, setMovieList] = useState([]);

    const handleSearch = async () => {
        // aqui é a junção de busca com api/search

        if (searchText !== '') {

            try {
                //console.log('cheguei aqui com ', searchText)
                // fazendo a busca incluindo a variável 'q' como sendo um parametro
                const result = await fetch(`https://cinema-seven.vercel.app/api/search?q=${searchText}`);
                const jsonres = await result.json();

                //console.log(json); // só mostra no browser (front end exclusivo)

                // proximo passo, esxibir o resultado abaixo do botão enviar
                setMovieList(jsonres.list);

              
            } catch (err) {
                console.error(err);
            }

            return    

        }
    }
    return (
        <div className={styles.container}>
            <Head>
                <title>Cinemax</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>Busca</h1>

                <input type="text" value={searchText} onChange={e => setSearchText(e.target.value)} />
                <br />
                <button onClick={handleSearch}>Buscar</button><br />
                <a href='/'>Home</a>

                <hr />

                <ul>
                    {movieList.map(item => (
                        <li key={item.id}>
                            <a href={`/movie/${item.id}`}>
                                <img src={`https://image.tmdb.org/t/p/original${item.poster_path}`} width="150" /><br />
                                {item.title}<br />
                                    Nota: {item.vote_average} /
                                    {''}  {item.vote_count}
                            </a>
                        </li>
                    ))}
                </ul>
            </main>
        </div>
    )


}




// CRIAR PAGINA CLIENT-SIDE-RENDER
