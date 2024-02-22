'use client'

import ReactFullpage from '@fullpage/react-fullpage'

import { AnimatePage } from '@/components/AnimatePage'
import HeroSection from '@/components/HeroSection/HeroSection'
import Services from '@/components/Services/Services'
import Pricing from '@/components/Pricing/Pricing'
import Sectors from '@/components/Sectors/Sectors'
import Modal from '@/components/Modal/Modal'
import { useEffect, useState } from 'react'
import { sanityClient } from '@/lib/sanity'
import { servicesQuery } from '@/queries/services'

const pages = [
  {
    id: 'home',
    title: 'Home',
    component: HeroSection,
  },
  {
    id: 'services',
    title: 'Services',
    component: Services,
  },
  // {
  //   id: 'pricing',
  //   title: 'Pricing',
  //   component: Pricing,
  // },
  // {
  //   id: 'sectors',
  //   title: 'Sectors',
  //   component: Sectors,
  // },
]

const getServices = async () => {
  return await sanityClient.fetch(servicesQuery)
}

const HomePage = () => {
  const [showModal, setShowModal] = useState(false)
  const [services, setServices] = useState([])
  const [currentService, setCurrentService] = useState({})
  const [enterSection1, setEnterSection1] = useState(true)

  const handleClose = () => {
    setShowModal(false)
  }

  const onLeave = origin => {
    if (origin.index === 1) {
      setEnterSection1(true)
    } else {
      setEnterSection1(false)
    }
  }

  useEffect(() => {
    getServices().then(data => {
      // sort by order
      data.sort((a, b) => a.order - b.order)
      setServices(data)
    })
  }, [])

  return (
    <>
      <AnimatePage>
        <main id='content'>
          <ReactFullpage
            licenseKey={'gplv3-license'}
            scrollingSpeed={400}
            onLeave={onLeave}
            css3={false}
            render={fullpageApi => (
              <ReactFullpage.Wrapper>
                {pages.map(page => (
                  <div key={page.id} className='section' id={page.id}>
                    <page.component
                      enterSection1={enterSection1}
                      fullpageApi={fullpageApi}
                      setShowModal={setShowModal}
                      showModal={showModal}
                      setCurrentService={setCurrentService}
                      services={services}
                    />
                  </div>
                ))}
              </ReactFullpage.Wrapper>
            )}
            credits='full page'
          />
        </main>
        {showModal && (
          <Modal
            handleClose={handleClose}
            services={services}
            currentService={currentService}
            setCurrentService={setCurrentService}
          />
        )}
      </AnimatePage>
    </>
  )
}

export default HomePage
