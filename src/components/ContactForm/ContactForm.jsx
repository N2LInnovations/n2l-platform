'use client'

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import { useCookie } from '@/app/hooks/useCookie'

const ContactForm = () => {
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)
  const [cookie, setCookie] = useCookie('contactFormSubmission', '')
  // form validation
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    message: Yup.string().required('Please, write your message.'),
    email: Yup.string()
      .required('Email is required')
      .email('Entered value does not match email format'),
  })

  const formOptions = { resolver: yupResolver(validationSchema) }

  const { register, handleSubmit, reset, formState } = useForm(formOptions)
  const { errors } = formState

  const canSubmit = cookie => {
    if (!cookie || cookie === '') {
      return true
    }

    const date = new Date(cookie)
    const now = new Date()

    return date.getTime() + 60_000 * 60 * 60 * 24 <= now.getTime()
  }

  const onSubmit = async formValues => {
    setError(false)
    setSuccess(false)

    const res = await fetch('/api/contact', {
      body: JSON.stringify(formValues),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })

    const error = res.status !== 200

    if (!canSubmit(cookie) || error) {
      setError(true)
      return
    }

    setSuccess(true)
    setCookie(new Date().toString())
    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='contact_form'>
      <div className='ptf-form-group'>
        <label data-number='01'>What’s your name?</label>
        <input
          type='text'
          name='name'
          {...register('name')}
          className={`${errors.name ? 'is-invalid' : ''}`}
        />
        {errors.name && <div className='invalid-feedback'>{errors.name?.message}</div>}
      </div>
      {/* End .ptf-form-group */}

      <div className='ptf-form-group'>
        <label data-number='02'>What’s your email address?</label>
        <input
          name='email'
          type='text'
          {...register('email')}
          className={` ${errors.email ? 'is-invalid' : ''}`}
        />
        {errors.email && <div className='invalid-feedback'>{errors.email?.message}</div>}
      </div>
      {/* End .ptf-form-group */}

      <div className='ptf-form-group'>
        <label data-number='03'>Please write your message here.</label>
        <textarea
          name='message'
          {...register('message')}
          className={`${errors.projectGoal ? 'is-invalid' : ''}`}
        />
        {errors.message && <div className='invalid-feedback'>{errors.message?.message}</div>}
      </div>
      {/* End .ptf-form-group */}

      {/* <!--Spacer--> */}
      <div className='ptf-spacer' style={{ '--ptf-xxl': '2.5rem' }}></div>

      {/* <!--Spacer--> */}
      <div className='ptf-spacer' style={{ '--ptf-xxl': '5.625rem' }}></div>
      {success && (
        <div className='alert alert-success' role='alert'>
          Your message has been sent successfully.
        </div>
      )}
      {error && (
        <div className='alert alert-danger' role='alert'>
          Something went wrong. Please try again.
        </div>
      )}
      <button
        className='ptf-submit-button'
        type='submit'
        disabled={formState.isSubmitting || !canSubmit(cookie)}
      >
        {formState.isSubmitting ? 'Sending...' : 'Send Message'}
        <svg xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 17 17'>
          <path d='M16 .997V10h-1V2.703L4.683 13l-.707-.708L14.291 1.997H6.975v-1H16z' />
        </svg>
      </button>
      {/* End .ptf-submit-button */}
    </form>
  )
}

export default ContactForm
