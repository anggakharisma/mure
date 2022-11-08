import "../styles/globals.css";
import type { AppProps } from "next/app";
import Nav from "../components/Nav";
import Head from "next/head";
import { Player } from "../components/Player/Player";
import HomeStyle from "../styles/Home.module.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>MURE</title>
      </Head>
      <Nav />
      <div className={HomeStyle.GradientBg}></div>
      <Component {...pageProps} />
      <Player />
    </>
  );
}

export default MyApp;
