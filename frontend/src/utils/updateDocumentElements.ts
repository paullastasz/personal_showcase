export function updateDocumentElements (
  langCode: string,
  title: string,
  description: string,
  locale: string,
  image: string,
  image_alt: string
): void {
  document.documentElement.lang = langCode;

  document.title = title;

  document.querySelector('meta[property="og:title"]')
    ?.setAttribute("content", title);

  document.querySelector('meta[name="description"]')
    ?.setAttribute("content", description);

  document.querySelector('meta[property="og:description"]')
    ?.setAttribute("content", description);

  document.querySelector('meta[property="og:locale"]')
    ?.setAttribute("content", locale);

  document.querySelector('meta[property="og:image"]')
    ?.setAttribute("content", image);

  document.querySelector('meta[property="og:image:alt"]')
    ?.setAttribute("content", image_alt);

  document.querySelector('link[rel="canonical"]')
    ?.setAttribute("href", `https://paulla-stasz.onrender.com/${langCode}`);
}