"use client";function m(){gtag("consent","default",{analytics_storage:"denied",ad_storage:"denied",ad_user_data:"denied",ad_personalization:"denied"})}function a(e){gtag("consent","update",{analytics_storage:e.analytics?"granted":"denied",ad_storage:e.marketing?"granted":"denied",ad_user_data:e.marketing?"granted":"denied",ad_personalization:e.marketing?"granted":"denied"})}function o(e){try{return JSON.parse(localStorage.getItem(e))}catch{return null}}function w(e,t){localStorage.setItem(t,JSON.stringify(e))}function i(e,t){w(e,t),a(e),window.dispatchEvent(new CustomEvent("consent:change",{detail:e}))}var n="site_consent_v1";function s({gtmId:e}){window.dataLayer=window.dataLayer||[],window.dataLayer.push({event:"gtm.js","gtm.start":Date.now()});let t=document.createElement("script");t.async=!0,t.id="google-tag-manager",t.src=`https://www.googletagmanager.com/gtm.js?id=${e}`,document.head.append(t),window.__gtmLoaded=!0}var g=`#banner {
  background-color: white;
  border: 1px solid var(--cc-accent, oklch(0.85 0 0));
  border-radius: calc(0.625rem - 2px);
  max-width: 25%;
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  padding: 1rem 2rem 2rem 2rem;
  opacity: 0;
  pointer-events: none;
  transform: translateY(300px);

  font-family:
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    'Open Sans',
    'Helvetica Neue',
    sans-serif;

  transition: all 500ms ease-in-out;
}

#banner.visible {
  opacity: 1;
  pointer-events: auto;
  transform: translateY(0);
}

#heading {
  display: flex;
  justify-content: space-between;
  align-items: start;
  margin-bottom: 1rem;
}

#cookie-icon {
  width: 4rem;
  height: 4rem;
}

#content {
  margin-bottom: 1rem;
}

p {
  margin: 0;
}

button {
  background-color: white;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: calc(0.625rem - 2px);
  outline: none;
  font-size: 14px;
  border: none;

  transition: all 300ms ease-in-out;
}

button[data-close] {
  color: black;
  width: 36px;
  height: 36px;

  &:hover {
    color: color-mix(in oklch, black 60%, transparent);
  }
}

button[data-accept] {
  margin-bottom: 0.5rem;
}

button[data-accept],
button[data-reject] {
  padding: 0.5rem 1rem;
  background-color: var(--cc-background, black);
  color: var(--cc-foreground, white);
  border: none;
  width: 100%;

  &:hover {
    background-color: color-mix(
      in oklch,
      var(--cc-background, black) 90%,
      transparent
    );
  }
}

@media (max-width: 768px) {
  #banner {
    left: 2rem;
    max-width: none;
  }
}
`;function r(){let e=document.createElement("div"),t=e.attachShadow({mode:"open"});t.innerHTML=`
    <style>
      ${g}
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
  `;let l=t.querySelector("[data-close]");l&&(l.onclick=()=>{t.querySelector("#banner")?.classList.remove("visible")});let p=t.querySelector("[data-accept]");p&&(p.onclick=()=>{window.cookieConsent.acceptAnalytics(),t.querySelector("#banner")?.classList.remove("visible")});let u=t.querySelector("[data-reject]");u&&(u.onclick=()=>{window.cookieConsent.rejectAll(),t.querySelector("#banner")?.classList.remove("visible")}),document.body.appendChild(e),setTimeout(()=>{t.querySelector("#banner")?.classList.add("visible")},300)}function c(){window.cookieConsent={getState(){return o(n)},acceptAnalytics(){i({analytics:!0,marketing:!1},n)},rejectAll(){i({analytics:!1,marketing:!1},n)},open(){r()}}}function f({gtmId:e}){if(e===void 0){console.error("Must provide a Google Tag Manager id");return}window.dataLayer=window.dataLayer||[],window.gtag=function(){dataLayer.push(arguments)},m(),s({gtmId:e});let t=o(n);t?a(t):r(),c()}import{useEffect as b}from"react";function d({gtmId:e}){return b(()=>{e!==void 0&&f({gtmId:e})},[]),null}var P=d;export{P as default};
