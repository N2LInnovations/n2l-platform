'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Spacer from '@/components/Common/Spacer'

const pricingContent = [
  {
    planName: 'MEMBER',
    price: '0',
    priceDuration: 'Month',
    pricingFeatures: ['Advantages'],
    delayAnimation: '0',
  },
  {
    planName: 'CREW MEMBER',
    price: '69',
    priceDuration: 'Month',
    pricingFeatures: ['This advantage', 'That advantage'],
    delayAnimation: '0.3',
  },
  {
    planName: 'CREW BOSS',
    price: '99',
    priceDuration: 'Month',
    pricingFeatures: ['This advantage', 'That advantage', 'This advantage'],
    delayAnimation: '0.6',
  },
]

const variants = delay => ({
  offscreen: {
    opacity: 0,
    scale: 0.5,
  },
  onscreen: {
    opacity: 1,
    scale: 1,
    transition: {
      ease: 'linear',
      duration: delay,
    },
  },
})

const Pricing = () => {
  return (
    <section style={{ overflow: 'hidden' }}>
      <Spacer unique={7} />
      <div className='container'>
        <h2 className='h1 large-heading'>Take part & Take over</h2>
        <Spacer xxl={1} xl={1} lg={1} md={0.5} sm={0.5} />
        <h4 className='h4'>Become part of our fair & transparent business</h4>
        <Spacer xxl={3.75} xl={3.75} lg={3.75} md={1.875} sm={1.875} />
      </div>
      <motion.div
        className='container'
        initial='offscreen'
        whileInView='onscreen'
        viewport={{ once: true, amount: 0.6 }}
      >
        <div className='row pricing-table-row'>
          {pricingContent.map((item, i) => (
            <motion.div
              className='col-xl-4 col-lg-6 mb-3'
              key={i}
              variants={variants(item.delayAnimation)}
            >
              <div className='ptf-pricing-table h-100'>
                <div className='ptf-pricing-table__header'>
                  <h4 className='ptf-pricing-table__title'>{item.planName}</h4>
                </div>
                <div className='ptf-pricing-table__price'>
                  <span className='currency'>$</span>
                  <span className='price'>{item.price}</span>
                  <span className='period'>/ {item.priceDuration}</span>
                </div>
                <div className='ptf-pricing-table__content'>
                  <ul>
                    {item.pricingFeatures.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div className='ptf-pricing-table__action'>
                  <Link
                    id='desktop'
                    className='ptf-btn ptf-btn--primary ptf-btn--block'
                    href='/contact'
                  >
                    Get more details
                  </Link>
                  <Link id='mobile' href='/contact'>
                    <span>Get more details</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Pricing
