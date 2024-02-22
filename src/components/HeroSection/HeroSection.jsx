'use client'

import React, { useState, useEffect, useRef } from 'react'
import { useLocale, useTranslations } from 'next-intl'
import { sanityClient } from '@/lib/sanity'
import { heroSectionQuery } from '@/queries/heroSection'
import { useIsMobile } from '@/app/hooks/useIsMobile'
import Spacer from '@/components/Common/Spacer'

const getData = async () => {
  return await sanityClient.fetch(heroSectionQuery)
}

const HeroSection = ({ enterSection1 }) => {
  const t = useTranslations('HeroSection')
  const locale = useLocale()
  const [heroSection, setHeroSection] = useState([])
  const videoRef = useRef(null)

  const isMobile = useIsMobile()

  console.log('isMobile', isMobile)

  useEffect(() => {
    getData().then(data => {
      setHeroSection(data)
    })
  }, [])

  useEffect(() => {
    if (enterSection1) {
      videoRef.current.play()
    } else {
      videoRef.current.pause()
    }
  }, [enterSection1])

  return (
    <section>
      <div className='container-xxl ptf-main hero-section'>
        <div className='container-fluid mt-5'>
          <div className='d-flex flex-row justify-content-center align-items-center'>
            <Spacer xxl={1} xl={1} lg={1} md={20} sm={20} />
            <h1
              className='
                    fz-40
                    fz-30--md
                    fw-bold
                    lh-1p3
                    text-uppercase
                    has-accent-2
                    heading
                  '
            >
              {locale === 'en' ? heroSection[0]?.captionOneEn : heroSection[0]?.captionOneFr}
            </h1>
            <h1 className='fz-60 fz-45--md'>
              {locale === 'en' ? heroSection[0]?.captionTwoEn : heroSection[0]?.captionTwoFr}
            </h1>
          </div>

          <div className='main-image'>
            <a
              className='ptf-btn ptf-btn--primary ptf-btn--inversed'
              href='/contact'
              target='_self'
            >
              {t('contactUs')}
            </a>
            <div className='video-container'>
              <video
                width='100%'
                // height='100%'
                playsInline
                loop
                muted
                autoPlay='autoplay'
                ref={videoRef}
              >
                <source src='/assets/videos/animation.mp4' type='video/mp4' />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
