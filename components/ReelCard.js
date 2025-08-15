// "use client";

// import { useEffect, useState } from "react";

// export default function ReelCard({ videoId = "fx0tr3a1h9", thumbnail, views, platform, aspectRatio }) {
//   const [isPlaying, setIsPlaying] = useState(false);

//   useEffect(() => {
//     if (isPlaying) {
//       if (!document.querySelector('script[src="https://fast.wistia.com/assets/external/E-v1.js"]')) {
//         const script = document.createElement("script");
//         script.src = "https://fast.wistia.com/assets/external/E-v1.js";
//         script.async = true;
//         document.body.appendChild(script);
//       }
//     }
//   }, [isPlaying]);

//   return (
//     <div className="reel-card">
//       <div className="reel-wrapper" style={{ aspectRatio: aspectRatio }}>
//         {!isPlaying ? (
//           <div
//             className="thumbnail-container"
//             onClick={() => setIsPlaying(true)}
//           >
//             <img src={thumbnail} alt="Video Thumbnail" className="thumbnail" />
//             <div className="play-button">▶</div>
//           </div>
//         ) : (
//           <div
//             className={`wistia_embed wistia_async_${videoId}?autoPlay=true`}
//             style={{ height: "100%", width: "100%" }}
//           ></div>
//         )}

//         <div className="reel-overlay">
//           <div className="reel-info">
//             <span className="reel-metric">{views}</span>
//             <span className="reel-platform">{platform}</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }