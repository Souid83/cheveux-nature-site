import React, { useEffect, useRef } from 'react';

interface VideoSectionProps {
  videoUrl?: string;
  fallbackUrl?: string;
  poster?: string;
}

export default function VideoSection({ 
<<<<<<< HEAD
  videoUrl = "https://souid83.github.io/cheveux-nature-site/videos/site_.mp4",
=======
  videoUrl = "https://souid83.github.io/cheveux-nature-site/videos/site_.mp4", // ✅ Chemin absolu pour GitHub Pages
>>>>>>> ac240cb (Mise à jour du build)
  fallbackUrl,
  poster
}: VideoSectionProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    console.log("💡 Le composant VideoSection est bien rendu !");
    if (videoRef.current) {
      console.log("🎥 Tentative de lecture de la vidéo :", videoUrl);
      videoRef.current.play().catch((err) => console.error("Erreur de lecture vidéo:", err));
    }
  }, []);

  return (
    <div className="relative w-full h-[60vh] md:h-[80vh] bg-gray-100">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        controls
        className="w-full h-full object-cover"
      >
        <source src={videoUrl} type="video/mp4" />
        {fallbackUrl && <source src={fallbackUrl} type="video/webm" />}
        Votre navigateur ne supporte pas la vidéo.
      </video>
    </div>
  );
}
