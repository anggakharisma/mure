import "../styles/globals.css";
import type { AppProps } from "next/app";
import Nav from "../components/Nav";
import Head from "next/head";
import { Player } from "../components/Player/Player";
import { useRouter } from "next/router";
import Link from "next/link";
import AudioProvider from "../context/audioPlayerContext";
import AuthModal from "../components/Auth/AuthModal";
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";

function MyApp({ Component, pageProps }: AppProps<{ session: Session }>) {
  const router = useRouter();
  if (router.pathname === "/_error") return <Component {...pageProps} />;

  return (
    <SessionProvider session={pageProps.session}>
      <AudioProvider>
        <Head>
          <title>MURE</title>
        </Head>
        <Nav />
        <Component {...pageProps} />
        <AuthModal />
        <Link href="/">
          <div className="fixed z-30 p-2 text-white transition-transform bg-gray-700 cursor-pointer hover:scale-110 right-12 bottom-40">
            UP
          </div>
        </Link>
        <Player />
      </AudioProvider>
    </SessionProvider>
  );
}

export default MyApp;
