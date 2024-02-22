'use client'

import React from 'react'

const Address = () => {
  return (
    <>
      {/* <!--Animated Block--> */}
      <div>
        <h5 className='fz-14 text-uppercase has-3-color fw-normal'>Address</h5>
        {/* <!--Spacer--> */}
        <div className='ptf-spacer' style={{ '--ptf-xxl': '1.25rem' }}></div>
        <p className='fz-20 lh-1p5 has-black-color'>
          Montreal, Quebec
          <br />
          Canada
        </p>
      </div>

      {/* <!--Spacer--> */}
      <div className='ptf-spacer' style={{ '--ptf-xxl': '2.1875rem' }}></div>

      {/* <!--Animated Block--> */}
      <div>
        <h5 className='fz-14 text-uppercase has-3-color fw-normal'>Email</h5>
        {/* <!--Spacer--> */}
        <div className='ptf-spacer' style={{ '--ptf-xxl': '1.25rem' }}></div>
        <p className='fz-20 lh-1p5 has-black-color'>
          <a href='mailto:info@n2l.com'>
            info@n2l.com
            <br />
          </a>
        </p>
      </div>

      {/* <!--Spacer--> */}
      <div className='ptf-spacer' style={{ '--ptf-xxl': '2.1875rem' }}></div>

      {/* <!--Animated Block--> */}
      <div>
        <h5 className='fz-14 text-uppercase has-3-color fw-normal'>Phone</h5>
        {/* <!--Spacer--> */}
        <div className='ptf-spacer' style={{ '--ptf-xxl': '1.25rem' }}></div>
        <p className='fz-20 lh-1p5 has-black-color'>
          <a href='tel:+1 234 5678'>+1 234 5678</a>
        </p>
      </div>

      {/* <!--Spacer--> */}
      <div className='ptf-spacer' style={{ '--ptf-lg': '4.375rem', '--ptf-md': '2.1875rem' }}></div>
    </>
  )
}

export default Address
