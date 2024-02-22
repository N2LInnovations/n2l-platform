import MobileDetect from 'mobile-detect'

export const getIsSsrMobile = context => {
  const md = new MobileDetect(context.req.headers['user-agent'])

  return Boolean(md.mobile())
}
