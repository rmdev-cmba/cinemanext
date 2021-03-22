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
          Sobre o Sistema
        </h1>
        O sistema foi feito em live para demonstrar os primeiros passos em next.js.
        {/* criando um link de busca pelo id */}
        <Link href="/busca">Ir para a Busca</Link>
        
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
  const res = await fetch('http://localhost:3000/api/trending')
  // transformar em json
  const json = await res.json();
  return {
    props: {
      list: json.list
    }
  }
}
