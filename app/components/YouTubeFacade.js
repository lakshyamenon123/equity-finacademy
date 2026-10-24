"use client";

import { useState } from "react";

export default function YouTubeFacade({ video }) {
  const [active, setActive] = useState(false);
  const thumb = `https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`;

  if (active) {
    return (
      <div className="yt-frame">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1`}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <button type="button" className="yt-facade" onClick={() => setActive(true)}>
      <img src={thumb} alt={`Play video: ${video.title}`} width="480" height="270" />
      <span className="yt-play" aria-hidden="true" />
    </button>
  );
}
