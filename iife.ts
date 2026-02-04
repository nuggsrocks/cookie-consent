import { initConsent } from "./src/init";

const script = document.currentScript as HTMLScriptElement;

window.onload = () => {
  initConsent({
    gtmId: script?.dataset.gtm,
  });
};
