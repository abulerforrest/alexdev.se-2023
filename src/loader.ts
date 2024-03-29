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
  return `${src}&w=${width}&q=${quality || 75}`;
}
