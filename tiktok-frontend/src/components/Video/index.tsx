import { useRef, useState } from "react";
import "./styles.css";
import { VideoFooter } from "../VideoFooter";
import { VideoSideBar } from "../VideoSideBar";

type Props = {
  id: number;
  author: AuthorProps;
  song: SongProps;
  likes: number;
  comments: number;
  shares: number;
  url: string;
};

export type AuthorProps = {
  userName: string;
  name: string;
};

export type SongProps = {
  name: string;
  author: string;
};

export function Video({
  id,
  comments,
  likes,
  shares,
  author,
  song,
  url,
}: Props) {
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
        src={url}
        className="video__player"
        ref={videoRef}
        loop
        autoPlay
        disablePictureInPicture
        onClick={handleTogglePlay}
      />

      <VideoFooter author={author} song={song} />
      <VideoSideBar comments={comments} likes={likes} shareTimes={shares} />
    </div>
  );
}
