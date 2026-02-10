'use client'

import { initConsent } from './init'
import { useEffect } from 'react'

export default function ConsentProvider({
  gtmId,
}: {
  gtmId: string | undefined
}) {
  useEffect(() => {
    if (gtmId === undefined) {
      if (process.env.NODE_ENV !== 'production') {
        console.warn('No Google tag ID specified!')
      }
      return
    }
    initConsent({ gtmId })
  }, [])

  return null
}
