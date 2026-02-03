(function(){"use strict";const l="#banner{background-color:#fff;border:1px solid lab(90.952 0 -.0000119209);border-radius:calc(.625rem - 2px);position:fixed;bottom:2rem;right:2rem;padding:2rem 1rem;opacity:0;pointer-events:none;transform:translateY(300px);font-family:system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif;transition:all .5s ease-in-out}#banner.visible{opacity:1;pointer-events:auto;transform:translateY(0)}#container{margin-bottom:1rem;display:flex;justify-content:space-between;gap:1rem}p{margin-top:0;margin-bottom:.5rem}button{background-color:#fff;cursor:pointer;display:inline-flex;align-items:center;justify-content:center;gap:.5rem;border-radius:calc(.625rem - 2px);outline:none;font-size:14px;transition:all .3s ease-in-out}button:hover{background-color:#e8e8e8}button[data-close]{width:36px;height:36px;border:1px solid oklch(.93 0 0)}button[data-accept],button[data-reject]{padding:.5rem 1rem;background-color:#3a0756;color:#e6b01d;border:none}:is(button[data-accept],button[data-reject]):hover{background-color:color-mix(in oklch,oklch(27.54% .1291 308.93deg) 90%,transparent)}";(function(){const n={gtmId:document.currentScript?.dataset.gtm||null,consentKey:"site_consent_v1"};function u(){window.dataLayer=window.dataLayer||[],window.gtag=function(){dataLayer.push(arguments)}}function g(){gtag("consent","default",{analytics_storage:"denied",ad_storage:"denied",ad_user_data:"denied",ad_personalization:"denied"})}function o(e){gtag("consent","update",{analytics_storage:e.analytics?"granted":"denied",ad_storage:e.marketing?"granted":"denied",ad_user_data:e.marketing?"granted":"denied",ad_personalization:e.marketing?"granted":"denied"})}function r(){try{return JSON.parse(localStorage.getItem(n.consentKey))}catch{return null}}function p(e){localStorage.setItem(n.consentKey,JSON.stringify(e))}function i(){if(!n.gtmId||window.__gtmLoaded)return;window.dataLayer=window.dataLayer||[],window.dataLayer.push({event:"gtm.js","gtm.start":Date.now()});const e=document.createElement("script");e.async=!0,e.id="google-tag-manager",e.src=`https://www.googletagmanager.com/gtm.js?id=${n.gtmId}`,document.head.append(e),window.__gtmLoaded=!0}function a(e){p(e),o(e),e.analytics&&i(),window.dispatchEvent(new CustomEvent("consent:change",{detail:e}))}function m(){const e=document.createElement("div"),t=e.attachShadow({mode:"open"});t.innerHTML=`
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
    `;const s=t.querySelector("[data-close]");s&&(s.onclick=()=>{t.querySelector("#banner")?.classList.remove("visible")});const c=t.querySelector("[data-accept]");c&&(c.onclick=()=>{a({analytics:!0,marketing:!1}),t.querySelector("#banner")?.classList.remove("visible")});const d=t.querySelector("[data-reject]");d&&(d.onclick=()=>{a({analytics:!1,marketing:!1}),t.querySelector("#banner")?.classList.remove("visible")}),document.body.appendChild(e),setTimeout(()=>{t.querySelector("#banner")?.classList.add("visible")},300)}function f(){u(),g();const e=r();e?(o(e),e.analytics&&i()):m()}window.cookieConsent={getState:r,acceptAll(){a({analytics:!0,marketing:!0})},rejectAll(){a({analytics:!1,marketing:!1})}},window.onload=()=>{f()}})()})();
