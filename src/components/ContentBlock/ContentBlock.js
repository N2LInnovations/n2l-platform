import { PortableText } from '@portabletext/react'
import imageUrlBuilder from '@sanity/image-url'
import Image from 'next/image'
import Link from 'next/link'
import { sanityClient } from '@/lib/sanity'

const builder = imageUrlBuilder(sanityClient)

export const urlFor = source => {
  return builder.image(source)
}

const components = {
  types: {
    image: ({ value }) => (
      <div
        className='position-relative m-10 mx-md-4 aspect-video vw-100 mx-auto md-w-100
                 lg-max-w-4xl'
      >
        <Image src={urlFor(value).url()} alt={value.alt} className='object-cover' fill />
      </div>
    ),

    reference: () => null,
  },

  list: {
    bullet: ({ children }) => <ul className='ml-6 list-disc space-y-2 py-4 text-lg'>{children}</ul>,
    number: ({ children }) => (
      <ol className='ml-6 list-unstyled list-disc space-y-2 py-4 fs-4'>{children}</ol>
    ),
  },

  block: {
    h1: ({ children }) => <h1 className='py-4 fs-1 fw-bold'>{children}</h1>,
    h2: ({ children }) => <h2 className='py-4 fs-3 fw-bold'>{children}</h2>,
    h3: ({ children }) => <h3 className='py-4 fs-2 fw-bold'>{children}</h3>,
    h4: ({ children }) => <h4 className='py-4 fs-1.5 fw-bold'>{children}</h4>,
    normal: ({ children }) => <p className='py-2 fs-4 lh-base'>{children}</p>,
    blockquote: ({ children }) => (
      <blockquote className='mx-4 my-4 rounded border border-secondary bg-secondary px-4 py-2 fs-4 font-italic'>
        {children}
      </blockquote>
    ),
  },

  marks: {
    link: ({ children, value }) => {
      const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined

      if (!rel) {
        return (
          <Link
            href={value.href}
            className='position-relative font-weight-bold border-bottom border-secondary'
          >
            <span className='underline'>{children}</span>
          </Link>
        )
      }

      return (
        <a href={value.href} rel={rel} className='position-relative font-weight-bold'>
          <span className='underline'>{children}</span>
        </a>
      )
    },
    span: ({ children }) => <span>{children}</span>,
    strong: ({ children }) => <strong className='font-weight-bold'>{children}</strong>,
    em: ({ children }) => <em className='italic'>{children}</em>,
  },
}

export const ContentBlock = ({ value }) => {
  return <PortableText value={value} components={components} />
}
