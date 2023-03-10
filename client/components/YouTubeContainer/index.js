import React from "react";
import "./YouTubeContainer.css";
import YoutubeEmbed from "../YouTubeEmbed";

export default function YouTubeContainer() {
  return (
    <div className="app">
      <h1>Youtube Embed</h1>
      <YoutubeEmbed embedId="rokGy0huYEA" />
    </div>
  );
}
