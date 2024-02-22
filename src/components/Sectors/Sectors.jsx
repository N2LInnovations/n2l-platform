'use client'

import React from 'react'
import Link from 'next/link'
import Masonry from 'react-masonry-css'
import Image from 'next/image'
import { dataGrid } from './data'
import Spacer from '@/components/Common/Spacer'

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  768: 2,
  500: 1,
}

const Sectors = () => {
  return (
    <section>
      <Spacer xxl={8} xl={8} lg={8} md={10} sm={10} />
      <div className='container-xxl container-xxl--custom'>
        <h2 className='h1 large-heading'>Areas where we focus</h2>
        <div className='ptf-spacer' style={{ '--ptf-xxl': '2rem', '--ptf-md': '1rem' }}></div>
        <div className='ptf-isotope-grid'>
          {' '}
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className='my-masonry-grid'
            columnClassName='my-masonry-grid_column'
          >
            {dataGrid.map((item, i) => (
              <div className='grid-item' key={i}>
                <article className='ptf-post ptf-post--style-2'>
                  <div className='ptf-post__media'>
                    <Image
                      width={1200}
                      height={1200}
                      style={{ width: '100%', height: '100%' }}
                      src={item.img}
                      alt='post'
                      loading='lazy'
                    />
                    <div className='ptf-post__media__content'>
                      <header className='ptf-post__header'>
                        <h3 className='ptf-post__title'>{item.title}</h3>
                      </header>
                    </div>
                  </div>
                  {/* End .ptf-post */}
                  <div className='ptf-post__content'>
                    <header className='ptf-post__header'>
                      <h3 className='ptf-post__title'>
                        <Link href={`/blog-details-sidebar/${item.id}`}>{item.title}</Link>
                      </h3>
                    </header>
                    <div className='ptf-post__excerpt'>
                      <p>{item.description}</p>
                    </div>
                    <footer className='ptf-post__footer'>
                      <Link
                        className='ptf-read-more-link'
                        href={`/blog-details-sidebar/${item.id}`}
                      >
                        Read more
                      </Link>
                    </footer>
                  </div>
                </article>
              </div>
            ))}
          </Masonry>
        </div>
      </div>
    </section>
  )
}

export default Sectors
