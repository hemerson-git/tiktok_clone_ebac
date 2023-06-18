import { Video } from "./components/Video";
import "./styles/app.css";

const videos = [
  {
    id: 1,
    url: "https://edisciplinas.usp.br/pluginfile.php/5196097/mod_resource/content/1/Teste.mp4",
    author: {
      name: "Hemerson",
      userName: "hemerson-dev",
    },
    song: {
      name: "Just a song",
      author: "A band",
    },
    description: "This is a video",
    likes: 100,
    comments: 200,
    shares: 40,
  },
  {
    id: 2,
    url: "https://edisciplinas.usp.br/pluginfile.php/5196097/mod_resource/content/1/Teste.mp4",
    author: {
      name: "Hemerson",
      userName: "hemerson-dev",
    },
    song: {
      name: "Just a song",
      author: "A band",
    },
    description: "This is a video",
    likes: 400,
    comments: 200,
    shares: 100,
  },
  {
    id: 3,
    url: "https://edisciplinas.usp.br/pluginfile.php/5196097/mod_resource/content/1/Teste.mp4",
    author: {
      name: "Hemerson",
      userName: "hemerson-dev",
    },
    song: {
      name: "Just a song",
      author: "A band",
    },
    description: "This is a video",
    likes: 100,
    comments: 100,
    shares: 50,
  },
];

function App() {
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
