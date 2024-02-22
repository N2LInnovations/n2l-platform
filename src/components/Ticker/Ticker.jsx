'use client'

import { useState, useEffect } from 'react'
import { useLocale } from 'next-intl'
import Ticker from 'framer-motion-ticker'
import { useIsMobile } from '@/app/hooks/useIsMobile'
import { sanityClient } from '@/lib/sanity'
import { tickerPostsQuery } from '@/queries/tickerPosts'

const News = ({ author, bodyEn, bodyFr, locale }) => (
  <span className='d-flex align-items-center'>
    <span className='author'>@{author}&nbsp;</span>
    {locale === 'fr' ? <span className='content'>{bodyFr}</span> : null}
    {locale === 'en' ? <span className='content'>{bodyEn}</span> : null}
  </span>
)

const getData = async () => {
  return await sanityClient.fetch(tickerPostsQuery)
}

const ReactTicker = () => {
  const [tickerPosts, setTickerPosts] = useState([])
  const isMobile = useIsMobile()
  const locale = useLocale()

  useEffect(() => {
    getData().then(data => {
      setTickerPosts(data)
    })
  }, [])

  if (isMobile) {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-sm-12 p-0'>
            <div className='d-flex justify-content-between align-items-center ticker_mobile'>
              <div className='d-flex flex-row justify-content-center py-2 text-white px-1 news_mobile'>
                <span className='d-flex align-items-center'>News</span>
              </div>
              {tickerPosts.length !== 0 && (
                <Ticker duration={20}>
                  {tickerPosts.map((item, index) => (
                    <div key={index} style={{ marginRight: '15px', height: '26px' }}>
                      <News {...item} locale={locale} />
                    </div>
                  ))}
                </Ticker>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className='container'>
      <div className='row justify-content-center'>
        <div className='col-md-10'>
          <div className='d-flex justify-content-between align-items-center bg-white ticker'>
            <div className='d-flex flex-row justify-content-center py-2 text-white px-1 news'>
              <span className='d-flex align-items-center'>News Updates</span>
            </div>
            {tickerPosts.length !== 0 && (
              <Ticker duration={20}>
                {tickerPosts.map((item, index) => (
                  <div key={index} style={{ marginRight: '15px', height: '26px' }}>
                    <News {...item} locale={locale} />
                  </div>
                ))}
              </Ticker>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReactTicker
