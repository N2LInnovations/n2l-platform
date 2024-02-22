import React, { useEffect, useState } from 'react'
import { useLocale } from 'next-intl'
import { motion } from 'framer-motion'
import Spacer from '@/components/Common/Spacer'
import Image from 'next/image'
import { sanityClient } from '@/lib/sanity'
import { servicesSectionQuery } from '@/queries/servicesSection'

const getCaptions = async () => {
  return await sanityClient.fetch(servicesSectionQuery)
}

const Services = ({ fullpageApi, showModal, setShowModal, services, setCurrentService }) => {
  const locale = useLocale()

  const [serviceCaptions, setServiceCaptions] = useState([])

  const variants = i => ({
    offscreen: {
      opacity: 0,
      y: 20,
    },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
      },
    },
  })

  const onServiceClick = item => {
    setCurrentService(item)
    setShowModal(true)
  }

  useEffect(() => {
    if (!fullpageApi) return
    if (showModal) {
      fullpageApi.fullpageApi.setAllowScrolling(false)
    }
    return () => {
      fullpageApi.fullpageApi.setAllowScrolling(true)
    }
  }, [showModal])

  useEffect(() => {
    getCaptions().then(data => {
      setServiceCaptions(data)
    })
  }, [])

  return (
    <section>
      <Spacer xxl={3} xl={3} lg={3} md={7} sm={7} />
      <div className='container-xxl services-section'>
        <div className='row'>
          <div className='col-lg-3'>
            <h2 className='h1 large-heading mb-2'>
              {locale === 'en'
                ? serviceCaptions[0]?.captionOneEn
                : serviceCaptions[0]?.captionOneFr}
            </h2>
            <Spacer unique={1} />
            <p className='fz-20'>
              {locale === 'en'
                ? serviceCaptions[0]?.captionTwoEn
                : serviceCaptions[0]?.captionTwoFr}
            </p>
          </div>
          <motion.div
            className='col-lg-8 offset-lg-1'
            initial='offscreen'
            whileInView='onscreen'
            viewport={{ once: true, amount: 0.6 }}
          >
            {services.map((item, i) => (
              <div className={`${i === 0 ? 'no-top-border' : 'top-border'}`} key={item.order}>
                <motion.div className='ptf-service-box' variants={variants(i)}>
                  <a onClick={() => onServiceClick(item)} className='ptf-service-box__link'></a>
                  <div className='ptf-service-box__icon'>
                    <Image
                      width={80}
                      height={80}
                      style={{ objectFit: 'contain' }}
                      src={`/assets/img/services/${item.icon}.gif`}
                      alt='logo'
                      loading='lazy'
                    />
                  </div>
                  <h5 className='ptf-service-box__title'>
                    {locale === 'en' ? item.titleEn : item.titleFr}
                  </h5>
                  <div className='ptf-service-box__content'>
                    <p>{locale === 'en' ? item.descriptionEn : item.descriptionFr}</p>
                  </div>
                  <div className='ptf-service-box__arrow'>
                    <i className='lnil lnil-chevron-right'></i>
                  </div>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Services
