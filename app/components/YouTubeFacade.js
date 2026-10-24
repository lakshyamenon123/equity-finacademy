"use client";

import { useState } from "react";

export default function YouTubeFacade({ video, language }) {
  const [active, setActive] = useState(false);
  const thumb = `https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`;
  const label = language ? `Play ${language} video: ${video.title}` : `Play video: ${video.title}`;

  if (active) {
    return (
      <div className="yt-frame">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1`}
          title={label}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <button type="button" className="yt-facade" onClick={() => setActive(true)} aria-label={label}>
      <img src={thumb} alt={label} width="480" height="270" loading="lazy" decoding="async" />
      <span className="yt-play" aria-hidden="true" />
    </button>
  );
}
