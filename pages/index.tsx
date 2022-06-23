import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>ZNLove</title>
        <meta name="description" content="Made with love." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>Header</header>
      <main>Main</main>

      <footer>Footer</footer>
    </div>
  );
};

export default Home;
