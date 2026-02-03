"use strict";(()=>{var n="site_consent_v1";function r({gtmId:t}){window.dataLayer=window.dataLayer||[],window.dataLayer.push({event:"gtm.js","gtm.start":Date.now()});let e=document.createElement("script");e.async=!0,e.id="google-tag-manager",e.src=`https://www.googletagmanager.com/gtm.js?id=${t}`,document.head.append(e),window.__gtmLoaded=!0}var m=`#banner {
  background-color: white;
  border: 1px solid oklch(0.85 0 0);
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
    "Segoe UI",
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    "Open Sans",
    "Helvetica Neue",
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
    color: oklch(0.5 0 0);
  }
}

button[data-accept] {
  margin-bottom: 0.5rem;
}

button[data-accept],
button[data-reject] {
  padding: 0.5rem 1rem;
  background-color: oklch(27.54% 0.1291 308.93deg);
  color: oklch(78.57% 0.1552 85.32deg);
  border: none;
  width: 100%;

  &:hover {
    background-color: color-mix(
      in oklch,
      oklch(27.54% 0.1291 308.93deg) 90%,
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
`;function o(){let t=document.createElement("div"),e=t.attachShadow({mode:"open"});e.innerHTML=`
    <style>
      ${m}
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
  `;let d=e.querySelector("[data-close]");d&&(d.onclick=()=>{e.querySelector("#banner")?.classList.remove("visible")});let l=e.querySelector("[data-accept]");l&&(l.onclick=()=>{window.cookieConsent.acceptAnalytics(),e.querySelector("#banner")?.classList.remove("visible")});let p=e.querySelector("[data-reject]");p&&(p.onclick=()=>{window.cookieConsent.rejectAll(),e.querySelector("#banner")?.classList.remove("visible")}),document.body.appendChild(t),setTimeout(()=>{e.querySelector("#banner")?.classList.add("visible")},300)}function u(){gtag("consent","default",{analytics_storage:"denied",ad_storage:"denied",ad_user_data:"denied",ad_personalization:"denied"})}function i(t){gtag("consent","update",{analytics_storage:t.analytics?"granted":"denied",ad_storage:t.marketing?"granted":"denied",ad_user_data:t.marketing?"granted":"denied",ad_personalization:t.marketing?"granted":"denied"})}function a(t){try{return JSON.parse(localStorage.getItem(t))}catch{return null}}function w(t,e){localStorage.setItem(e,JSON.stringify(t))}function s(t,e){w(t,e),i(t),window.dispatchEvent(new CustomEvent("consent:change",{detail:t}))}function c(){window.cookieConsent={getState(){return a(n)},acceptAnalytics(){s({analytics:!0,marketing:!1},n)},rejectAll(){s({analytics:!1,marketing:!1},n)},open(){o()}}}function g({gtmId:t}){if(t===void 0){console.error("Must provide a Google Tag Manager id");return}window.dataLayer=window.dataLayer||[],window.gtag=function(){dataLayer.push(arguments)},u(),r({gtmId:t});let e=a(n);e?i(e):o(),c()}var f=document.currentScript;window.onload=()=>{g({gtmId:f?.dataset.gtm})};})();
