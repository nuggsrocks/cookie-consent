// @ts-expect-error
import css from './styles.css'

export function createBanner() {
  const host = document.createElement('div')
  const shadow = host.attachShadow({ mode: 'open' })

  shadow.innerHTML = `
    <style>
      ${css}
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
  `

  const closeBtn: HTMLButtonElement | null =
    shadow.querySelector('[data-close]')

  if (closeBtn) {
    closeBtn.onclick = () => {
      shadow.querySelector('#banner')?.classList.remove('visible')
    }
  }

  const acceptBtn: HTMLButtonElement | null =
    shadow.querySelector('[data-accept]')

  if (acceptBtn) {
    acceptBtn.onclick = () => {
      // @ts-expect-error
      window.cookieConsent.acceptAnalytics()
      shadow.querySelector('#banner')?.classList.remove('visible')
    }
  }

  const rejectBtn: HTMLButtonElement | null =
    shadow.querySelector('[data-reject]')

  if (rejectBtn) {
    rejectBtn.onclick = () => {
      // @ts-expect-error
      window.cookieConsent.rejectAll()
      shadow.querySelector('#banner')?.classList.remove('visible')
    }
  }

  document.body.appendChild(host)

  setTimeout(() => {
    shadow.querySelector('#banner')?.classList.add('visible')
  }, 300)
}
