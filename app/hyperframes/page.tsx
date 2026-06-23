"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { ArrowLeft, Volume2, VolumeX } from "lucide-react";

export default function HyperframesPage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [soundOn, setSoundOn] = useState(false);

  const toggleSound = async () => {
    const video = videoRef.current;
    if (!video) return;

    const nextSoundState = !soundOn;
    video.muted = !nextSoundState;
    video.volume = nextSoundState ? 0.76 : 0;
    setSoundOn(nextSoundState);

    if (video.paused) {
      await video.play().catch(() => undefined);
    }
  };

  return (
    <main className="fixed inset-0 overflow-hidden bg-black text-frost">
      <video
        ref={videoRef}
        className="h-full w-full bg-black object-contain"
        src="/hyperframes/terplogix-full-promo.mp4"
        poster="/hyperframes/terplogix-full-promo-poster.jpg"
        autoPlay
        muted
        loop
        playsInline
        controls
        preload="metadata"
      />

      <Link
        href="/"
        className="button-press fixed left-4 top-4 z-20 inline-flex items-center gap-2 rounded-full border border-white/12 bg-black/42 px-4 py-2 text-sm font-semibold text-white shadow-[0_18px_60px_rgba(0,0,0,0.34)] backdrop-blur-xl hover:border-cyan-tlx/40"
      >
        <ArrowLeft className="h-4 w-4" />
        Home
      </Link>

      <button
        type="button"
        onClick={toggleSound}
        className="button-press fixed bottom-4 right-4 z-20 inline-flex items-center gap-2 rounded-full border border-cyan-tlx/28 bg-black/46 px-4 py-2 text-sm font-semibold text-white shadow-[0_18px_60px_rgba(0,0,0,0.34)] backdrop-blur-xl hover:border-cyan-tlx/50"
        aria-pressed={soundOn}
      >
        {soundOn ? <Volume2 className="h-4 w-4 text-cyan-tlx" /> : <VolumeX className="h-4 w-4 text-cyan-tlx" />}
        {soundOn ? "Sound on" : "Sound"}
      </button>
    </main>
  );
}
