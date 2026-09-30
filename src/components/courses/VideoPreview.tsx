"use client";

import Image from "next/image";
import { useState } from "react";

interface Props { poster: string; src?: string; title: string }

export function VideoPreview({ poster, src, title }: Props) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="relative aspect-video overflow-hidden rounded-2xl bg-gray-200">
      {playing && src ? (
        <video src={src} poster={poster} controls autoPlay className="size-full object-cover" />
      ) : (
        <>
          <Image src={poster} alt="" fill priority sizes="(min-width: 1024px) 720px, 100vw" className="object-cover" />
          <button
            type="button"
            disabled={!src}
            onClick={() => setPlaying(true)}
            aria-label={`Play preview of ${title}`}
            className="absolute left-1/2 top-1/2 grid size-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-2xl bg-black/50 text-white backdrop-blur-sm transition hover:scale-105 hover:bg-black/60 disabled:cursor-default disabled:hover:scale-100"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        </>
      )}
    </div>
  );
}