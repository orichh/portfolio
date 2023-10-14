"use client";
//@ts-nocheck
import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Richard O</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>Richard O</h1>

        <p className={styles.description}>
          <code>software engineer</code>
        </p>

        <div className={styles.grid}>
          <a href="https://www.linkedin.com/in/orichh/" className={styles.card}>
            <h3>linkedin &rarr;</h3>
          </a>

          <a href="https://github.com/orichh" className={styles.card}>
            <h3>github &rarr;</h3>
          </a>

          <a href="https://fourcats.app" className={styles.card}>
            <h3>FourCats &rarr;</h3>
            <p>web/mobile passion project I'm currently working on</p>
          </a>

          <a href="https://red-camp-hancock.vercel.app" className={styles.card}>
            <h3>Red Camp Hancock &rarr;</h3>
            <p>airbnb listing I'm currently working on for a client</p>
          </a>
        </div>
      </main>
    </div>
  );
}
