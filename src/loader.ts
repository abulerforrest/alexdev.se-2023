"use client";

export default function customImageLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width: string;
  quality: string;
}) {
  return `https://alexdev.se${src}?w=${width}&q=${quality || 75}`;
}
