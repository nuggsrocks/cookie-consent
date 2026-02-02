import initConsent from "@cookie-consent/core";

const script = document.currentScript as HTMLScriptElement;

window.onload = () => {
  initConsent({
    gtmId: script?.dataset.gtm,
  });
};
