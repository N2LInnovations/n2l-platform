import nodemailer from 'nodemailer'
import { NextResponse } from 'next/server'

export async function POST(req) {
  const { name, email, message } = await req.json()

  if (!email) {
    return NextResponse.json({ error: 'Email is required' })
  }

  const transporter = nodemailer.createTransport({
    host: 'smtp.sendgrid.net',
    port: 587,
    auth: {
      user: 'apikey',
      pass: process.env.SENDGRID_API_KEY,
    },
  })

  try {
    await new Promise((resolve, reject) => {
      transporter.sendMail(
        {
          from: `${name}<vickramb@gmail.com>`,
          to: 'info@n2l.com',
          replyTo: email,
          subject: `Email from n2l website`,
          text: message,
          html: `<div>
            <p>${message}</p>
          </div>`,
        },
        error => {
          if (error) {
            console.log(error)
            reject(error)
          } else {
            resolve()
          }
        },
      )
    })
    return NextResponse.json({ status: 'success' })
  } catch (err) {
    return NextResponse.json({ errorMessage: err })
  }
}
