'use client'
import { IsSsrMobileContext } from '@/components/context/isSsrMobile.context'

import Navbar from '@/components/Navbar/Navbar'

export default function LayoutClient({ children }) {
  return (
    <>
      <Navbar />
      <IsSsrMobileContext.Provider value={false}>{children}</IsSsrMobileContext.Provider>
    </>
  )
}
