"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";

/**
 * Plays a YouTube video in place rather than sending the visitor to youtube.com.
 *
 * Until someone presses play this is just a poster frame and a button — no
 * iframe, no YouTube script, no cookies. Pressing play swaps in the player
 * from youtube-nocookie.com and starts it.
 */
export default function YouTubeEmbed({ id, title, poster = "hqdefault" }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-[1.25rem] bg-zinc-900 border border-hairline">
      {playing ? (
        <iframe
          className="absolute inset-0 w-full h-full"
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={`Play video: ${title}`}
          className="group absolute inset-0 w-full h-full cursor-pointer"
        >
          <Image
            src={`https://i.ytimg.com/vi/${id}/${poster}.jpg`}
            alt=""
            aria-hidden="true"
            fill
            sizes="(max-width: 1024px) 100vw, 720px"
            className="object-cover"
          />
          <span className="photo-scrim absolute inset-0" />

          <span className="absolute inset-0 flex items-center justify-center">
            <span className="flex items-center justify-center w-16 h-16 rounded-full bg-gold text-on-gold shadow-lg transition-transform duration-300 group-hover:scale-110">
              <Play className="w-6 h-6 translate-x-0.5" fill="currentColor" />
            </span>
          </span>

          {/* Pinned to the dark palette: this title sits on a photograph, so
              it must stay light even when the page around it is cream. */}
          <span data-theme="dark" className="absolute inset-x-0 bottom-0 p-5 text-left">
            <span className="type-heading block text-base sm:text-lg text-ink">{title}</span>
          </span>
        </button>
      )}
    </div>
  );
}
