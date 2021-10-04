import Head from 'next/head';
import { Form } from '../components/Form';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Coding test</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to KUDO technical interview</h1>

        <Form />
      </main>
    </div>
  );
}
