"use client";

import LiteYouTubeEmbed from "lite-youtube-embed";
import "lite-youtube-embed/src/lite-yt-embed.css";

export default function YouTubeLite({ videoId, title = "YouTube Video" }) {
  return (
    <div className="w-full overflow-hidden rounded-lg ">
      <LiteYouTubeEmbed
        id={videoId}
        title={title}
        poster="hqdefault" 
      />
    </div>
  );
}
