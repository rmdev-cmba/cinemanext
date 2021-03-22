import Head from 'next/head'
import Link from 'next/link';
import styles from '../../styles/Home.module.css'

export default function MovieItem({ info }) {
    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>

                <h1 className={styles.title}>
                    {info.title}
                </h1>

                Nota: {info.vote_average} /
                 {''}  {info.vote_count}
                <a href={info.homepage}>{info.homepage}</a>

                <p>{info.overview}</p>

                <img src={`https://image.tmdb.org/t/p/original${info.backdrop_path}`}
                    width={1200}
                />

                <br />
                <br />
                <p>
                    <Link href="/busca">Nova Busca  /</Link>
                    <Link href='/'> Home</Link>
                </p>

            </main>
        </div>
    )
}

// SERVER-SIDE

export async function getServerSideProps(context) {
    const { id } = context.params
    // acessando uma rota api interna:
    const res = await fetch(`http://localhost:3000/api/movie/${id}`)
    // transformar em json
    const json = await res.json();

    // console.log('JSON', json)

    return {
        props: {
            info: json.info
        }
    }
}
