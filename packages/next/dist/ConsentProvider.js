"use client";
import { useEffect } from "react";
import initConsent from "@cookie-consent/core";
export function ConsentProvider() {
    const gtmId = process.env.NEXT_PUBLIC_GTM_ID || "";
    useEffect(() => {
        initConsent({
            gtmId,
        });
    }, []);
    return null;
}
