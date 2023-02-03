import { useRef, useState } from "react";
import ControlStyle from "../../styles/Control.module.css";
import Image from "next/image";


// Reference
// https://stackoverflow.com/questions/49814828/javascript-html5-audio-custom-players-seekbar-and-current-time

enum PLAYER_STATE {
	PLAY,
	PAUSE,
	STOP,
}

export const Control = () => {
	const [playerState, setPlayerState] = useState<PLAYER_STATE>(
		PLAYER_STATE.STOP
	);
	const [songProgress, setSongProgress] = useState<number>(0);

	const audioRef = useRef<HTMLAudioElement>(null);

	return (
		<div className={ControlStyle.ControlContainer}>
			<div className="flex items-center justify-center">
				<div className="relative hover:cursor-pointer">
					<Image alt="previous song" src="/images/prev.svg" width={40} height={40} />
				</div>
				<audio
					onChange={(e) => {

					}}
					onTimeUpdate={(e) => {
						setSongProgress(audioRef.current!.currentTime / audioRef.current!.duration * 100);
					}} onLoadedData={(e) => {
					}} ref={audioRef} src="/audio_test.mp3" preload="metadata" loop />
				<p
					className="mx-8"
					onClick={() => {
						if (
							playerState === PLAYER_STATE.STOP ||
							playerState === PLAYER_STATE.PAUSE
						) {
							audioRef.current?.play();
							audioRef.current!.volume = 0.2;
							setPlayerState(PLAYER_STATE.PLAY);
						} else {
							audioRef.current?.pause();
							setPlayerState(PLAYER_STATE.PAUSE);
						}
					}}
				>
					{playerState == PLAYER_STATE.PAUSE || playerState == PLAYER_STATE.STOP
						? "pl"
						: "ps"}
				</p>
				<div className="relative hover:cursor-pointer">
					<Image alt="next song" src="/images/next.svg" width={40} height={40} />
				</div>
			</div>
			<div className="w-3/4 h-1 m-auto">
				<input className="w-full h-1 m-auto" type="range" value={songProgress} min="0" max="100" step="1" />
			</div>

		</div>
	);
};
