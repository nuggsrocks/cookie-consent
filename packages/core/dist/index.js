const l = "#banner{background-color:#fff;border:1px solid lab(90.952 0 -.0000119209);border-radius:calc(.625rem - 2px);position:fixed;bottom:2rem;right:2rem;padding:2rem 1rem;opacity:0;pointer-events:none;transform:translateY(300px);font-family:system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif;transition:all .5s ease-in-out}#banner.visible{opacity:1;pointer-events:auto;transform:translateY(0)}#container{margin-bottom:1rem;display:flex;justify-content:space-between;gap:1rem}p{margin-top:0;margin-bottom:.5rem}button{background-color:#fff;cursor:pointer;display:inline-flex;align-items:center;justify-content:center;gap:.5rem;border-radius:calc(.625rem - 2px);outline:none;font-size:14px;transition:all .3s ease-in-out}button:hover{background-color:#e8e8e8}button[data-close]{width:36px;height:36px;border:1px solid oklch(.93 0 0)}button[data-accept],button[data-reject]{padding:.5rem 1rem;background-color:#3a0756;color:#e6b01d;border:none}:is(button[data-accept],button[data-reject]):hover{background-color:color-mix(in oklch,oklch(27.54% .1291 308.93deg) 90%,transparent)}";
function s() {
  const t = document.createElement("div"), e = t.attachShadow({ mode: "open" });
  e.innerHTML = `
      <style>
        ${l}
      </style>
      <div id="banner">
        <div id="container">
          <div>
            <p>We use cookies for analytics to improve this site.</p>
            <p>You can accept or reject analytics cookies.</p>
          </div>
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
        <button data-accept>Accept</button>
        <button data-reject>Reject</button>
      </div>
    `;
  const o = e.querySelector("[data-close]");
  o && (o.onclick = () => {
    e.querySelector("#banner")?.classList.remove("visible");
  });
  const a = e.querySelector("[data-accept]");
  a && (a.onclick = () => {
    window.cookieConsent.acceptAnalytics(), e.querySelector("#banner")?.classList.remove("visible");
  });
  const r = e.querySelector("[data-reject]");
  r && (r.onclick = () => {
    window.cookieConsent.rejectAll(), e.querySelector("#banner")?.classList.remove("visible");
  }), document.body.appendChild(t), setTimeout(() => {
    e.querySelector("#banner")?.classList.add("visible");
  }, 300);
}
function u() {
  gtag("consent", "default", {
    analytics_storage: "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied"
  });
}
function c(t) {
  gtag("consent", "update", {
    analytics_storage: t.analytics ? "granted" : "denied",
    ad_storage: t.marketing ? "granted" : "denied",
    ad_user_data: t.marketing ? "granted" : "denied",
    ad_personalization: t.marketing ? "granted" : "denied"
  });
}
function d(t) {
  try {
    return JSON.parse(localStorage.getItem(t));
  } catch (e) {
    return process.env.NODE_ENV !== "production" && console.warn(e), null;
  }
}
function p(t, e) {
  localStorage.setItem(e, JSON.stringify(t));
}
function i(t, e) {
  p(t, e), c(t), window.dispatchEvent(new CustomEvent("consent:change", { detail: t }));
}
function g(t) {
  window.cookieConsent = {
    getState() {
      return d(n);
    },
    acceptAnalytics() {
      i({ analytics: !0, marketing: !1 }, n);
    },
    rejectAll() {
      i({ analytics: !1, marketing: !1 }, n);
    },
    open() {
      s();
    }
  };
}
function m({ gtmId: t }) {
  window.dataLayer = window.dataLayer || [], window.dataLayer.push({
    event: "gtm.js",
    "gtm.start": Date.now()
  });
  const e = document.createElement("script");
  e.async = !0, e.id = "google-tag-manager", e.src = `https://www.googletagmanager.com/gtm.js?id=${t}`, document.head.append(e), window.__gtmLoaded = !0;
}
const n = "site_consent_v1";
function b({ gtmId: t }) {
  window.dataLayer = window.dataLayer || [], window.gtag = function() {
    dataLayer.push(arguments);
  }, u(), m({ gtmId: t });
  const e = d(n);
  e ? c(e) : s(), g();
}
export {
  n as consentKey,
  b as default
};
