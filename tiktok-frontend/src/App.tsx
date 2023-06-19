import { useEffect, useState } from "react";
import { SongProps, Video } from "./components/Video";
import db from "./services/firebase";
import "./styles/app.css";
import {
  collection,
  getDoc,
  getDocs,
  DocumentReference,
} from "firebase/firestore/lite";

export type VideoProps = {
  id: number;
  url: string;
  author: DocumentReference<unknown>;
  song: DocumentReference<unknown>;
  description: string;
  likes: number;
  comments: number;
  shares: number;
};

function App() {
  const [videos, setVideos] = useState<VideoProps[]>([]);

  async function getVideos() {
    const videosCollection = collection(db, "videos");
    const videosSnapshot = await getDocs(videosCollection);
    const videoList = videosSnapshot.docs.map((doc) => {
      const video = doc.data();
      getDoc(video.author).then((author) => (video.author = author.data()));
      getDoc(video.song).then((song) => (video.song = song.data()));

      return video as VideoProps;
    });

    setVideos(videoList);
  }

  useEffect(() => {
    getVideos();
  }, []);

  console.log(videos);

  return (
    <main className="app">
      <div className="app__videos">
        {videos.map((video) => (
          <Video {...video} key={`video-${video.id}`} />
        ))}
      </div>
    </main>
  );
}

export default App;
