import initConsent from "./next";

const script = document.currentScript as HTMLScriptElement;

window.onload = () => {
  initConsent({
    gtmId: script?.dataset.gtm,
  });
};
