import React from 'react'
import { useLottie } from 'lottie-react'
import third from '../../../../public/assets/animations/3.json'

const MainPage = () => {
  const options = {
    animationData: third,
    loop: true,
  }

  const { View } = useLottie(options)

  return <>{View}</>
}

export default MainPage
