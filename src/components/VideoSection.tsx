import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

interface VideoSectionProps {
  videoUrl?: string;
  fallbackUrl?: string;
  poster?: string;
}

export default function VideoSection({ 
  videoUrl = "https://player.vimeo.com/external/373239380.sd.mp4?s=6e3ea5b4e32f345a3e921e0647454a4efee7e0f1&profile_id=164&oauth2_token_id=57447761",
  fallbackUrl,
  poster
}: VideoSectionProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play().catch(() => setIsPlaying(false));
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlaying]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <div className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden bg-gray-100">
      <video
        ref={videoRef}
        autoPlay
        muted={isMuted}
        loop
        playsInline
        poster={poster}
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={videoUrl} type="video/mp4" />
        {fallbackUrl && <source src={fallbackUrl} type="video/webm" />}
      </video>
      
      <div className="absolute bottom-4 right-4 flex gap-2">
        <button 
          onClick={togglePlay}
          className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
          aria-label={isPlaying ? 'Pause' : 'Play'}
        >
          {isPlaying ? (
            <Pause className="w-5 h-5 text-white" />
          ) : (
            <Play className="w-5 h-5 text-white" />
          )}
        </button>
        <button 
          onClick={toggleMute}
          className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
          aria-label={isMuted ? 'Unmute' : 'Mute'}
        >
          {isMuted ? (
            <VolumeX className="w-5 h-5 text-white" />
          ) : (
            <Volume2 className="w-5 h-5 text-white" />
          )}
        </button>
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30" />
    </div>
  );
}