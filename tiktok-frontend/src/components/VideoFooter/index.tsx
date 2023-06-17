import "./styles.css";
import MusicNoteIcon from "@mui/icons-material/MusicNote";

export function VideoFooter() {
  return (
    <footer className="videoFooter">
      <div>
        <p className="videoFooter__author">@hemerson-dev</p>
        <p className="videoFooter__description">Video Description</p>

        <div className="videoFooter__song">
          <MusicNoteIcon />
          <div className="videoFooter__title">
            <p>Song title</p>
          </div>
        </div>
      </div>

      <img
        src="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/vinil.png?t=2023-05-22T19%3A39%3A28.772Z"
        alt="Icon of a spinning disk"
      />
    </footer>
  );
}
