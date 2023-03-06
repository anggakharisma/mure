import "../styles/globals.css";
import type { AppProps } from "next/app";
import Nav from "../components/Nav";
import Head from "next/head";
import { Player } from "../components/Player/Player";
import HomeStyle from "../styles/Home.module.css";
import { useRouter } from "next/router";
import Link from "next/link";
import AudioProvider from "../context/audioPlayerContext";

function MyApp({ Component, pageProps }: AppProps) {
	const router = useRouter();
	if (router.pathname === "/_error") return <Component {...pageProps} />;

	return (
		<AudioProvider>
			<Head>
				<title>MURE</title>
			</Head>
			<Nav />
			<div className={HomeStyle.GradientBg}></div>
			<Component {...pageProps} />
			<Link href="/">
				<div className="fixed z-30 p-2 text-white transition-transform bg-gray-700 cursor-pointer hover:scale-110 right-12 bottom-40">
					UP
				</div>
			</Link>
			<Player />
		</AudioProvider>
	);
}

export default MyApp;
