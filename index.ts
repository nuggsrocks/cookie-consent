import exposePublicAPI from "./src/api";
import loadGTM from "./src/gtm";
import createBanner from "./src/shadow-ui";
import {
  getStoredConsent,
  setDefaultConsent,
  updateConsent,
} from "./src/state";

export const consentKey = "site_consent_v1";

function initConsent({ gtmId }: { gtmId: string | undefined }) {
  if (gtmId === undefined) {
    console.error("Must provide a Google Tag Manager id");
    return;
  }

  // @ts-expect-error
  window.dataLayer = window.dataLayer || [];
  // @ts-expect-error
  window.gtag = function () {
    // @ts-expect-error
    dataLayer.push(arguments);
  };

  setDefaultConsent();

  loadGTM({ gtmId });

  const stored = getStoredConsent(consentKey);

  if (stored) {
    updateConsent(stored);
  } else {
    createBanner();
  }

  exposePublicAPI(gtmId);
}

const script = document.currentScript as HTMLScriptElement;

window.onload = () => {
  initConsent({
    gtmId: script?.dataset.gtm,
  });
};
