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
  return `https://alexdev-se.web.app${src}?w=${width}&q=${quality || 75}`;
}
