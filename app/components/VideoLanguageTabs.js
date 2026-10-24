"use client";

import { useId, useState } from "react";
import YouTubeFacade from "./YouTubeFacade";
import { EQUITY_GLOBAL, EQUITY_GLOBAL_ENGLISH } from "../lib/videos";

function gridClass(videos) {
  return videos.length >= 3 ? "video-grid" : `video-grid video-grid-${videos.length}`;
}

function VideoGrid({ videos, language }) {
  return (
    <div className={gridClass(videos)}>
      {videos.map((video) => (
        <article className="yt-card" key={video.id}>
          <YouTubeFacade video={video} language={language} />
          <p className="yt-lang">{language}</p>
          <h3>{video.title}</h3>
          <p>{video.description}</p>
        </article>
      ))}
    </div>
  );
}

export default function VideoLanguageTabs({ englishVideos, malayalamVideos }) {
  const [language, setLanguage] = useState("english");
  const base = useId();
  const englishTab = `${base}-english-tab`;
  const malayalamTab = `${base}-malayalam-tab`;
  const englishPanel = `${base}-english-panel`;
  const malayalamPanel = `${base}-malayalam-panel`;

  return (
    <div>
      <div className="yt-tabs" role="tablist" aria-label="Lesson language">
        <button
          type="button"
          role="tab"
          id={englishTab}
          aria-selected={language === "english"}
          aria-controls={englishPanel}
          onClick={() => setLanguage("english")}
        >
          English
        </button>
        <button
          type="button"
          role="tab"
          id={malayalamTab}
          aria-selected={language === "malayalam"}
          aria-controls={malayalamPanel}
          onClick={() => setLanguage("malayalam")}
        >
          Malayalam
        </button>
      </div>
      <div role="tabpanel" id={englishPanel} aria-labelledby={englishTab} hidden={language !== "english"}>
        <VideoGrid videos={englishVideos} language="English" />
        <p className="yt-channel-link">
          <a href={EQUITY_GLOBAL_ENGLISH.url} target="_blank" rel="noopener noreferrer">
            More lessons on the Equity Global English channel
          </a>
        </p>
      </div>
      <div role="tabpanel" id={malayalamPanel} aria-labelledby={malayalamTab} hidden={language !== "malayalam"}>
        <VideoGrid videos={malayalamVideos} language="Malayalam" />
        <p className="yt-channel-link">
          <a href={EQUITY_GLOBAL.url} target="_blank" rel="noopener noreferrer">
            More lessons on the Equity Global channel (Malayalam)
          </a>
        </p>
      </div>
    </div>
  );
}
