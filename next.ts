import exposePublicAPI from "./src/api";
import loadGTM, { consentKey } from "./src/gtm";
import createBanner from "./src/shadow-ui";
import {
  getStoredConsent,
  setDefaultConsent,
  updateConsent,
} from "./src/state";

export default function initConsent({ gtmId }: { gtmId: string | undefined }) {
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

  exposePublicAPI();
}
