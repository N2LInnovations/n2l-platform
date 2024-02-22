import { useContext } from 'react'
import { useWindowSize } from '@/components/context/useWindowSize'
import { IsSsrMobileContext } from '@/components/context/isSsrMobile.context'

export const useIsMobile = () => {
  const isSsrMobile = useContext(IsSsrMobileContext)
  const { width: windowWidth } = useWindowSize()
  const isBrowserMobile = !!windowWidth && windowWidth < 992

  return isSsrMobile || isBrowserMobile
}
