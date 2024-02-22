'use client'

import React, { useState, useEffect, useTransition } from 'react'
import { usePathname, useRouter } from 'next-intl/client'
import Link from 'next/link'
import MobileMenu from './menu/MobileMenu'
import Image from 'next/image'
import ReactTicker from '@/components/Ticker/Ticker'
import { useIsMobile } from '@/app/hooks/useIsMobile'

const Navbar = () => {
  const [isPending, startTransition] = useTransition()
  const [selectedLocale, setSelectedLocale] = useState('en')
  const [isSideBarOpen, setIsSideBarOpen] = useState(false)

  const router = useRouter()
  const pathname = usePathname()

  const onLocaleChange = localeSelection => {
    setSelectedLocale(localeSelection)
    startTransition(() => {
      router.replace(pathname, {
        locale: localeSelection,
      })
    })
  }

  const handleOpenSideBar = () => setIsSideBarOpen(!isSideBarOpen)

  const isMobile = useIsMobile()

  const [navbar, setNavbar] = useState(false)

  const changeBackground = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY >= 80) {
        setNavbar(true)
      } else {
        setNavbar(false)
      }
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', changeBackground)
  }, [])

  useEffect(() => {
    const currentLocale = window.location.pathname.split('/')[1]
    if (currentLocale !== 'fr') {
      setSelectedLocale('en')
    } else {
      setSelectedLocale('fr')
    }
  }, [pathname])

  return (
    <>
      <header className='ptf-header ptf-header--style-3'>
        <div
          className={
            navbar
              ? 'ptf-navbar ptf-navbar--main ptf-navbar--sticky ptf-navbar--fixed'
              : 'ptf-navbar ptf-navbar--main ptf-navbar--sticky'
          }
        >
          <div className='container-xxl'>
            <div className='ptf-navbar-inner'>
              {!isMobile && (
                <Link className='ptf-navbar-logo' href='/'>
                  <Image
                    width={80}
                    height={80}
                    style={{ objectFit: 'contain' }}
                    className='black'
                    src='/assets/img/n2l-logo.png'
                    alt='logo'
                    loading='lazy'
                  />
                </Link>
              )}

              <ReactTicker />

              <div
                className='ptf-offcanvas-menu-icon js-offcanvas-menu-toggle bar right'
                onClick={handleOpenSideBar}
              >
                {isMobile ? (
                  <Image
                    width={100}
                    height={100}
                    className='black'
                    src='/assets/img/n2l-logo.png'
                    alt='logo'
                    loading='lazy'
                  />
                ) : (
                  <i className='lnir lnir-menu-alt-5'></i>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className={isSideBarOpen ? 'ptf-offcanvas-menu is-open' : 'ptf-offcanvas-menu '}>
        <div className='ptf-offcanvas-menu__header'>
          <div className='ptf-language-switcher'>
            <button
              className={selectedLocale === 'en' ? 'is-active' : ''}
              onClick={() => onLocaleChange('en')}
              disabled={isPending}
            >
              Eng
            </button>
            <button
              className={selectedLocale === 'fr' ? 'is-active' : ''}
              onClick={() => onLocaleChange('fr')}
              disabled={isPending}
            >
              Fra
            </button>
          </div>
          <span
            className='ptf-offcanvas-menu-icon js-offcanvas-menu-toggle'
            onClick={handleOpenSideBar}
          >
            <i className='lnir lnir-close'></i>
          </span>
        </div>
        <MobileMenu />
      </div>
    </>
  )
}

export default Navbar
