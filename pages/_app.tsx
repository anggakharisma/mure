import "../styles/globals.css";
import type { AppProps } from "next/app";
import Nav from "../components/Nav";
import Head from "next/head";
import { Player } from "../components/Player/Player";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>MURE</title>
      </Head>
      <Nav />
      <Component {...pageProps} />
      <Player />
    </>
  );
}

export default MyApp;
