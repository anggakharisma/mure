import { useEffect, useRef, useState } from "react";
import ControlStyle from "../../styles/Control.module.css";
import Image from "next/image";
import { PLAYER_STATE } from "../../enum";

// Reference
// https://stackoverflow.com/questions/49814828/javascript-html5-audio-custom-players-seekbar-and-current-time

export const Control = ({ playerState, setPlayerState }: ControlProps) => {

	const [songProgress, setSongProgress] = useState<any>(0);
	const [currentTime, setCurrentTime] = useState<string>("00:00");
	const [duration, setDuration] = useState<string>("00:00");
	const [mouseDownSlider, setMouseDownSlider] = useState<boolean>(false);
	const [volume, setVolume] = useState<number>(0.2);

	const audioRef = useRef<HTMLAudioElement>(null);

	useEffect(() => {
		audioRef.current!.volume = Number(volume)
		if (mouseDownSlider) {
			const pct = Number(songProgress) / 100;
			audioRef.current!.currentTime = (audioRef.current!.duration || 0) * pct;
		}
	}, [mouseDownSlider, songProgress, volume])


	const fmtTime = (second: number) => {
		const d = new Date(0);

		if (second > 0) {
			d.setSeconds(second % 60);
			d.setMinutes(second / 60);
		}

		return d.toISOString().slice(14, 19);
	};

	const onTimeUpdateAudio = () => {
		if (!mouseDownSlider) {
			setSongProgress(audioRef.current!.currentTime / audioRef.current!.duration * 100);
			setCurrentTime(fmtTime(audioRef.current!.currentTime));
			setDuration(fmtTime(audioRef.current!.duration));
		}
	}

	const onLoadedDataAudio = () => {
		setSongProgress(0);
		setCurrentTime(fmtTime(audioRef.current!.currentTime));
		setDuration(fmtTime(audioRef.current!.duration));
	}

	const playControllerAudio = () => {
		audioRef.current!.volume = volume;
		if (
			playerState === PLAYER_STATE.STOP ||
			playerState === PLAYER_STATE.PAUSE
		) {
			audioRef.current?.play();
			setPlayerState(PLAYER_STATE.PLAY);
		} else {
			audioRef.current?.pause();
			setPlayerState(PLAYER_STATE.PAUSE);
		}
	}

	return (
		<div className={ControlStyle.ControlContainer}>
			<div className="flex items-center justify-center">
				<div className="relative hover:cursor-pointer">
					<Image alt="previous song" src="/images/prev.svg" width={40} height={40} />
				</div>
				<audio autoPlay={false}
					onTimeUpdate={onTimeUpdateAudio}
					onLoadedData={onLoadedDataAudio} ref={audioRef} src="/audio_test.mp3" preload="metadata" loop />
				<p
					className="mx-4"
					onClick={playControllerAudio}
				>
					{playerState == PLAYER_STATE.PAUSE || playerState == PLAYER_STATE.STOP
						? "pl"
						: "ps"}
				</p>
				<div className="relative hover:cursor-pointer">
					<Image alt="next song" src="/images/next.svg" width={40} height={40} />
				</div>
			</div>
			<div className="flex items-center justify-center w-3/4 m-auto">
				<p className="w-1/5">{currentTime} / {duration}</p>
				<input className="w-3/4 m-auto mr-4" type="range" value={songProgress} min="0" max="100" step="0.5" onChange={(e) => {
					setSongProgress(e.target.value);
				}}
					onMouseDown={() => { setMouseDownSlider(true) }}
					onMouseUp={() => { setMouseDownSlider(false) }}
				/>
				<input className="w-20 h-full m-auto mr-4" type="range" value={volume} min="0" max="1" step="0.01" onChange={(e) => {
					setVolume(Number(e.target.value));
				}}
				/>
			</div>

		</div>
	);
};
