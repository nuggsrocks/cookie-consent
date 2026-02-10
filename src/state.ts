type Consent = {
  analytics: boolean
  marketing: boolean
}

export function setDefaultConsent() {
  // @ts-expect-error
  gtag('consent', 'default', {
    analytics_storage: 'denied',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
  })
}

export function updateConsent(consent: Consent) {
  // @ts-expect-error
  gtag('consent', 'update', {
    analytics_storage: consent.analytics ? 'granted' : 'denied',
    ad_storage: consent.marketing ? 'granted' : 'denied',
    ad_user_data: consent.marketing ? 'granted' : 'denied',
    ad_personalization: consent.marketing ? 'granted' : 'denied',
  })
}

export function getStoredConsent(consentKey: string) {
  const cookie = document.cookie

  const consent = cookie
    .split('; ')
    .find((row) => row.startsWith(consentKey + '='))
    ?.split('=')[1]

  if (consent === undefined) {
    return null
  }

  return JSON.parse(consent)
}

export function storeConsent(consent: Consent, consentKey: string) {
  document.cookie = `${consentKey}=${JSON.stringify(consent)}; SameSite=None; Secure`
}

export function saveAndApply(consent: Consent, consentKey: string) {
  storeConsent(consent, consentKey)
  updateConsent(consent)

  window.dispatchEvent(new CustomEvent('consent:change', { detail: consent }))
}
