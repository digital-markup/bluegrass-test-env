"use client";
import React from "react";
import ReactPlayer from "react-player";

interface VideoPlayerProps {
  url: string;
}

function VideoPlayer({ url: videoUrl }: VideoPlayerProps) {
  return (
    <div className="p-4 border bg-black rounded-lg">
      <ReactPlayer
        width={"100%"}
        height={"800px"}
        url={videoUrl}
        controls={true}
        pip={true}
      />
      <source src={videoUrl} type="video/mp4" />
    </div>
  );
}

export default VideoPlayer;
