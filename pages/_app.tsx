import "../styles/globals.css";
import type { AppProps } from "next/app";
import Nav from "../components/Nav";
import Head from "next/head";
import { Player } from "../components/Player/Player";
import HomeStyle from "../styles/Home.module.css";
import { useRouter } from "next/router";
import Link from "next/link";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  if (router.pathname === "/_error") return <Component {...pageProps} />;

  return (
    <>
      <Head>
        <title>MURE</title>
      </Head>
      <Nav />
      <div className={HomeStyle.GradientBg}></div>
      <Component {...pageProps} />
      <Link href="/">
        <div className="transition-transform hover:scale-110 cursor-pointer fixed bg-gray-700 text-white right-20 bottom-32 z-30 p-2">
          UP
        </div>
      </Link>
      <Player />
    </>
  );
}

export default MyApp;
