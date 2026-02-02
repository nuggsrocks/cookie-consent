import exposePublicAPI from "./src/api";
import loadGTM from "./src/gtm";
import createBanner from "./src/shadow-ui";
import {
  getStoredConsent,
  setDefaultConsent,
  updateConsent,
} from "./src/state";

export const consentKey = "site_consent_v1";

export default function initConsent({ gtmId }: { gtmId: string }) {
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
