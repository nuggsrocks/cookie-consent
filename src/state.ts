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
  try {
    // @ts-expect-error
    const consent = JSON.parse(localStorage.getItem(consentKey))

    return consent
  } catch (err) {
    if (process.env.NODE_ENV !== 'production') console.warn(err)
    return null
  }
}

export function storeConsent(consent: Consent, consentKey: string) {
  localStorage.setItem(consentKey, JSON.stringify(consent))
}

export function saveAndApply(consent: Consent, consentKey: string) {
  storeConsent(consent, consentKey)
  updateConsent(consent)

  window.dispatchEvent(new CustomEvent('consent:change', { detail: consent }))
}
