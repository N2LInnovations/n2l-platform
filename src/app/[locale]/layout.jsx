import Script from 'next/script'

import { Analytics } from '@vercel/analytics/react'
import { NextIntlClientProvider } from 'next-intl'
import { notFound } from 'next/navigation'

import 'aos/dist/aos.css'
import dynamic from 'next/dynamic'

import LayoutClient from '@/app/[locale]/layout-client'

import '../../../public/assets/scss/main.scss'
import { websiteJsonLd } from '@/lib/config/jsonLd'

const ScrollToTop = dynamic(() => import('@/components/Common/ScrollToTop'), {
  ssr: false,
})

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'fr' }]
}

export default async function RootLayout({ children, params: { locale } }) {
  let messages

  try {
    messages = (await import(`../../messages/${locale}.json`)).default
  } catch (error) {
    notFound()
  }

  return (
    <html lang={locale} suppressHydrationWarning={true} className='html'>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <LayoutClient>{children}</LayoutClient>
        </NextIntlClientProvider>
        <ScrollToTop />
        <Script
          id='website-data'
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <Analytics />
      </body>
    </html>
  )
}
