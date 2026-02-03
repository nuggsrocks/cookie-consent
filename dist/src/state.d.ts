type Consent = {
    analytics: boolean;
    marketing: boolean;
};
export declare function setDefaultConsent(): void;
export declare function updateConsent(consent: Consent): void;
export declare function getStoredConsent(consentKey: string): any;
export declare function storeConsent(consent: Consent, consentKey: string): void;
export declare function saveAndApply(consent: Consent, consentKey: string): void;
export {};
