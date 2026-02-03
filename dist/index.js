import t from "./next.js";
const n = document.currentScript;
window.onload = () => {
  t({
    gtmId: n?.dataset.gtm
  });
};
