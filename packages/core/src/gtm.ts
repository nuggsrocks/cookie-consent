export default function loadGTM({ gtmId }: { gtmId: string }) {
  // @ts-expect-error
  window.dataLayer = window.dataLayer || [];
  // @ts-expect-error
  window.dataLayer.push({
    event: "gtm.js",
    "gtm.start": Date.now(),
  });

  const script = document.createElement("script");

  script.async = true;

  script.id = "google-tag-manager";

  script.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`;

  document.head.append(script);

  // @ts-expect-error
  window.__gtmLoaded = true;
}
