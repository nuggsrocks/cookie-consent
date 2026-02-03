import { consentKey } from "../index";
import createBanner from "./shadow-ui";
import { getStoredConsent, saveAndApply } from "./state";

export default function exposePublicAPI(gtmId: string) {
  // @ts-expect-error
  window.cookieConsent = {
    getState() {
      return getStoredConsent(consentKey);
    },
    acceptAnalytics() {
      saveAndApply({ analytics: true, marketing: false }, consentKey);
    },
    rejectAll() {
      saveAndApply({ analytics: false, marketing: false }, consentKey);
    },
    open() {
      createBanner();
    },
  };
}
