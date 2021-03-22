import Head from 'next/head'
import Link from 'next/link';

import styles from '../styles/Home.module.css'

export default function Home({ list }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cinemax</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Filmes em Destaque
        </h1>

        {/* criando um link de busca pelo id */}
        <Link href="/busca">Ir para a Busca</Link>
        <ul>
          {/* extraindo as imagens dos filmes e direccionando um link aos id's */}
          {list.map(item => (
            <li key={item.id}>
              <a href={`/movie/${item.id}`}>
                <>
                  <img src={`https://image.tmdb.org/t/p/original${item.poster_path}`} width="150" /><br />
                  {item.title}<br/>
                  Nota: {item.vote_average} /
                  {''}  {item.vote_count}
                </>
              </a>
            </li>
          ))}
        </ul>
        <Link href='/sobre'>Sobre</Link>
      </main>
    </div>
  )
}

// transformar em ServerSideRender:
// Acrescentar este codigo:

// * Dica de ouro: o getServerSideProps roda uma vez no servidor e depois fica
// rodando somente o componente na tela do cliente

// ao chamar esta pagina http:lcoalhost:3000 ela chama a api abaixo e retorna na props que é aprensentado no componente Home acima.
export async function getServerSideProps() {
  // acessando uma rota api interna:
  
  const result = await fetch('http://localhost:3000/api/trending')
  // transformar em json
  const jsonres = await result.json()
  
  return {
    props: {
      list: jsonres.list
    }
  }

}

