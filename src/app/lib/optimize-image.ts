// Baut eine Netlify Image CDN URL, die das Bild serverseitig
// verkleinert, komprimiert und ins beste Format (WebP/AVIF) konvertiert.
// Doku: https://docs.netlify.com/image-cdn/overview/
export function optimizeImage(url: string, width: number, quality = 75) {
  // Nur für lokale /public Assets sinnvoll (relative Pfade)
  if (!url.startsWith('/')) return url;
  const params = new URLSearchParams({
    url,
    w: String(width),
    q: String(quality),
  });
  return `/.netlify/images?${params.toString()}`;
}
