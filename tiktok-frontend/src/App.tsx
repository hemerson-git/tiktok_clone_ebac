import { Video } from "./components/Video";
import "./styles/app.css";

function App() {
  return (
    <main className="app">
      <div className="app__videos">
        <Video />
        <Video />
        <Video />
      </div>
    </main>
  );
}

export default App;
