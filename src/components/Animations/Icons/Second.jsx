import React from 'react'
import { useLottie } from 'lottie-react'
import second from '../../../../public/assets/animations/2.json'

const MainPage = () => {
  const options = {
    animationData: second,
    loop: true,
  }

  const { View } = useLottie(options)

  return <>{View}</>
}

export default MainPage
