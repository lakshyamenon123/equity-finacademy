import JsonLd from "./JsonLd";
import VideoLanguageTabs from "./VideoLanguageTabs";
import { videoObjectGraph } from "../lib/schema";
import { ENGLISH_VIDEOS, EQUITY_GLOBAL, EQUITY_GLOBAL_ENGLISH, VIDEO_INTRO } from "../lib/videos";

export default function YouTubeSection({
  videos,
  englishVideos = ENGLISH_VIDEOS,
  eyebrow = "FREE LESSONS",
  title = "Watch a lesson before you enrol",
  intro = VIDEO_INTRO,
  id = "equity-global-videos",
}) {
  return (
    <section className="tight video-band" id={id}>
      <JsonLd data={videoObjectGraph(englishVideos, EQUITY_GLOBAL_ENGLISH)} />
      <JsonLd data={videoObjectGraph(videos, EQUITY_GLOBAL)} />
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">{eyebrow}</span>
          <h2>{title}</h2>
          {intro ? <p>{intro}</p> : null}
        </div>
        <VideoLanguageTabs englishVideos={englishVideos} malayalamVideos={videos} />
      </div>
    </section>
  );
}
