// src/gtm.ts
var consentKey = "site_consent_v1";
function loadGTM({ gtmId }) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "gtm.js",
    "gtm.start": Date.now()
  });
  const script2 = document.createElement("script");
  script2.async = true;
  script2.id = "google-tag-manager";
  script2.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`;
  document.head.append(script2);
  window.__gtmLoaded = true;
}

// src/styles.css
var styles_default = '#banner {\n  background-color: white;\n  border: 1px solid oklch(0.85 0 0);\n  border-radius: calc(0.625rem - 2px);\n  max-width: 25%;\n  position: fixed;\n  bottom: 2rem;\n  right: 2rem;\n  padding: 1rem 2rem 2rem 2rem;\n  opacity: 0;\n  pointer-events: none;\n  transform: translateY(300px);\n\n  font-family:\n    system-ui,\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    Oxygen,\n    Ubuntu,\n    Cantarell,\n    "Open Sans",\n    "Helvetica Neue",\n    sans-serif;\n\n  transition: all 500ms ease-in-out;\n}\n\n#banner.visible {\n  opacity: 1;\n  pointer-events: auto;\n  transform: translateY(0);\n}\n\n#heading {\n  display: flex;\n  justify-content: space-between;\n  align-items: start;\n  margin-bottom: 1rem;\n}\n\n#cookie-icon {\n  width: 4rem;\n  height: 4rem;\n}\n\n#content {\n  margin-bottom: 1rem;\n}\n\np {\n  margin: 0;\n}\n\nbutton {\n  background-color: white;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  border-radius: calc(0.625rem - 2px);\n  outline: none;\n  font-size: 14px;\n  border: none;\n\n  transition: all 300ms ease-in-out;\n}\n\nbutton[data-close] {\n  color: black;\n  width: 36px;\n  height: 36px;\n\n  &:hover {\n    color: oklch(0.5 0 0);\n  }\n}\n\nbutton[data-accept] {\n  margin-bottom: 0.5rem;\n}\n\nbutton[data-accept],\nbutton[data-reject] {\n  padding: 0.5rem 1rem;\n  background-color: oklch(27.54% 0.1291 308.93deg);\n  color: oklch(78.57% 0.1552 85.32deg);\n  border: none;\n  width: 100%;\n\n  &:hover {\n    background-color: color-mix(\n      in oklch,\n      oklch(27.54% 0.1291 308.93deg) 90%,\n      transparent\n    );\n  }\n}\n\n@media (max-width: 768px) {\n  #banner {\n    left: 2rem;\n    max-width: none;\n  }\n}\n';

// src/shadow-ui.ts
function createBanner() {
  const host = document.createElement("div");
  const shadow = host.attachShadow({ mode: "open" });
  shadow.innerHTML = `
    <style>
      ${styles_default}
    </style>
    <div id="banner">
      <div id="heading">
        <svg
          id="cookie-icon"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
          <path d="M8.5 8.5v.01" />
          <path d="M16 15.5v.01" />
          <path d="M12 12v.01" />
          <path d="M11 17v.01" />
          <path d="M7 14v.01" />
        </svg>
        <button data-close>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M18 6 6 18"></path>
            <path d="m6 6 12 12"></path>
          </svg>
        </button>
      </div>

      <div id="content">
        <p>
          We use cookies for analytics to improve this site. You can accept or
          reject analytics cookies.
        </p>
      </div>

      <button data-accept>Accept</button>
      <button data-reject>Reject</button>
    </div>
  `;
  const closeBtn = shadow.querySelector("[data-close]");
  if (closeBtn) {
    closeBtn.onclick = () => {
      shadow.querySelector("#banner")?.classList.remove("visible");
    };
  }
  const acceptBtn = shadow.querySelector("[data-accept]");
  if (acceptBtn) {
    acceptBtn.onclick = () => {
      window.cookieConsent.acceptAnalytics();
      shadow.querySelector("#banner")?.classList.remove("visible");
    };
  }
  const rejectBtn = shadow.querySelector("[data-reject]");
  if (rejectBtn) {
    rejectBtn.onclick = () => {
      window.cookieConsent.rejectAll();
      shadow.querySelector("#banner")?.classList.remove("visible");
    };
  }
  document.body.appendChild(host);
  setTimeout(() => {
    shadow.querySelector("#banner")?.classList.add("visible");
  }, 300);
}

// src/state.ts
function setDefaultConsent() {
  gtag("consent", "default", {
    analytics_storage: "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied"
  });
}
function updateConsent(consent) {
  gtag("consent", "update", {
    analytics_storage: consent.analytics ? "granted" : "denied",
    ad_storage: consent.marketing ? "granted" : "denied",
    ad_user_data: consent.marketing ? "granted" : "denied",
    ad_personalization: consent.marketing ? "granted" : "denied"
  });
}
function getStoredConsent(consentKey2) {
  try {
    const consent = JSON.parse(localStorage.getItem(consentKey2));
    return consent;
  } catch (err) {
    if (true) console.warn(err);
    return null;
  }
}
function storeConsent(consent, consentKey2) {
  localStorage.setItem(consentKey2, JSON.stringify(consent));
}
function saveAndApply(consent, consentKey2) {
  storeConsent(consent, consentKey2);
  updateConsent(consent);
  window.dispatchEvent(new CustomEvent("consent:change", { detail: consent }));
}

// src/api.ts
function exposePublicAPI() {
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
    }
  };
}

// index.ts
function initConsent({ gtmId }) {
  if (gtmId === void 0) {
    console.error("Must provide a Google Tag Manager id");
    return;
  }
  window.dataLayer = window.dataLayer || [];
  window.gtag = function() {
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
var script = document.currentScript;
window.onload = () => {
  initConsent({
    gtmId: script?.dataset.gtm
  });
};
export {
  initConsent as default
};
