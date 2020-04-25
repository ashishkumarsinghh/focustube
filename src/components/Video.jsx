import React from "react";

export default function Video(props) {
  return (
    <div className="videoContainer" key={props.videoId}>
      <iframe
        title={props.videoId}
        width="560"
        height="315"
        src={"https://www.youtube.com/embed/" + props.videoId}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <br />
    </div>
  );
}
