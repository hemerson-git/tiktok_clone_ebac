import { useEffect, useRef, useState } from "react";
import "./styles.css";
import { VideoFooter } from "../VideoFooter";
import { VideoSideBar } from "../VideoSideBar";
import { DocumentReference, getDoc } from "firebase/firestore/lite";

type Props = {
  id: number;
  author: DocumentReference<unknown>;
  song: DocumentReference<unknown>;
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

export function Video({ comments, likes, shares, author, song, url }: Props) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [dbAuthor, setDbAuthor] = useState<AuthorProps | null>(null);
  const [dbSong, setDbSong] = useState<SongProps | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    getDoc(author).then((doc) => setDbAuthor(doc.data() as AuthorProps));
    getDoc(song).then((doc) => setDbSong(doc.data() as SongProps));
  }, [author, song]);

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

      {dbAuthor && dbSong && <VideoFooter author={dbAuthor} song={dbSong} />}
      <VideoSideBar comments={comments} likes={likes} shareTimes={shares} />
    </div>
  );
}
