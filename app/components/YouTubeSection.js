import JsonLd from "./JsonLd";
import YouTubeFacade from "./YouTubeFacade";
import { videoObjectGraph } from "../lib/schema";
import { EQUITY_GLOBAL, VIDEO_INTRO } from "../lib/videos";

export default function YouTubeSection({
  videos,
  eyebrow = "EQUITY GLOBAL",
  title = "Watch a lesson before you enrol",
  intro = VIDEO_INTRO,
  id = "equity-global-videos",
  channel = EQUITY_GLOBAL,
  moreLabel = "More lessons on the Equity Global YouTube channel",
}) {
  const columns = videos.length >= 3 ? "video-grid" : `video-grid video-grid-${videos.length}`;
  return (
    <section className="tight video-band" id={id}>
      <JsonLd data={videoObjectGraph(videos, channel)} />
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">{eyebrow}</span>
          <h2>{title}</h2>
          {intro ? <p>{intro}</p> : null}
        </div>
        <div className={columns}>
          {videos.map((video) => (
            <article className="yt-card reveal" key={video.id}>
              <YouTubeFacade video={video} />
              <h3>{video.title}</h3>
              <p>{video.description}</p>
            </article>
          ))}
        </div>
        <p className="yt-channel-link">
          <a href={channel.url} target="_blank" rel="noopener noreferrer">
            {moreLabel}
          </a>
        </p>
      </div>
    </section>
  );
}
