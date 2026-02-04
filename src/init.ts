import { getStoredConsent, setDefaultConsent, updateConsent } from "./state";
import loadGTM from "./gtm";
import { createBanner } from "./shadow-ui";
import exposePublicAPI from "./api";
import { consentKey } from "./gtm";

export function initConsent({ gtmId }: { gtmId: string | undefined }) {
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
