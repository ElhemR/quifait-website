import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <header>
      <Navbar/>
    </header>
      <main className={styles.main}>
 
        {/* <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.tsx</code>
        </p> */}
        <h1 className={styles.title}>
      Qui fait
        </h1>
        <form >

  
        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>&#128316;</h2>
            <input id="name" name="name" type="text" autoComplete="name" required placeholder='Tunis' />
          </div>

   
          <div
            className={styles.card}
          >
            <h2>&#128317;</h2>
            <input id="name" name="name" type="text" autoComplete="name" placeholder='Frankfurt'  required />
          </div>

          <div
            className={styles.card}
          >
            <h2>&#128467;</h2>
            <input id="name" name="name" type="text" autoComplete="name" placeholder='When'  required />
          </div>

          <div
            className={styles.cardSearch}
          >
            <h2></h2>
            <input className={styles.searchButton} id="name" name="name" type="submit" autoComplete="name"  value="&#128270; Search" required />
          </div>
        </div>


        </form>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
