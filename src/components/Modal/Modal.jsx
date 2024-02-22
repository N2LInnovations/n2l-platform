import { useLocale } from 'next-intl'
import Image from 'next/image'
import { ContentBlock } from '@/components/ContentBlock/ContentBlock'

const Modal = ({ handleClose, services, currentService, setCurrentService }) => {
  const locale = useLocale()

  const getNextService = () => {
    const currentIndex = services.indexOf(currentService)
    return services[currentIndex + 1]
  }

  const getPrevService = () => {
    const currentIndex = services.indexOf(currentService)
    return services[currentIndex - 1]
  }

  return (
    <>
      <div className='modal-backdrop'>
        <div className='modal'>
          <header className='modal-container-header'>
            <div style={{ display: 'flex' }}>
              <Image
                key={currentService.order}
                width={80}
                height={80}
                style={{ objectFit: 'contain' }}
                src={`/assets/img/services/${currentService.icon}.gif`}
                alt='logo'
                loading='lazy'
              />
              <h1 className='modal-container-title'>
                {locale === 'en' ? currentService.titleEn : currentService.titleFr}
              </h1>
            </div>
            <button className='icon-button' onClick={handleClose}>
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'>
                <path fill='none' d='M0 0h24v24H0z' />
                <path
                  fill='currentColor'
                  d='M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z'
                />
              </svg>
            </button>
          </header>
          <section className='modal-container-body rtf'>
            <h2>
              {locale === 'en'
                ? currentService.fullDescriptionTitleEn
                : currentService.fullDescriptionTitleFr}
            </h2>
            <ContentBlock
              value={
                locale === 'en'
                  ? currentService.fullDescriptionEn
                  : currentService.fullDescriptionFr
              }
            />
            <div className='modal-container-footer'>
              {currentService !== services[0] ? (
                <button className='button' onClick={() => setCurrentService(getPrevService())}>
                  Previous
                </button>
              ) : (
                <div> </div>
              )}
              {currentService === services[2] ? null : (
                <button className='button' onClick={() => setCurrentService(getNextService())}>
                  Next
                </button>
              )}
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default Modal
