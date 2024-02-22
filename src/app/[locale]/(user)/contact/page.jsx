import ContactForm from '@/components/ContactForm/ContactForm'
import Address from '@/components/Adress/Address'

const Contact = () => {
  return (
    <>
      <div className='ptf-main'>
        <div className='ptf-page ptf-page--contact'>
          <section>
            {/* <!--Spacer--> */}
            <div className='ptf-spacer' style={{ '--ptf-xxl': '10rem', '--ptf-md': '5rem' }}></div>

            <div className='container-xxl'>
              <div className='row'>
                <div className='col-xl-10'>
                  <h1 className='large-heading'>Let&apos;s Connect</h1>
                  {/* <!--Spacer--> */}
                  <div
                    className='ptf-spacer'
                    style={{ '--ptf-xxl': '3rem', '--ptf-md': '2.5rem' }}
                  ></div>
                </div>
              </div>
              {/* End .row */}
            </div>
            {/* Contact top portion */}

            {/* <!--Spacer--> */}
            <div
              className='ptf-spacer'
              style={{ '--ptf-xxl': '6.25rem', '--ptf-md': '3.125rem' }}
            ></div>
          </section>
          {/* End section contact header */}

          <section>
            <div className='container-xxl'>
              <div className='row'>
                <div className='col-lg-4'>
                  <Address />
                </div>
                {/* End .col */}

                <div className='col-lg-8'>
                  {/* <!--Animated Block--> */}
                  <div>
                    {/* <!--Spacer--> */}
                    <div className='ptf-spacer' style={{ '--ptf-xxl': '3.125rem' }}></div>
                    <ContactForm />
                    {/* End ContactForm */}
                  </div>
                </div>
                {/* End .col */}
              </div>
            </div>
            {/* <!--Spacer--> */}
            <div className='ptf-spacer' style={{ '--ptf-xxl': '10rem', '--ptf-md': '5rem' }}></div>
          </section>
        </div>
      </div>
    </>
  )
}

export default Contact
