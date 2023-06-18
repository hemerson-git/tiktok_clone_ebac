import { useState } from "react";
import { FavoriteBorder, Favorite, Chat, Share } from "@mui/icons-material";
import "./styles.css";

type VideoSideBarProps = {
  likes: number;
  comments: number;
  shareTimes: number;
};

export function VideoSideBar({
  comments,
  likes,
  shareTimes,
}: VideoSideBarProps) {
  const [isLiked, setIsLiked] = useState(false);

  function handleLike() {
    setIsLiked((prevState) => !prevState);
  }

  function handleShare() {
    return;
  }

  return (
    <aside className="videoSideBar">
      <button onClick={handleLike}>
        {isLiked ? (
          <Favorite fontSize="large" />
        ) : (
          <FavoriteBorder fontSize="large" />
        )}
        <span>{isLiked ? likes + 1 : likes}</span>
      </button>

      <button>
        <Chat fontSize="large" />
        <span>{comments}</span>
      </button>

      <button onClick={handleShare}>
        <Share fontSize="large" />
        <span>{shareTimes}</span>
      </button>
    </aside>
  );
}
