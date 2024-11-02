import VideoPlayer from "@/components/video-player";
import React from "react";

function TestPage() {
  const env = process.env.CLOUDFRONT_DISTRIBUTION_ID!;
  const videoUrl = `${env}/videos/Economic%20models%20%20Basic%20economics%20concepts.mp4`;
  return (
    <div className="w-full min-h-screen p-6">
      <h1>Test Page</h1>
      <VideoPlayer url={videoUrl} />
    </div>
  );
}

export default TestPage;
