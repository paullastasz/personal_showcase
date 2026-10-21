export function updateDocumentElements (
  lang: string,
  title: string,
  description: string,
  locale: string,
  image: string
): void {
  document.documentElement.lang = lang;

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
}