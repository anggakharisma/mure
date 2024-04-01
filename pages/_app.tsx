import { Session } from "next-auth";
import type { AppProps } from "next/app";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import AuthModal from "../components/Auth/AuthModal";
import Nav from "../components/Nav";
import { Player } from "../components/Player/Player";
import AudioProvider from "../context/audioPlayerContext";
import UserProvider from "../context/userContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps<{ session: Session }>) {
  const router = useRouter();
  if (router.pathname === "/_error") return <Component {...pageProps} />;

  return (
    <UserProvider>
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
    </UserProvider>
  );
}

export default MyApp;
