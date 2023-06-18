import { AuthorProps, SongProps } from "../Video";
import "./styles.css";
import MusicNoteIcon from "@mui/icons-material/MusicNote";

type Props = {
  song?: SongProps;
  author: AuthorProps;
};

export function VideoFooter({ author, song }: Props) {
  return (
    <footer className="videoFooter">
      <div>
        <p className="videoFooter__author">
          @{author.userName} - {author.name}
        </p>
        <p className="videoFooter__description">Video Description</p>

        <div className="videoFooter__song">
          <MusicNoteIcon />
          <div className="videoFooter__title">
            <p>
              {`${song ? song.name : "Original audio"} ${
                song ? " - " + song?.author : ""
              }`}
            </p>
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
