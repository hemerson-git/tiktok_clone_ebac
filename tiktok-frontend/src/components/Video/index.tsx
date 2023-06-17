import { useRef, useState } from "react";
import "./styles.css";

export function Video() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  function handleTogglePlay() {
    setIsPlaying((prevState) => !prevState);
    if (isPlaying) {
      videoRef.current?.play();
      console.log("Duration: " + videoRef.current?.duration);
      console.log("Current: " + videoRef.current?.currentTime);
      return;
    }

    videoRef.current?.pause();
  }

  return (
    <div className="video">
      <video
        src="https://edisciplinas.usp.br/pluginfile.php/5196097/mod_resource/content/1/Teste.mp4"
        className="video__player"
        ref={videoRef}
        loop
        onClick={handleTogglePlay}
      ></video>
    </div>
  );
}
