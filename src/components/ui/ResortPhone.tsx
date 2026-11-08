"use client";

import { useEffect, useRef, useState } from "react";

const RESORT_URL = "https://emeraldbayresorts.com/";
const DESKTOP_WIDTH = 1440;

export default function ResortPhone() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [viewport, setViewport] = useState({ width: 351, height: 600 });

  useEffect(() => {
    const element = viewportRef.current;
    if (!element) return;
    const observer = new ResizeObserver(([entry]) => {
      setViewport({ width: entry.contentRect.width, height: entry.contentRect.height });
    });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const scale = Math.max(viewport.width, 1) / DESKTOP_WIDTH;

  return (
    <figure className="resort-preview">
      <div className="resort-phone">
        <div className="resort-camera" aria-hidden="true" />
        <div className="resort-browser">emeraldbayresorts.com</div>
        <div className="resort-viewport" ref={viewportRef}>
          <iframe
          className="resort-website"
          src={RESORT_URL}
          title="Emerald Bay Resorts — interactive mobile website"
          loading="eager"
          allow="fullscreen"
          style={{
            width: DESKTOP_WIDTH,
            height: Math.ceil(viewport.height / scale),
            transform: `scale(${scale})`,
          }}
        />
        </div>
        <div className="resort-home" aria-hidden="true"><i /></div>
      </div>
      <figcaption>
        <p>Scroll inside the phone to explore</p>
        <a className="link" href={RESORT_URL} target="_blank" rel="noopener noreferrer">Open website ↗</a>
      </figcaption>
    </figure>
  );
}
