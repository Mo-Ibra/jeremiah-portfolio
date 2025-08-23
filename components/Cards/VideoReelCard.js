import Image from "next/image";
import { useEffect, useState, useRef } from "react";

import { MdVolumeOff, MdVolumeUp } from 'react-icons/md';

const VideoReelCard = ({
  aspectRatio = "9/16",
  videoId,
  views,
  platform = "TikTok",
  hasTestimonial = false,
  testimonialText = "",
  testimonialImageSrc = "1.jpg",
  authorName = "Jeremiah Smith",
  authorRole = "CEO, Company Name",
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    if (window.innerWidth < 768) {
      console.log("mobile");
      setIsMobile(true);
    }
  }, []);

  // Wait for Wistia API to be ready and get video reference
  useEffect(() => {
    // Initialize Wistia queue if it doesn't exist
    window._wq = window._wq || [];

    window._wq.push({
      id: videoId,
      onReady: (video) => {
        videoRef.current = video;
        console.log("Wistia video ready", video);

        // Set initial mute state
        try {
          if (typeof video.mute === "function") {
            isMuted ? video.mute() : video.unmute();
          } else if (typeof video.volume === "function") {
            video.volume(isMuted ? 0 : 1);
          }
        } catch (error) {
          console.error("Error setting initial mute state:", error);
        }
      },
    });
  }, [videoId]);

  const handleMute = () => {
    const newMutedState = !isMuted;
    setIsMuted(newMutedState);

    // Control the actual Wistia video
    if (videoRef.current) {
      try {
        if (newMutedState) {
          // Mute the video
          if (typeof videoRef.current.mute === "function") {
            videoRef.current.mute();
          } else if (typeof videoRef.current.volume === "function") {
            videoRef.current.volume(0);
          }
        } else {
          // Unmute the video
          if (typeof videoRef.current.unmute === "function") {
            videoRef.current.unmute();
          } else if (typeof videoRef.current.volume === "function") {
            videoRef.current.volume(1);
          }
        }
        console.log("Video mute state changed to:", newMutedState);
      } catch (error) {
        console.error("Error controlling video mute state:", error);
        console.log(
          "Available methods:",
          Object.getOwnPropertyNames(videoRef.current)
        );
      }
    } else {
      console.warn("Video reference not available");
    }
  };

  return (
    <div className="reel-card">
      <div className="reel-wrapper" style={{ aspectRatio: aspectRatio }}>
        <div
          className={`wistia_embed wistia_async_${videoId} ${
            isMobile ? "autoPlay=false" : ""
          }`}
          style={{ height: "100%", width: "100%" }}
        ></div>

        <div className="reel-overlay">
          <div className="reel-info">
            <span className="reel-metric">{views} views</span>
            <span className="reel-platform">{platform}</span>
          </div>

          {/* Mute/Unmute Icon */}
          <button
            onClick={handleMute}
            className="mute-button"
            aria-label={isMuted ? "Unmute video" : "Mute video"}
          >
            {isMuted ? (
              // Muted Icon (speaker with X)
              <MdVolumeOff size={24} color="white" />
            ) : (
              // Unmuted Icon (speaker with sound waves)
              <MdVolumeUp size={24} color="white" />
            )}
          </button>
        </div>
      </div>

      {hasTestimonial && (
        <div className="reel-testimonial">
          <p>{testimonialText}</p>
          <div className="reel-testimonial-author">
            <Image
              src={`/images/testimonials/${testimonialImageSrc}`}
              alt="Testimonial Author"
              width={60}
              height={60}
              className="author-image"
            />
            <div className="author-info">
              <p className="author-name">{authorName}</p>
              <p className="author-title">{authorRole}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoReelCard;
